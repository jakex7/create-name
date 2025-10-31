import {Args, Command, Flags} from '@oclif/core'
// eslint-disable-next-line import/default
import ux from '@oclif/core/ux' // @oclif/core/ux exports are invalid
const {colorize, colorizeJson} = ux
import inquirer from 'inquirer'
import {execSync} from 'node:child_process'
import {mkdirSync, writeFileSync} from 'node:fs'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

const theme = {
  boolean: 'cyan',
  colon: 'dim',
  comma: 'yellow',
  key: 'bold',
  null: 'redBright',
  number: 'blue',
  string: 'green',
}

export default class Main extends Command {
  static args = {
    name: Args.string({description: 'New package name', required: true}),
  }
  static description =
    'Quickly scaffolds a valid placeholder package that meets all npm publishing requirements, preparing it for future development.'
  static examples = [`example`]
  static flags = {
    author: Flags.string({char: 'a', description: 'Package author', required: false}),
    description: Flags.string({
      aliases: ['desc'],
      default: 'Work in progress',
      description: 'Package description',
      required: false,
    }),
    'dry-run': Flags.boolean({aliases: ['dry'], char: 'd', default: false, description: 'Dry run without publishing'}),
    license: Flags.string({default: 'MIT', description: 'Package license'}),
    private: Flags.boolean({default: false, description: 'Mark package as private'}),
    repository: Flags.string({description: 'Repository URL', required: false}),
    temp: Flags.boolean({char: 't', default: false, description: 'Create a package in temporary directory'}),
    version: Flags.string({char: 'v', default: '0.0.0', description: 'Package version'}),
  }
  static override id: string = ''

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Main)

    let {author, repository} = flags
    if (!author) {
      try {
        const authorName = execSync('git config user.name', {encoding: 'utf8'}).trim()
        const authorEmail = execSync('git config user.email', {encoding: 'utf8'}).trim()
        author = authorEmail ? `${authorName} <${authorEmail}>` : authorName
      } catch {
        // Git config not available, will use flags if provided
      }
    }

    if (!repository) {
      try {
        const username = execSync('gh api user -q .login', {encoding: 'utf8'}).trim()
        repository = `https://github.com/${username}/${args.name}.git`
      } catch {
        // GitHub CLI not available or not logged in
      }
    }

    let dir = args.name
    if (flags.temp) {
      dir = join(tmpdir(), args.name)
    }

    mkdirSync(dir, {recursive: true})

    const packageJson: Record<string, unknown> = {
      author,
      description: flags.description,
      license: flags.license,
      main: 'index.js',
      name: args.name,
      private: flags.private,
      repository,
      version: flags.version,
    }

    writeFileSync(join(dir, 'package.json'), JSON.stringify(packageJson, null, 2))
    this.log(
      `Creating ${colorize('yellow', args.name)} package at ${colorize('gray', dir === args.name ? `./${dir}` : dir)}`,
    )
    this.log(`Content of ${colorize('yellow', 'package.json')}:
${colorizeJson(packageJson, {theme})}
`)

    const answers = await inquirer.prompt([
      {
        default: false,
        message: `Are you sure you want to publish ${colorize('yellow', args.name)} to ${colorize('red', 'npm')}?`,
        name: 'confirm',
        type: 'confirm',
      },
    ])
    if (!answers.confirm) return

    this.log(`Publishing ${colorize('yellow', args.name)}...`)
    if (flags['dry-run']) {
      this.log(colorize('cyan', '[Dry Run] Skipping npm publish'))
      return
    }

    execSync('npm publish', {cwd: dir, stdio: 'inherit'})

    this.log(`Successfully published ${colorize('yellow', args.name)}!`)
    this.log(`https://www.npmjs.com/package/${args.name}`)
  }
}

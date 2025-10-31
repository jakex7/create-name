# create-package-name

Create a new npm package boilerplate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-package-name.svg)](https://npmjs.org/package/create-package-name)
[![Downloads/week](https://img.shields.io/npm/dw/create-package-name.svg)](https://npmjs.org/package/create-package-name)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g create-package-name
$ create-package-name COMMAND
running command...
$ create-package-name (--version)
create-package-name/0.0.0 darwin-arm64 node-v23.9.0
$ create-package-name --help [COMMAND]
USAGE
  $ create-package-name COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`create-package-name hello PERSON`](#create-package-name-hello-person)
- [`create-package-name hello world`](#create-package-name-hello-world)
- [`create-package-name help [COMMAND]`](#create-package-name-help-command)
- [`create-package-name plugins`](#create-package-name-plugins)
- [`create-package-name plugins add PLUGIN`](#create-package-name-plugins-add-plugin)
- [`create-package-name plugins:inspect PLUGIN...`](#create-package-name-pluginsinspect-plugin)
- [`create-package-name plugins install PLUGIN`](#create-package-name-plugins-install-plugin)
- [`create-package-name plugins link PATH`](#create-package-name-plugins-link-path)
- [`create-package-name plugins remove [PLUGIN]`](#create-package-name-plugins-remove-plugin)
- [`create-package-name plugins reset`](#create-package-name-plugins-reset)
- [`create-package-name plugins uninstall [PLUGIN]`](#create-package-name-plugins-uninstall-plugin)
- [`create-package-name plugins unlink [PLUGIN]`](#create-package-name-plugins-unlink-plugin)
- [`create-package-name plugins update`](#create-package-name-plugins-update)

## `create-package-name hello PERSON`

Say hello

```
USAGE
  $ create-package-name hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ create-package-name hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/jakex7/create-package-name/blob/v0.0.0/src/commands/hello/index.ts)_

## `create-package-name hello world`

Say hello world

```
USAGE
  $ create-package-name hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ create-package-name hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/jakex7/create-package-name/blob/v0.0.0/src/commands/hello/world.ts)_

## `create-package-name help [COMMAND]`

Display help for create-package-name.

```
USAGE
  $ create-package-name help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-package-name.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.34/src/commands/help.ts)_

## `create-package-name plugins`

List installed plugins.

```
USAGE
  $ create-package-name plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-package-name plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/index.ts)_

## `create-package-name plugins add PLUGIN`

Installs a plugin into create-package-name.

```
USAGE
  $ create-package-name plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into create-package-name.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CREATE_PACKAGE_NAME_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CREATE_PACKAGE_NAME_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ create-package-name plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ create-package-name plugins add myplugin

  Install a plugin from a github url.

    $ create-package-name plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ create-package-name plugins add someuser/someplugin
```

## `create-package-name plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-package-name plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-package-name plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/inspect.ts)_

## `create-package-name plugins install PLUGIN`

Installs a plugin into create-package-name.

```
USAGE
  $ create-package-name plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into create-package-name.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CREATE_PACKAGE_NAME_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CREATE_PACKAGE_NAME_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ create-package-name plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ create-package-name plugins install myplugin

  Install a plugin from a github url.

    $ create-package-name plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ create-package-name plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/install.ts)_

## `create-package-name plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ create-package-name plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-package-name plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/link.ts)_

## `create-package-name plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-package-name plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-package-name plugins unlink
  $ create-package-name plugins remove

EXAMPLES
  $ create-package-name plugins remove myplugin
```

## `create-package-name plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ create-package-name plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/reset.ts)_

## `create-package-name plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-package-name plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-package-name plugins unlink
  $ create-package-name plugins remove

EXAMPLES
  $ create-package-name plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/uninstall.ts)_

## `create-package-name plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-package-name plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-package-name plugins unlink
  $ create-package-name plugins remove

EXAMPLES
  $ create-package-name plugins unlink myplugin
```

## `create-package-name plugins update`

Update installed plugins.

```
USAGE
  $ create-package-name plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.52/src/commands/plugins/update.ts)_

<!-- commandsstop -->

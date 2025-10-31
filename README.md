# create-name

Quickly scaffolds a valid placeholder package that meets all npm publishing requirements, preparing it for future development.

## Usage

### With yarn

```bash
yarn create name <name> [options]
```

### With npm global install

```bash
npm install -g create-name
```

```bash
create-name <name> [options]
```

## Options

- `--author, -a <author>`: Package author
- `--description, --desc <description>`: Package description (default: "Work in progress")
- `--dry-run, --dry, -d`: Dry run without publishing
- `--license <license>`: Package license (default: "MIT")
- `--private`: Mark package as private
- `--repository <url>`: Repository URL
- `--temp, -t`: Create a package in temporary directory

## Examples

Create a basic package:

```bash
yarn create name my-package
```

Create a package with custom description and author:

```bash
yarn create name my-package --description "My awesome package" --author "John Doe"
```

Create in temporary directory:

```bash
yarn create name my-package --temp
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT

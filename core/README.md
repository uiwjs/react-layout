react-monorepo-template
===

Simple [React](https://github.com/facebook/react) package development project example template.

## Directory Structure

```bash
├── LICENSE
├── README.md -> core/README.md
├── core              # 📦 package @uiw/react-monorepo-template
│   ├── README.md
│   ├── cjs           # 🔄 Compiled cjs directory
│   ├── esm           # 🔄 Compiled esm directory
│   ├── src           # Package source directory
│   ├── dist.css      # 🔄 compile less to css
│   ├── package.json  # name => @uiw/react-monorepo-template
│   └── tsconfig.json
├── lerna.json
├── package.json
├── tsconfig.json
├── test              # ⛑ test case
└── website           # 🐝 Package example test, website
    ├── README.md
    ├── package.json
    ├── public
    ├── src
    └── tsconfig.json
```

## Development

1. Install

```bash
npm install
```

2. Dependencies in the installation package and example

```bash
npm run hoist
```

3. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @uiw/react-monorepo-template
npm run watch  # Real-time compilation 📦 @uiw/react-monorepo-template
```

4. Run Document Website Environment:

```bash
npm run start
```

5. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

```
npm run test
```

## License

Licensed under the MIT License.
# Rollup.js - ITSCSS front-end recipe

A recipe for bundling [ES Modules](https://developers.google.com/web/fundamentals/primers/modules) with [rollup.js](https://rollupjs.org/) and a basic Sass (ITCSS) setup.

## Usage

- Clone this repo, download the zip file or use [`degit`](https://www.npmjs.com/package/degit): `npx degit vicompany/front-end-recipes`.
- In the root of the project run `npm ci` or `npm install`.
- The main entry points are:
    - [`src/scripts/main-module.mjs`](src/scripts/main-module.mjs): For modern browsers.
    - [`src/scripts/main-nomodule.mjs`](src/scripts/main-nomodule.mjs): For older browsers that don't support ES Modules.
    - [`src/styles/main.scss`](src/styles/main.scss): Includes our ITCSS setup.

## Tasks

### Development

To start the watchers and a [Browsersync](https://www.browsersync.io/docs) server on http://localhost:3000.

```bash
npm run dev
```

### Production build

 This will lint the source code and create the production builds.

```bash
npm run build
```

These scripts are configured in the [`package.json`](package.json).

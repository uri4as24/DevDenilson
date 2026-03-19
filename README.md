# Urias Lopez

Personal portfolio website for Urias Lopez.

## Node Version

This project requires Node.js 22 LTS.

If Homebrew installed `node@22` but your terminal still uses another version, run:

```sh
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
hash -r
node -v
```

## Development

This project uses Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

```sh
npm install
npm run dev
```

The repo includes `.nvmrc` and `.node-version`, both pinned to `22`.

## Health Check

```sh
npm run health
```

## Build

```sh
npm run build
```

This is my personal blog built using NextJS, TypeScript, and [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).

# Getting Started

## Installing

```bash
npm install
# or
yarn install
```

## Development Server

```bash
npm dev
# or 
yarn dev
```

# Project Structure

Along with the standard NextJS file structure, this project follows the following convention for its `components` top-level directory, where all React components are housed.

Individual components are each within a subdirectory of the same name as the component. Each directory contains an `index.ts` file which has its respective component as a default export. Components are styled through css modules, named `*.module.css` or `*.module.scss`, where `*` is the corresponding component's name.

Within `components` there is a subdirectory `ArticleComponents` containing all components (following the above convention) which are provided to mdx-bundler for rendering. Rather than each individual component directory having an `index.ts`, the `ArticleComponents` subdirectory contains an `index.ts` which has an object containing all article related components as a default export.

Blog posts are placed into the `posts` top-level directory, and are written in [MDX](https://mdxjs.com/) with the assumption that the components in the default export of `ArticleComponents` are available to be used.

Frontmatter properties specified by the [`FrontMatter`](https://github.com/jeffreyshum/blog/blob/c46ced0a313508da1c4021d7da2270de66a0fc3e/pages/%5Bpost%5D.tsx#L21-L30) interface can and should be declared within `.mdx` files. These properties are used in both in the HTMl head and within the page contents.

The `styles` top-level directory contains global stylesheets and stylesheets for each NextJS route.

The `utils` top-level directory contains integral functions like fetching `.mdx` files from `posts`.

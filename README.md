# Tech Test

## Set up

- To add the Recently Viewed & Recommendations section, add the section in the customiser. (Note the section may not appear in the customiser, you might need to view the site outside of the customiser).

## Testing

- When testing, empty local storage > jgRecentlyViewedData in the browser to clear any viewed products

## Dev notes

- npm run build and shopify theme dev -e development in two separate terminals

- To add a new component on the site add an element of data-js-component=‘component name’ and data-js-props=‘json of props’.

- Then in App.tsx import the component into the components obj

- Unfortunately I bumped into a Vite issue that I don’t have time to fix so the above won’t work until that is resolved.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

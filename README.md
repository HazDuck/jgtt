# Tech Test

## Set up

- To add the Recently Viewed & Recommendations section, add the section in the customiser. (Note the section may not appear in the customiser, you might need to view the site outside of the customiser).

## Testing

- When testing, empty local storage > jgRecentlyViewedData in the browser to clear any viewed products.

- Shopify is not always passing back 3 products (perhaps me spamming the endpoint while testing :D) so sometimes only x2 or x3 products are visible, another fallback might be a good idea to ensure x4 products are always visible.

## Dev notes

- npm run build and shopify theme dev -e development in two separate terminal windows.

- To add new components anywhere in the site: in App.tsx add the dynamic import to the components object and the add the relevant script either to the section, template or theme.liquid file. Add the data attribute of data-js-component"component name" and data-js-props"object string of props". This will allow react portals to be added anywhere across the site and a site wide state management approach can be implemented if required.

- Due to time constraints I've left some TS anys in the codebase, this is not best practice and should be fixed.

- I've added some styling options for the section to the section settings, but with more time would want to add much more customisability. 

- Tried to follow atomic design principles and used pre-existing styling to match what is already in Dawn, however a Scss, Tailwind etc would be a good idea going forwards as the project grows in complexity.

- Again due to time constraints tests were omitted but this would be a good idea for critical paths.

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

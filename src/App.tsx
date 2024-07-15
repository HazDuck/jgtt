/* eslint-disable @typescript-eslint/no-explicit-any */
import RecentlyViewed from "./components/containers/RecentlyViewed";

const App = (props: any) => {
  return <RecentlyViewed {...props} />;
};

export default App;

// @WIP: bumped into a vite error & ran out of time so was unable to implement dynamically
// importing components and rendering them in the location of the their corresponding data-js-component attribute
// TypeError: Cannot read properties of null (reading 'useState')

// (() => {
//   // @TODO: move components to a registry file
//   const components: TComponent = {
//     RecentlyViewed: lazy(
//       () => import("./components/containers/RecentlyViewed")
//     ),
//   };

//   // Find all elements with data-js-component attribute & render in DOM with props passed from data-attribute
//   const elements = document.querySelectorAll("[data-js-component]");
//   for (const element of elements) {
//     const el = (element as HTMLElement).dataset;
//     const { jsComponent, jsProps } = el;

//     if (!jsComponent) {
//       return;
//     }
//     const ComponentFound = components[jsComponent];
//     const props = jsProps ? JSON.parse(jsProps) : {};
//     props.rvData = rvData;

//     // @TODO: ReactDOM.render has been deprecated, so would need to relook at this with createRoot
//     ReactDOM.render(
//       <Suspense fallback={<p>...</p>}>
//         <ComponentFound {...props} />
//       </Suspense>,
//       element
//     );
//   }
// })();

// return null;

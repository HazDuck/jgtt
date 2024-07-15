/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from "react-dom";
import { lazy, Suspense } from "react";

type TComponent = {
  // @TODO: remove any
  [key: string]: any;
};

const App = () => {
  (() => {
    // @TODO: move components to a separate file
    //Components registry
    const components: TComponent = {
      RecentlyViewedCarousel: lazy(
        () => import("./components/containers/RecentlyViewedCarousel")
      ),
      RecentlyViewed: lazy(
        () => import("./components/containers/RecentlyViewed")
      ),
      TestComponent: lazy(() => import("./components/atoms/TestComponent")),
    };

    // Find all elements with data-js-component attribute & render in DOM with props passed from data-attribute
    const elements = document.querySelectorAll("[data-js-component]");
    for (const element of elements) {
      const el = (element as HTMLElement).dataset;
      const { jsComponent, jsProps } = el;

      if (!jsComponent) {
        return;
      }
      const ComponentFound = components[jsComponent];
      const props = jsProps ? JSON.parse(jsProps) : {};

      // @TODO: ReactDOM.render has been deprecated, so would need to relook at this with createRoot
      ReactDOM.render(
        <Suspense fallback={<p>...</p>}>
          <ComponentFound {...props} />
        </Suspense>,
        element
      );
    }
  })();

  return (
    <div>
      <p>AppLayer</p>
    </div>
  );
};

export default App;

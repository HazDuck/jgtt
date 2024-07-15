/* eslint-disable @typescript-eslint/no-explicit-any */
// @TODO due to time constraints I've left some anys in the codebase, this is not best practice and should be fixed
declare global {
  interface Window {
    Shopify: any;
  }
}

export type TComponent = {
  [key: string]: any;
};

// types/global.d.ts or in your `src/` directory
export {};

declare global {
  interface Window {
    REACT_APP_CONFIG: {
      API_SECRET: string;
      API_KEY: string;
    };
  }
}

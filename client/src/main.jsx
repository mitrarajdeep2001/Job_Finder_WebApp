import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux-Toolkit/store.js";
import { PersistGate } from "redux-persist/integration/react";
// import("./App.jsx")
const LazyLoadedComponent = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./App.jsx")), 3000); // Add a 3s delay
  });
});
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-2xl font-semibold bg-black">
                <span className="loader"></span>
              </div>
            }
          >
            <LazyLoadedComponent />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

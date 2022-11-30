import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistor, store } from "./components/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
       <HelmetProvider>
        <App />
       </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
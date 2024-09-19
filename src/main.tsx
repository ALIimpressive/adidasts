import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <MainRoutes />
    </Provider>
  </BrowserRouter>
);

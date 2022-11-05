import { BrowserRouter } from "react-router-dom";
import React, {createContext} from 'react';
import UserStore from "./store/UserStore";
import PurposeStore from "./store/PurposeStore";
import { createRoot } from "react-dom/client";

import App from "./App";
export const Context = createContext(null)
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      <Context.Provider value={{
        user: new UserStore(),
        purpose: new PurposeStore(),
    }}>
    <App />
          </Context.Provider>
  </BrowserRouter>

);

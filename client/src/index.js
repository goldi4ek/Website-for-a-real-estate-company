import { BrowserRouter } from "react-router-dom";
import React, {createContext} from 'react';
import UserStore from "./store/UserStore";
import PurposeStore from "./store/PurposeStore";
import { createRoot } from "react-dom/client";

import App from "./App";
import ContactStore from "./store/ContactStore";
export const Context = createContext(null)
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      <Context.Provider value={{
        user: new UserStore(),
        purpose: new PurposeStore(),
        contact: new ContactStore(),
    }}>
    <App />
          </Context.Provider>
  </BrowserRouter>

);

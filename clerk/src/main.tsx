import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const clerk_api_key = process.env.REACT_APP_CLERK_FRONTEND_API;


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider frontendApi={clerk_api_key}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

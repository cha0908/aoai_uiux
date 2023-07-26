import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementChatgptLanding } from "./screens/ElementChatgptLanding";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementChatgptLanding />);

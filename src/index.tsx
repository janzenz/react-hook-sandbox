import * as React from "react";
import { render } from "react-dom";
import App from "./components/App/App";

import "./styles.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

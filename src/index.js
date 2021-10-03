import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./context/store";

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);

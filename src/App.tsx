import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

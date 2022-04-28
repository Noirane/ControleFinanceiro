import { AppBar } from "@material-ui/core"
import {createRoot} from "react-dom/client"
import App from "./App"; 

const root = createRoot(document.querySelector("#root"))

root.render(<App/>)
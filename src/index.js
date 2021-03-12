import React from "react"
import ReactDOM from "react-dom"
import App from "./App/App"
import { BrowserRouter } from "react-router-dom"

import "assets/css/bootstrap.min.css"
import "assets/scss/paper-kit.scss"
import "assets/demo/demo.css"
import "assets/demo/react-demo.css"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)

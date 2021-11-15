import "bootstrap/dist/css/bootstrap.min.css"
import "normalize.css/normalize.css"

// custom CSS styles
import "./src/styles/main.css"
import "./src/styles/fonts.css"

// Highlighting for code blocks
import "prismjs/themes/prism-okaidia.css"

import customWrapPageElement from "./src/components/wrap-page-element"
export const wrapPageElement = customWrapPageElement


// // This is the new side of things
// const React = require("react")
// const Layout = require("./src/components/layout")
// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//     console.log("new pathname", location.pathname)
//     console.log("old pathname", prevLocation ? prevLocation.pathname : null)
//   }
//   // Wraps every page in a component
//   exports.wrapPageElement = ({ element, props }) => {
//     return <Layout {...props}>{element}</Layout>
//   }
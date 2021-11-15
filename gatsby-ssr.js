import customWrapPageElement from "./src/components/wrap-page-element"
export const wrapPageElement = customWrapPageElement


// // This is the new stuff
// const React = require("react")
// const Layout = require("./src/components/layout")

// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }
import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"

export default function Layout({ children }) {
    return (
        <span>
            <Navigation />
            <span>
                {children}
            </span>
            {/* <Footer /> */}
        </span>
    )
}
import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"


const Test = ({ data }) => {
    return (
            <div>
                <Seo title="Test" description="testing" />
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <div className="container flex-grow-1">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-8">
                                <h1 className="main-reveal-text-short">Test</h1>
                                <p className="main-reveal-text">This is another text</p>
                                <ul>
                                {
                                    data.allFile.nodes.map(node => (
                                        <li key={node.name}>
                                            {node.name}
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}




export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default Test
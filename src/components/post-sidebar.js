import React from "react"
import ScrollTracker from "./scroll-tracker"
import ShareBanner from "./share-banner"

class PostSidebar extends React.Component {
    sidebarStyle = {
        paddingTop: 100,
        marginLeft: -30
    }
    static defaultProps = {
        shareUrl: "https://samuelmf.com"
    }
    render() {
        return(
            <ScrollTracker>
                <div style={this.sidebarStyle}>
                    <p>Written by <br /><strong>Sam</strong></p>
                    <p>Share this post!</p>
                    <ShareBanner shareUrl={this.props.shareUrl} />
                </div>
            </ScrollTracker>
        )
    }
}

export default PostSidebar
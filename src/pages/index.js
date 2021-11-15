import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Footer from "../components/footer"
import FrcBanner from "../components/frc-banner"
import LatestPost from "../components/latest-post"
import NavigationSpacer from "../components/navigation-spacer"
import RevealAnimation from "../components/reveal-animation"
import Seo from "../components/seo"

class Home extends React.Component {
    super
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Home" />
                <section id="intro" className="container-fluid main-mh-100 mb-5">
                    <NavigationSpacer />
                    <div className="container h-100">
                        <div className="row h-50 justify-content-center">
                            <div className="col-lg-7 col-md-6">
                                <h1 className="main-reveal-text-short">Hello, I am Sam!</h1>
                                <div className="main-fade-in-animation">
                                    <p>Bioengineer turned into fintech.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-7 col-8">
                                <div className="main-fade-in-animation-delay-1">
                                    <StaticImage width={300} height={300} className="main-fit-element main-circle" src="../img/asdf.jpg" alt="Portrait" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-1">
                                <div className="main-fade-in-animation-delay-2">
                                    <LatestPost />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="skills" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 ">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h1>Some of my favourite projects:</h1>
                                </RevealAnimation>
                            </div>
                        </div>
                        <RevealAnimation animationClass="main-fade-in-animation">
                            <div className="row justify-content-center">
                                <div className="col-md-10 ">
                                    <p>Here shall be the projects</p>
                                </div>
                            </div>
                        </RevealAnimation>
                    </div>
                </section> */}
                <section id="experiences" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1>Below are some of my experiences.</h1>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">101sec Cyber Team</p>
                                                    <p className="card-text m-0">During high school, I established 101sec as a student-led program with the mission to make infosec engaging for students. I helped organize events, recruit new members, and educate others about cybersecurity. Today, I continue to mentor the team.</p>
                                                    <p className="card-text m-0"><a aria-label="101sec website" target="_blank" rel="noopener noreferrer" href="https://101sec.net/cyber">See website</a></p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-end-lg" src="../img/cpxiii_nats_101sec.jpg" alt="101sec CP-XIII National Finals team" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7 order-md-2">
                                                <div className="card-body">
                                                    <p className="h5 card-title">101sec Network</p>
                                                    <p className="card-text">A side hobby that evolved into something larger, I work as a system administrator for the 101sec Minecraft server. By running this server for the past three years, I've learned how to handle incidents, perform maintenance, deploy new services, and ensure uptime while using best practices in security.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 order-md-1">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-start-lg" src="../img/mc_lobby.jpg" alt="101sec Network lobby" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="hobbies" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h1>Hobbies and interests</h1>
                                    <p>This shall be another list</p>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="subscribe" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <div id="mc_embed_signup">
                                    <form action="https://gmail.us5.list-manage.com/subscribe/post?u=602886b7ffa91c629bc8d12a5&amp;id=3774b743fb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form-inline" target="_blank" novalidate>
                                        <div id="mc_embed_signup_scroll" className="form-group">
                                            <div className="d-inline-block">
                                                <RevealAnimation animationClass="main-reveal-text">
                                                    <h1><label htmlFor="mce-EMAIL">Let's stay in touch.</label></h1>
                                                </RevealAnimation>
                                            </div>
                                            <br />
                                            <RevealAnimation animationClass="main-fade-in-animation">
                                                <div className="d-inline-flex">
                                                    <input type="email" defaultValue="" name="EMAIL" className="form-control" id="mce-EMAIL" placeholder="hello@example.com" required />
                                                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_602886b7ffa91c629bc8d12a5_3774b743fb" tabindex="-1" value="" /></div>
                                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn main-btn-primary ms-2" />
                                                </div>
                                                <br />
                                                <small><em>You will only be notified of new posts. I don't spam.</em></small>
                                            </RevealAnimation>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Footer />
            </div>
        )
    }
}

export default Home

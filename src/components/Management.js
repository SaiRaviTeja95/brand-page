/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Path from "../img/description/Path 665.png"
import Register from "../img/description/register.png"
import Team from "../img/description/team-management.png"
import Support from "../img/description/technical-support.png"

const Management = () => {
    return (
        <div>
            <div className="block">
                <div>
                    <img src={Path} alt=""/>
                    <img className="regisLogo" src={Register} alt=""/>
                    <p className="subscribe">Sign up for campaigns or subscribe: </p>
                    <p className="detail">You can choose to work with us on individual campaigns or do it by yourself through our tech-enabled platform. </p>
                </div>
                <div>
                    <img src={Path} alt=""/>
                    <img className="regisLogo" src={Team} alt=""/>
                    <p className="subscribe">Workflow management</p>
                    <p className="detail">Search for the most suited influencers, design the deliverables and manage their performance  by fine tuning it according to your needs!</p>
                </div>
                <div>
                    <img src={Path} alt=""/>
                    <img className="regisLogo" src={Support} alt=""/>
                    <p className="subscribe">Products/ Services</p>
                    <p className="detail">Buy expert services from influencers or join hands with an influencer to develop products that they’ll sell at our store!</p>
                </div>
            </div>
            <p className="contact"><a href="">Contact Us</a> for more details on the entire range of services that we offer! </p>
        </div>
        
    )
}

export default Management
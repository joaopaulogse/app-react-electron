import React from "react"
import Nav from "./nav"
import Logo from "./logo"


import image from "../../../static/images/hexagon-multiple.svg";


export default props => (
    <Nav>
        <Logo img={image} label="Presenter"/>
    </Nav>
)
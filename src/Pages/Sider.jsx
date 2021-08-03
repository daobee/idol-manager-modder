import React from 'react';
import './Sider.css';
import { Link } from "react-router-dom";
import { pushRotate as Menu } from 'react-burger-menu'
import SvgUniform from '../assets/SvgUniform';
import SvgMod from '../assets/SvgMod';

class Sider extends React.Component {
    render() {
        return (
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <Link id="idolList" className="menu-item" to="/idolList">
                    <div className="menu-item-box">
                        <SvgUniform className="menu-icon"/>
                        Idols   
                    </div>
                </Link>
                <Link id="modList" className="menu-item" to="/modList">
                    <div className="menu-item-box">
                        <SvgMod className="menu-icon"/>
                        Mods   
                    </div>
                </Link>
            </Menu>
        )
    }
}

export default Sider;
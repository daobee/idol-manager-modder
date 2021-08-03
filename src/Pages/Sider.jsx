import React from 'react';
import './Sider.css';
import { Link } from "react-router-dom";
import { pushRotate as Menu } from 'react-burger-menu'
import SvgUniform from '../assets/SvgUniform';
import SvgMod from '../assets/SvgMod';

class Sider extends React.Component {
    render() {
        return (
            <Menu
                isOpen={ this.props.isMenuOpen }
                onOpen={ this.props.handleMenu }
                onClose={ this.props.handleMenu }
                customCrossIcon={ false }
                disableAutoFocus
                pageWrapId={ "page-wrap" }
                outerContainerId={ "outer-container" }
            >
                <Link id="idolList" className="menu-item" to="/idolList" onClick={ this.props.handleMenu }>
                    <div className="menu-item-box">
                        <SvgUniform className="menu-icon"/>
                        Idols   
                    </div>
                </Link>
                <Link id="modList" className="menu-item" to="/modList" onClick={ this.props.handleMenu }>
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
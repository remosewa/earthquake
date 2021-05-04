import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div className="Earthquake-header">
                <a href="/" className="Header-logo">
                    <img className="Header-logo-img" src={this.props.logoSrc} alt="Site logo" height="60" /> 
                </a>
                <div className="Header-title">{this.props.titleText}</div>
                <a className="Header-profile" href="/profile">Welcome {this.props.profileText}</a>
            </div>
        )
    }
}

export default Header;
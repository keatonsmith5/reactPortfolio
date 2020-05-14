import React from 'react'

function Header() {
    return(
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Works</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Header
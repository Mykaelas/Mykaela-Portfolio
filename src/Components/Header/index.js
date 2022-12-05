import Nav from '../Nav';
import React from 'react';
function Header(props) {
    const {
        setTabSelected
    } = props;
    return (
        <div>
            <header id="header1">
                <a href="https://www.google.com/" id="userName">
                    <h1>
                        Mykaela Saenz
                    </h1>
                </a>
                    <Nav id="Nav" setTabSelected={setTabSelected}>
                    </Nav>
                
            </header>
        </div>
    )
}

export default Header
import Nav from '../Nav';
import React from 'react';
function Header(props) {
    const {
        setTabSelected
    } = props;
    return (
        <div>
            <header id="header1">
                <a href="https://mykaelas.github.io/Mykaela-Portfolio/" id="userName">
                    <h1 class = "nameHeader ">
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
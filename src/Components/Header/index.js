import Nav from '../Nav';
import React from 'react';
function Header(props) {
    const {
        setTabSelected
    } = props;
    return (
        <div>
            <header>
                    <Nav id="Nav" setTabSelected={setTabSelected}>
                    </Nav>
                
            </header>
        </div>
    )
}

export default Header
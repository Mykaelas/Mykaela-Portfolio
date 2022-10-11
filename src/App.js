import React, { useState } from 'react';
import Nav from './Components/Nav';
// import Contact from './Components/Contact';
// import About from './Components/About';
import Footer from './Components/Footer';
// import Header from './Components/Header';
// import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div>
      <Nav
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setConactSelected={setConactSelected}
      ></Nav>
      <main>
        {/* {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <Contact></Contact>
        )} */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;

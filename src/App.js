import React from 'react';
import Header from './Components/Header';
// import Contact from './Components/Contact';
// import About from './Components/About';
import Footer from './Components/Footer/index.js';
// import Header from './Components/Header';
// import Portfolio from './Components/Portfolio';
import Github from './Assets/Icons/GitHub-Mark/PNG/GitHub-Mark-64px.png'


function App() {
  return (
    <div>
      <Header
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setConactSelected={setConactSelected}
      ></Header>
      <main>
        {/* {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <Portfolio></Portfolio>
        ) : (
            <Contact></Contact>
        ) : (
            <Resume></Resume>
        )
        )} */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;

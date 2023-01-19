import React, {useState} from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer/index.js';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Main from './Components/Main';


function App() {
  const [tabSelected, setTabSelected] = useState('default');
  
  return (
    <div>
      <Header setTabSelected={setTabSelected}></Header>
    <div>
      <main>
        {
          {
            about: <About />,
            projects: <Portfolio />,
            resume: <Resume />,
            default: <Main />
          }[tabSelected]
       }
      </main>
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

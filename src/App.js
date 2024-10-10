import logo from './logo.svg';

import Header from './head/Header'; 
import './styles.css';
import 'boxicons/css/boxicons.min.css';
import Skills from './main/skills/Skills';
import Experience from './main/experiences/Experience';
import Contact from './main/contact/Contact';
import Home from './home/Home';
import Clock from './main/clock/Clock';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />

        <Skills />

        <Experience />

        <Contact />
      </main>
    </div>
  );
}

export default App;

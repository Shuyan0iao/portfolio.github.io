import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Header from './head/Header'; 
import './styles.css';
import 'boxicons/css/boxicons.min.css';
import Skills from './main/skills/Skills';
import Experience from './main/experiences/Experience';
import Contact from './main/contact/Contact';
import Home from './home/Home';
import Clock from './main/clock/Clock';
import Loading from './head/Loading';

function App() {
  const [loading, setLoading] = useState(true); // 加载状态
  const [fadeIn, setFadeIn] = useState(false); // 淡入状态

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeIn(true); // 开始淡入内容
      }, 100);
   
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
    {loading ? (
      <Loading />
    ) : (
      <div className={`app-content ${fadeIn ? 'app-fade-in' : ''}`}>
        <Header />
        <main className="main">
          <Home />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    )}
  </div>
  );
}

export default App;

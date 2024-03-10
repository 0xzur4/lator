import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import Project from './page/Project';
import Learn from './page/Learn';
import { Container } from './style/List.styled';

function App() {
  const [isloggedIn, setLoggedIn] = useState(false);

  return (
    <Container >
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
    </Container>
  );
}


export default App;


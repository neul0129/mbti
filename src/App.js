import './App.css';
import React from 'react';
import Header from './header';
import Contents from './contents';
import Footer from './footer';
import { useState } from 'react';

function App() {
  return (
      <div>
        <Header />
        <Contents title="MBTI종류" sub="MBTI캐릭터" content="내용" />
        <Footer />
      </div>  
  );
}

export default App;

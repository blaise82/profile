import React, { Component, Suspense, lazy } from 'react';
import Loading from './Components/Loading/Loading';
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import "animate.css";
import './App.scss';
const Skills = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Skills/Skills')), 5000);
  });
});

export default class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
<Hero/>
          {/* <About/> */}
        <Skills/>
        {/* <Works/> */}
        <Footer/>
        <div orientation="right" class="side__StyledSideElement-sc-1duznzb-0 jSIwrL"><div class="email__StyledLinkWrapper-sc-2epoq-0 jJFfEJ"><a href="mailto:iza.blaise@gmail.com" rel="noopener noreferrer" target="_blank">iza.blaise@gmail.com</a></div></div>
        </Suspense>
      </div>
    )
  }
}

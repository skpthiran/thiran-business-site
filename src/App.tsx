/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative bg-[#050505] text-[#F5F5F0] min-h-screen selection:bg-[#C84B31] selection:text-white">
      <div className="noise-bg" />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

import './App.css';
import Resume from './components/Resume';
import Introduction from './components/Introduction';
import NavigationBar from './components/NavigationBar';
import Overlay from './components/Overlay'
import { Profile } from './components/Profile';
import SocialLinks from './components/Social'
import Projects from './components/Projects';
import Advertisement from './components/Advertisement';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />

        <section id='home'>
          <Overlay />
          <Introduction />
        </section>

        <section id='about'>
          <Profile />
          <SocialLinks />
        </section>

        <section id='resume'>
          <Resume />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section>
          <Advertisement />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;

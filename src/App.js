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

function App() {
  return (
    <>
      <NavigationBar />

      <section>
        <Overlay />
        <Introduction />
      </section>

      <section>
        <Profile />
        <SocialLinks />
      </section>

      <section>
        <Resume />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Advertisement />
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;

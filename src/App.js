import './App.css';
import Resume from './components/Resume';
import Introduction from './components/Introduction';
import NavigationBar from './components/NavigationBar';
import Overlay from './components/Overlay'
import Profile from './components/Profile';
import SocialLinks from './components/Social'
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Overlay/>
      <NavigationBar/>
      <Introduction/>
      <Profile/>
      <SocialLinks/>
      <Resume/>

      <Projects/>
      </>
  );
}

export default App;

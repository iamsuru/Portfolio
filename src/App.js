import './App.css';
import Introduction from './components/Introduction';
import NavigationBar from './components/NavigationBar';
import Overlay from './components/Overlay'

function App() {
  return (
    <>
      <Overlay/>
      <NavigationBar/>
      <Introduction/>
    </>
  );
}

export default App;

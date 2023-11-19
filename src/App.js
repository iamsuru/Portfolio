import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Overlay from './components/Overlay'
import Profile from './components/Profile';
import Social from './components/Social';

function App() {
  return (
    <>
    
      <Header />
      {/* 1 */}
      <section>
        <Overlay />
        <Introduction />
      </section>
      {/* 3 */}
      <section class="ftco-section ftco-partner">
        <Social/>
      </section>

    </>
  );
}

export default App;

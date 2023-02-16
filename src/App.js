
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Services/>
      <Gallery />
      <Footer/>
    </div>
  );
}

export default App;

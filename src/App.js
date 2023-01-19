import './index.css'
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import LowNav from './components/NavBar/LowNav';


function App() {
  return (
    <>
    <Header />
    <NavBar />
    <LowNav />
    <Body />
    <Footer />
    </>
  );
}

export default App;

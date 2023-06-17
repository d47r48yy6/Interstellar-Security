import logo from './logo.svg';
import './App.css';
import {Skills} from './components/Skills'
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from  './components/Banner'
import { Services} from './components/Services';
import {Contact} from './components/Contact'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Services />
      <Contact />
      




    </div>
  );
}

export default App;

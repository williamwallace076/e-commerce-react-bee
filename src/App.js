import HomePageFooter from './components/homepageShopp/homePageFooter/HomePageFooter';
import Menu from './components/homepageShopp/menu/Menu'
import "./App.css"
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
 

  return (
    <BrowserRouter className="App">
      <Menu></Menu>
      <Routes/>
      <HomePageFooter></HomePageFooter>
    </BrowserRouter>
  );
}

export default App;

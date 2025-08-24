import Navbar from './Componnents/Navbar'
import Slide from './Componnents/Slide'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aboutus from './Componnents/Aboutus';
import Mens from './Componnents/Mens';
import Banner from './Componnents/Banner';
import Banner2 from './Componnents/Banner2';
import Women from './Componnents/Women';
import Banner3 from './Componnents/Banner3';
import Footer from './Componnents/Footer';
function App() {


  return (
    <>
     <Navbar/>
     <Slide/>
     <Banner/>
     <Aboutus/>
     <Mens/>
     <Banner2/>
     <Women/>
     <Banner3/>
     <Footer/>
    </>
  )
}

export default App

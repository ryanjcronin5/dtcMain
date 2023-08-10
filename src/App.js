import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ground from './components/Ground'
import Current from './components/Current';
import Disc from './components/Disc';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeedbackForm from './components/FeedbackForm';


function App() {
    useEffect(() => {
      document.title = 'Software Development';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Hero />
      <Ground />
      <Current />
      <Disc />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;

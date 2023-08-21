import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ground from './components/Ground'
import Current from './components/Current';
import Disc from './components/Disc';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDisplay from './components/FeedbackDisplay';
import Creating from './components/Creating';

export default function Home() {
    return (
        <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
			<Navbar />
      		<Hero />
      		<Ground />
      		<Current />
      		<Disc />
			<FeedbackForm />
			<FeedbackDisplay />
			<Creating />
			<Footer />
    	</div>
    )
}
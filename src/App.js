import './App.css';
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import LoginForm from './components/LoginForm';


function App() {
  	useEffect(() => {
      	document.title = 'Software Development';
      	AOS.init();
    }, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home/>} />
				<Route path="login" element={<LoginForm/>} />
			</Routes>
		</BrowserRouter>
  		
  	);
}

export default App;

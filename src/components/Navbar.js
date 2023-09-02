import logo from '../assets/logo.svg';

export default function Navbar() {
    return (
        <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
            <div className="flex m-auto justify-between items-center text-white">
                <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#home" className="hover:font-medium">About</a></li>
                    <li className="p-4"><a href="#ground" className="hover:font-medium">Low Level Languages</a></li>
                    <li className="p-4"><a href="#current" className="hover:font-medium">Current Languages</a></li>
                    <li className="p-4"><a href="#prog" className="hover:font-medium">Programming Languages</a></li>
                    <li className="p-4"><a href="#llm" className="hover:font-medium">Large Language Models</a></li>
                </ul>
                <a href="#form" rel="noreferrer" className="bg-teal-500 rounded-full md:whitespace-nowrap px-4 py-1 border-teal-800 border-4">Contact Us</a>
            </div>
        </div>
    )
}

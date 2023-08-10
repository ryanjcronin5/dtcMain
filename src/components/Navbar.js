import logo from '../assets/logo.svg';

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#ground" className="hover:underline">Languages</a></li>
            <li className="p-4"><a href="#current" className="hover:underline">Development</a></li>
            <li className="p-4"><a href="#disc" className="hover:underline"></a>Discussion</li>
            </ul>
            <a rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Database</a>
        </div>
    </div>
    )
}

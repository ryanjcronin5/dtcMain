export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#ground" className="hover:underline">Languages</a></li>
        <li><a href="#current" className="hover:underline">Development</a></li>
        <li><a href="#disc" className="hover:underline"></a>Discussion</li>
      </ul>

      <hr className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023 Ryan Cronin. All Right Reserved</p>

    </div>
  )
}

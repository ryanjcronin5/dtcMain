export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
            <li className="p-0.5"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-0.5"><a href="#ground" className="hover:underline">Low Level Languages</a></li>
            <li className="p-0.5"><a href="#current" className="hover:underline">Current Languages</a></li>
            <li className="p-0.5"><a href="#prog" className="hover:underline">Programming Languages</a></li>
            <li className="p-0.5"><a href="#llm" className="hover:underline">Large Language Models</a></li>
      </ul>
      <hr className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />
      <p className="text-sm font-light text-center">Copyright © 2023 Ryan Cronin. All Right Reserved</p>
    </div>
  )
}

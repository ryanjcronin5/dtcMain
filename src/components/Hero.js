import {useState} from 'react'

import profile from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">The Development of</h1>
                    <h1 className="text-2xl font-bold">Programming Languages & The Cloud</h1>
                    <p class="text-xl font-bold text-gray-300">Discussing the consequences, responsibilities and challenges involved.</p>
                    <p className="text-md font-light text-gray-400 ">Also will explore how the Cloud's fitness for purpose may be broadly interpreted by users, engineers and clients.</p>
                </div>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                </ul>
            </div>
            <hr className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}

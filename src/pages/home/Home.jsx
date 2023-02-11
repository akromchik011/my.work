import React from 'react'
import Galery from '../../componenets/galery'
import Homeimage from '../../homeimage'
import Imagess from '../../imagess'
import './Home.css'

export default function Home() {
  return (
   
        <div className='home-cont'>
         <p className='word'>UZBEKISTAN GALLERY</p>
         
         <Galery/>
            <div className='home-main'>
     
     <div className="home-chap">
     Uzbekistan is a country in Central Asia famous for its stunning mosques, mausoleums, madrasahs and other sites linked to the Silk Road, the ancient trade route between China and the Mediterranean. If you love historical sites and beautiful Islamic architecture, then you'll certainly love traveling to Uzbekistan!
     </div>
     <div className="home-ong">
        <Imagess/>
     </div>
       </div >

       <div className="home-main2">
         <div className="chap2">
            <Homeimage/>
         </div>

         <div className="ong2">
            <p>Uzbek culture evolved blending various customs and traditions of the nations who inhabited the territory of today's Uzbekistan.Many expats and foreign students are impressed by Tashkent's extremely low crime rates. This is in part due to the presence of touristic police in the center of the city. I would say that Uzbekistan is generally very safe for students and expats.</p>
         </div>
       </div>

       <div className="home_video">
            <p>Video about Uzbekistan</p>
            <iframe width="1000" height="800"   src="https://www.youtube.com/embed/xlKxZweINyE" title="Welcome to Uzbekistan!"  frameborder="0"></iframe>
       </div>

        </div>
  )
}

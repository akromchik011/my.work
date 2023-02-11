
import React from 'react'
import Aboutimg from '../../aboutimg';
import Restimg from '../../restimg';
import './About.css';





export default function  About() {
  return (
    <div className='about-container'>
      <div className='top-word'>
          Uzbek national restaurant
            </div>
       <div className="menu">
        

            <div className="left">
              <div className='top-about'>About us</div> 
              Our restaurant, is one of the most famous restaurant in Asia. Because in our restraurant you can find what do you want.
                In Uzbek national restaurant has 100 types of dishes.A good restaurant sets a high standard for its food quality and ensures that guests receive the same quality with every meal.
              
            </div>

            <div className="right">
            <iframe  max-width="600" width="100%" height="400" src="https://www.youtube.com/embed/0SefbEQAcOU" title="Welcome to Uzbekistan" frameborder="0" ></iframe>
            </div>
            <card/>

         
            
       </div>
         <div className="img-side">
          <p>Our restaurant</p>
          <Restimg/>
         </div>
         <p className='book'>Booking</p>
          <div className="booking">
         
     <select className="select">
     <option value="">rooms</option>
        <option value="1">1th room</option>
        <option value="2">2nd room</option>
        <option value="3">3rd room</option>
        <option value="4">4th room</option>
        <option value="5">5th room</option>
        <option value="6">6th room</option>
        <option value="7">7th room</option>
        <option value="8">8th room</option>
        <option value="9">9th room</option>
        <option value="9">10th room</option>
     </select>

     <select className="select">
     <option value="rows">rows</option>
     <option value="1">1th row</option>
        <option value="2">2nd row</option>
        <option value="3">3rd row</option>
        <option value="4">4th row</option>
        <option value="5">5th row</option>
        <option value="6">6th row</option>
        <option value="7">7th row</option>
        <option value="8">8th row</option>
        <option value="9">9th row</option>
        <option value="9">10th row</option>
       
     </select>
     <select className="select">
        
        
     <option value="rows">seats</option>
     <option value="1">1th seat</option>
        <option value="2">2nd seat</option>
        <option value="3">3rd seat</option>
        <option value="4">4th seat</option>
        <option value="5">5th seat</option>
        <option value="6">6th seat</option>
        <option value="7">7th seat</option>
        <option value="8">8th seat</option>
        <option value="9">9th seat</option>
        <option value="9">10th seat</option>
        <option value="2">11th seat</option>
        <option value="3">12th seat</option>
        <option value="4">13th seat</option>
        <option value="5">14th seat</option>
        <option value="6">15th seat</option>
        <option value="7">16th seat</option>
        <option value="8">17th seat</option>
        <option value="9">18th seat</option>
        <option value="9">19th seat</option>
        <option value="9">20th seat</option>
     </select>
         
   
          </div>
          <div className='butts'>
          <button className='butt'>go booking</button>
          </div>
       
       <div className="App">
   
        
      <Aboutimg/>
      
      
        </div>
      
      
          
       </div>
    
  )
}

import React from 'react'
import './Contact.css'
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Me from '../../me';
export default function Contact() {
  return (
    <div className="contact-main">
      
        <div className="top">
          <Me/>
          <p className='me'>Akromjon "Front-end" Developer. </p>
        </div>
          <div className="cover">
          <div className="left">
            <p className='name'>First name:</p>
            <p className='info'>Akromjon</p>

            <p className='name'>Middle name:</p>
            <p className='info'>Alisherovich</p>

            <p className='name'>Last name:</p>
            <p className='info'>Toshpo'latov </p>

            <p className='name'>Place of birth:</p>
            <p className='info'>Uzbekistan Andijan region</p>
            <p className='name'>Email:</p>
            <p className='info'>akromjontoshpulatov@gmail0101.com</p>
            <p className='name'>Contacts:</p>
            
            <p><TelegramIcon className='tg'/>  @akromsher </p>
             <p><InstagramIcon className='ic'/>  akromjon_110_ </p>
             <p><CallIcon className='cic'/>  +998 91 496 58 15</p>
             <p><SmsIcon className='sic'/>  +998 99 011 96 41</p>
          </div>
          <div className="right">
             <ul>
              About me
              <li>Current student looking to join <br /> the workforce to gain real-world experience.</li>
             <li>Ability to complete tasks on time <br /> in both individual and team settings.</li>
             <li>Responsible person with good judgment, <br /> time management and a flexible schedule.</li>
             </ul> 

             <ul>Skills
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React JS</li>
             </ul>

             <ul>Finished:
                <li>IT-academy at the "Andijan Digital City" <br /> technology park.</li>
             </ul>

              <ul>Languages
                <li>Uzbek</li>
                <p>native</p>
                <li>Russian</li>
                <p>fluent</p>
                <li>English</li>
                <p>fluent</p>
              </ul>
          </div>
          </div>
      </div>
   
  )
}

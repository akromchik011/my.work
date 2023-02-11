
import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import {Link, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './componenets/navbar';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import InstagramIcon from '@mui/icons-material/Instagram';



function App() {



  return (
    
    
    <div className='container'>
      <div className="app-main">
      <div className="navbar">
       <Navbar/>
       </div>
       
     
       
     <Routes>
      
         <Route path='/' element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <img src="images.jpeg" alt="" />
    

     <div className="footer">
       <div className="first">
       
       <p className='a'>   For Tourists
       </p>
          Travel Guideline <br />
          FAQ <br />
          Map of Uzbekistan
       </div>
       <div className="second">
        <p className='b'> For Agencies</p>
        
        Tourism Legislation <br />
          Tourist routes
        
       </div>
       <div className="third">
         <p className='c'> Contacts</p>
          <CallIcon className='call'/>  74 011 11 01 <br />
          <SmsIcon className='sms'/>  1100 <br />
          <LocationOnIcon className='location'/>  7,Chilanzar str,Tashkent 
        
          </div>
       <div className="fourth">
          <p className='d'> For questions</p>
          <TelegramIcon className='tg'/>  @akromsher <br />
             <InstagramIcon className='ic'/>  akromjon_110_ <br />
             <CallIcon className='cic'/>  +998 91 496 58 15<br />
             <SmsIcon className='sic'/>  +998 99 011 96 41
          
            
       </div>
      </div>
      </div>
    
     

    
    
     
   </div>
      
     
     
          
    
    
    
  );
}


export default App;

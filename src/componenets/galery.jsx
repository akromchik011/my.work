import React, { useState } from 'react'
import img1 from './galery.img/img1.jpg'
import img2 from './galery.img/img2.jpg'
import img3 from './galery.img/img3.jpg'
import img4 from './galery.img/img4.jpg'
import img5 from './galery.img/img5.jpg'
import img6 from './galery.img/img6.jpg'
import img7 from './galery.img/img7.jpg'
import img8 from './galery.img/img8.jpg'
import img9 from './galery.img/img9.jpg'
import img10 from './galery.img/img10.jpg'
import img11 from './galery.img/img11.jpg'
import img12 from './galery.img/img12.jpg'
import img13 from './galery.img/img13.jpg'
import img14 from './galery.img/img14.jpg'
import img15 from './galery.img/img15.jpg'
import img16 from './galery.img/img16.jpg'
import img17 from './galery.img/img17.jpg'
import img18 from './galery.img/img18.jpg'
import './galery.css'
import CloseIcon from '@mui/icons-material/Close';


const Galery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
      
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 13,
            imgSrc: img13,
        },
       
        {
            id: 7,
            imgSrc: img7,
        },

        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
      
      
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
      
      
    ]

    const [model,setModel]= useState(false)
    const [tempimgSrc, setTempImgSrc]=useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc)
        setModel(true)
    }
    return (
        
        <div className='galery-main'>
            <div className={model? 'model open' : 'model'}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={()=> setModel(false)}/>
            </div>

            <div className="galery">
                {data.map((item,index)=>{
                    return(
                        <div className="pics" key={index} onClick={ ()=> getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="" style={{width:'100%', height: '100%'}} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Galery;

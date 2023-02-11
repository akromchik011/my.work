import React from 'react'
import imag1 from './image/f1.jpg'
import imag2 from './image/card2.jpg'
import imag3 from './image/card33.jpg'
import imag4 from './image/card3.jpg'
import imag5 from './image/card4.jpg'
import imag6 from './image/card6.jpg'
import imag7 from './image/des1.jpg'
import imag8 from './image/des2.webp'
import imag9 from './image/des3.jpg'
import imag10 from './image/drink1.jpg'
import imag11 from './image/drink2.jpg'
import imag12 from './image/drink3.webp'
import imag13 from './image/des4.jpg'
import imag14 from './image/des5.jpg'
import imag15 from './image/des6.jpg'
import imag16 from './image/drinss4.jpg'
import imag17 from './image/ds5.jpg'
import imag18 from './image/drinss6.webp'
import './aboutimg.css'
function Aboutimg() {
    return (
       <div main-card>
        <p className='card-word'>Menu</p>
       <div className="k">

       <div >
        <img   src={imag1}className='img1' alt="" />
        <p>name:   Palov</p>
        <p>price: 8$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag2}className='img1' alt="" />
        <p>name:   Lagmon</p>
        <p>price: 7$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag3}className='img1' alt="" />
        <p>name:   Sho'rva</p>
        <p>price: 7$</p>
        <button className='btns'>by</button>
        </div>
       
        
        
        <div>
        <img  src={imag4}className='img1' alt="" />
        <p>name: Somsa</p>
        <p>price: 9$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag5}className='img1' alt="" />
        <p>name: Kebab</p>
        <p>price: 10$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag6}className='img1' alt="" />
        <p>name: Steak</p>
        <p>price: 12$</p>
        <button className='btns'>by</button>
        </div>
       </div>
       <p className='desserts'>Desserts</p>
       <div className="desert">
       <div>
        <img  src={imag7}className='img1' alt="" />
        <p>name: Fruit Cake</p>
        <p>price: 2$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag8}className='img1' alt="" />
        <p>name: Pumpkin Spice Cake</p>
        <p>price: 2$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag9}className='img1' alt="" />
        <p>name: Mixed Fruits</p>
        <p>price: 4$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag13}className='img1' alt="" />
        <p>name: Ice Cream Cake</p>
        <p>price: 3$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag14}className='img1' alt="" />
        <p>name: Chocolate Cake</p>
        <p>price: 3$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag15}className='img1' alt="" />
        <p>name: White Cake </p>
        <p>price: 2$</p>
        <button className='btns'>by</button>
        </div>

       </div>
       <p className='drinkss'>Drinks</p>
        <div className="drinks">
            
        <div>
        <img  src={imag10}className='img1' alt="" />
        <p>name: Watermelon Strawberry</p>
        <p>price: 3$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag11}className='img1' alt="" />
        <p>name: Apple Kiwi Orange Juice</p>
        <p>price: 4$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag12}className='img1' alt="" />
        <p>name: Fresh-squeezed mixed </p>
        <p>price: 4$</p>
        <button className='btns'>by</button>
        </div>
        <div>
        <img  src={imag16}className='img1' alt="" />
        <p>name: Strawberry</p>
        <p>price: 3$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag17}className='img1' alt="" />
        <p>name: Lemon Juice</p>
        <p>price: 2$</p>
        <button className='btns'>by</button>
        </div>

        <div>
        <img  src={imag18}className='img1' alt="" />
        <p>name: Apple Juice</p>
        <p>price: 2$</p>
        <button className='btns'>by</button>
        </div>

       
        </div>

   
        
       </div>
    )
}

export default Aboutimg

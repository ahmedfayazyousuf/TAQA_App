import PPTImage from './Images/PPT.png';
import PPTImageSmall from './Images/PPTSmall.png';
import VideoImage from './Images/Video.png';
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Back from './Images/back.png'
import Img1 from './Images/img1.jpg'
import Img2 from './Images/img2.jpg'
import Img3 from './Images/img3.jpg'

const ProductPortfolio = () => {

    const [ShowVideoModal, setShowVideoModal] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef(null);
  
    const settings = {
      dots: true,
      arrows: false,
      afterChange: () => {
        console.log('Slide after change');
        setIsAnimating(false);
      },
      beforeChange: () => {
        console.log('Slide before change');
        setIsAnimating(true);
      },
    };
  
    const handleWheel = (e) => {
      e.preventDefault();
      if (!isAnimating) {
        const direction = e.deltaY > 0 ? 'next' : 'prev';
        sliderRef.current.slick[direction]();
      }
    };
  


    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', width: '100vw', background: 'red', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45vh', width: '100vw', background: 'blue'}}>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '45vh', width: '30vw', background: 'red', flexDirection: 'column'}}>
                    <p style={{width: '100%', backgroundColor: 'yellow', fontWeight: '900', fontSize: '20px', padding: '10px', margin: '0'}}>Screen</p>
                    <div style={{width: '100%', height: '60px', backgroundColor: 'black', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                        <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>AICD's</p>
                    </div>
                    <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img style={{ height: '170px'}} onClick={()=>{document.getElementById('loading').style.zIndex = '100'}} src={PPTImage} alt="PPTImage" />
                    </div>
                </div>


                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '45vh', width: '70vw', background: 'grey', flexDirection:'column'}}>
                    <p style={{width: '100%', backgroundColor: 'yellow', fontWeight: '900', fontSize: '20px', padding: '10px', margin: '0'}}>Inflow Control</p>
                    <div style={{width: '100%', height: '100%', backgroundColor: 'black', margin: '0', display: 'flex'}}>

                        <div style={{backgroundColor: 'green', width: '33%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60px', backgroundColor: 'black', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                                <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0', padding: '0'}}>AICD's</p>
                            </div>

                            <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img style={{ height: '170px'}} src={PPTImage} alt="PPTImage" />
                            </div>
                        </div>


                        <div style={{backgroundColor: 'green', width: '34%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60px', backgroundColor: 'black', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>FloFuse</p>
                            </div>

                            <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img style={{ height: '170px'}} src={PPTImageSmall} alt="PPTImage" />
                                <img style={{ height: '170px'}} src={VideoImage} alt="PPTImage" />
                            </div>
                        </div>


                        <div style={{backgroundColor: 'green', width: '33%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60px', backgroundColor: 'black', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>Case Study</p>
                            </div>

                            <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img style={{ height: '170px'}} src={PPTImage} alt="PPTImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45vh', width: '100vw', background: 'green'}}>
                <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '45vh', width: '30vw', background: 'grey'}}>
                    <p style={{width: '100%', backgroundColor: 'yellow', fontWeight: '900', fontSize: '20px', padding: '10px'}}>Water Shut</p>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '45vh', width: '70vw', background: 'red'}}>
                    <p style={{width: '100%', backgroundColor: 'yellow', fontWeight: '900', fontSize: '20px', padding: '10px'}}>Pulse Eight</p>
                </div>
            </div>
{/* 
            <Modal style={{height:'100%',width:"100%"}} show={ShowVideoModal} onHide={() => setShowVideoModal(false)}>
                <Modal.Header style={{width:'1000px'}} closeButton>
                    <Modal.Title>PPT</Modal.Title>
                </Modal.Header>
                
                <Modal.Body style={{height:'80vh',width:"1000px"}}> 
           
                    <div className="container" onWheel={handleWheel}>
                        <Slider ref={sliderRef} {...settings}>
                            <div className="slide" style={{ backgroundColor: 'red'}}>
                            <span >1</span>
                            </div>
                            <div className="slide">
                            <span>2</span>
                            </div>
                            <div className="slide">
                            <span>3</span>
                            </div>
                            <div className="slide">
                            <span>4</span>
                            </div>
                            <div className="slide">
                            <span>5</span>
                            </div>
                            <div className="slide">
                            <span>6</span>
                            </div>
                        </Slider>
                    </div>
                </Modal.Body>
            </Modal> */}

            <div id='loading' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('loading').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80%',height:'80%',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
            <Slider ref={sliderRef} {...settings}>
                <div className='slide'  style={{ backgroundColor: 'red'}}>
                    <span >1</span>
                </div>
                <div className="slide">
                    <span>2</span>
                </div>
                <div className="slide">
                    <span>3</span>
                </div>
                <div className="slide">
                    <span>4</span>
                </div>
                <div className="slide">
                    <span>5</span>
                </div>
                <div className="slide">
                    <span>6</span>
                </div>
            </Slider>
        </div>
    </div>
</div>




        </div>
    )
}

export default ProductPortfolio
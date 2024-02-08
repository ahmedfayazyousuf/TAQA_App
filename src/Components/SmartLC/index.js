import PPTImage from './Images/PPT.png';
import PPTImageSmall from './Images/PPTSmall.png';
import VideoImage from './Images/Video.png';
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef, useState } from 'react';
// eslint-disable-next-line
import Modal from 'react-bootstrap/Modal';
import Back from './Images/back.png'
// eslint-disable-next-line


const ProductPortfolio = () => {
    // eslint-disable-next-line
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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', flexDirection: 'column',backgroundColor:'#005359'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45vh', width: '100vw'}}>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '45vh', width: '30vw', flexDirection: 'column'}}>
                    <p style={{width: '100%',  fontWeight: '900', fontSize: '20px', padding: '10px', margin: '0'}}>Screen</p>
                    <div style={{width: '100%', height: '60px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                        <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>AICD's</p>
                    </div>
                    <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#005359'}}>
                        <img style={{ height: '170px',backgroundColor:'#005359'}} onClick={()=>{document.getElementById('load').style.zIndex = '100'}} src={PPTImage} alt="PPTImage" />
                    </div>
                </div>


                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '45vh', width: '70vw', flexDirection:'column'}}>
                    <p style={{width: '100%',  fontWeight: '900', fontSize: '20px', padding: '10px', margin: '0'}}>Inflow Control</p>
                    <div style={{width: '100%', height: '100%', margin: '0', display: 'flex'}}>

                        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                                <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0', padding: '0'}}>AICD's</p>
                            </div>

                            <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#005359'}}>
                                <img onClick={()=>{document.getElementById('load2').style.zIndex = '100'}} style={{ height: '170px',backgroundColor:'#005359'}} src={PPTImage} alt="PPTImage" />
                            </div>
                        </div>


                        <div style={{ width: '34%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>FloFuse</p>
                            </div>

                            <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#005359'}}>
                                <img style={{ height: '170px',backgroundColor:'#005359'}} onClick={()=>{document.getElementById('load3').style.zIndex = '100'}} src={PPTImageSmall} alt="PPTImage" />
                                <img style={{ height: '170px',backgroundColor:'#005359'}} src={VideoImage} alt="PPTImage" />
                            </div>
                        </div>


                        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>Case Study</p>
                            </div>

                            <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#005359'}}>
                                <img style={{ height: '170px',backgroundColor:'#005359'}} src={PPTImage} alt="PPTImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45vh', width: '100vw'}}>
                <div style={{display: 'flex', flexDirection:'column',alignItems: 'flex-start', justifyContent: 'center', height: '45vh', width: '30vw'}}>
                    <p style={{width: '100%',  fontWeight: '900', fontSize: '20px', padding: '10px'}}>Water Shut</p>

                    <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#005359'}}>
                        <img style={{ height: '170px',backgroundColor:'#005359'}} onClick={()=>{document.getElementById('load4').style.zIndex = '100'}} src={PPTImage} alt="PPTImage" />
                        <img style={{ height: '170px',backgroundColor:'#005359'}} onClick={()=>{document.getElementById('load5').style.zIndex = '100'}} src={PPTImage} alt="PPTImage" />

                    </div>
                </div>

                <div style={{display: 'flex',flexDirection:'column' ,alignItems: 'flex-start', justifyContent: 'center', height: '45vh', width: '70vw'}}>
                    <p style={{width: '100%',  fontWeight: '900', fontSize: '20px', padding: '10px'}}>Pulse Eight</p>


                    <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#005359'}}>
                        <img style={{ height: '170px',backgroundColor:'#005359'}} onClick={()=>{document.getElementById('load6').style.zIndex = '100'}} src={PPTImage} alt="PPTImage" />
                        <img style={{ height: '170px',backgroundColor:'#005359'}} src={VideoImage} alt="PPTImage" />                    
                    </div>
                </div>
            </div>
            

            <div id='load' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('load').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80vw',height:'80vh',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
            <Slider ref={sliderRef} {...settings}>
                <div className='slide B1slide1'  style={{ backgroundColor: 'red'}}>
                </div>
                <div className="slide B1slide2">
                </div>
                <div className="slide B1slide3">
                </div>
                <div className="slide B1slide4">
                </div>
                <div className="slide B1slide5">
                </div>
                <div className="slide B1slide6">
                </div>
                <div className="slide B1slide7">
                </div>
                <div className="slide B1slide8">
                </div>
                <div className="slide B1slide9">
                </div>
                <div className="slide B1slide10">
                </div>
            </Slider>
        </div>
    </div>

            </div>

            <div id='load2' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('load2').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80vw',height:'80vh',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
            <Slider ref={sliderRef} {...settings}>
                <div className='slide B2aslide1'  style={{ backgroundColor: 'red'}}>
                </div>
                <div className="slide B2aslide2">
                </div>
                <div className="slide B2aslide3">
                </div>
                <div className="slide B2aslide4">
                </div>
                <div className="slide B2aslide5">
                </div>
                <div className="slide B2aslide6">
                </div>
                <div className="slide B2aslide7">
                </div>
                <div className="slide B2aslide8">
                </div>
                <div className="slide B2aslide9">
                </div>
                <div className="slide B2aslide10">
                </div>
            </Slider>
        </div>
    </div>

            </div>

            <div id='load3' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('load3').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80vw',height:'80vh',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
            <Slider ref={sliderRef} {...settings}>
                <div className='slide B2bslide1'  style={{ backgroundColor: 'red'}}>
                </div>
                <div className="slide B2bslide2">
                </div>
                <div className="slide B2bslide3">
                </div>
                <div className="slide B2bslide4">
                </div>
                <div className="slide B2bslide5">
                </div>
                <div className="slide B2bslide6">
                </div>
                <div className="slide B2bslide7">
                </div>
                <div className="slide B2bslide8">
                </div>
                <div className="slide B2bslide9">
                </div>
                <div className="slide B2bslide10">
                </div>
            </Slider>
        </div>
    </div>

            </div>


            <div id='load4' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('load4').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80vw',height:'80vh',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
            <Slider ref={sliderRef} {...settings}>
                <div className='slide B3Fslide1'  style={{ backgroundColor: 'red'}}>
                </div>
                <div className="slide B3Fslide2">
                </div>
                <div className="slide B3Fslide3">
                </div>
                <div className="slide B3Fslide4">
                </div>
                <div className="slide B3Fslide5">
                </div>
                <div className="slide B3Fslide6">
                </div>
                <div className="slide B3Fslide7">
                </div>
                <div className="slide B3Fslide8">
                </div>
                <div className="slide B3Fslide9">
                </div>
                <div className="slide B3Fslide10">
                </div>
                <div className="slide B3Fslide11">
                </div>
                <div className="slide B3Fslide12">
                </div>
                <div className="slide B3Fslide13">
                </div>
                <div className="slide B3Fslide14">
                </div>
                <div className="slide B3Fslide15">
                </div>
                <div className="slide B3Fslide16">
                </div>
                <div className="slide B3Fslide17">
                </div>
                <div className="slide B3Fslide18">
                </div>
                <div className="slide B3Fslide19">
                </div>
                <div className="slide B3Fslide20">
                </div>
                <div className="slide B3Fslide21">
                </div>
            </Slider>
        </div>
    </div>

            </div>

            <div id='load5' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('load5').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80vw',height:'80vh',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
        <Slider ref={sliderRef} {...settings}>
                <div className='slide B3Mslide1'  style={{ backgroundColor: 'red'}}>
                </div>
                <div className="slide B3Mslide2">
                </div>
                <div className="slide B3Mslide3">
                </div>
                <div className="slide B3Mslide4">
                </div>
                <div className="slide B3Mslide5">
                </div>
                <div className="slide B3Mslide6">
                </div>
                <div className="slide B3Mslide7">
                </div>
                <div className="slide B3Mslide8">
                </div>
                <div className="slide B3Mslide9">
                </div>
                <div className="slide B3Mslide10">
                </div>
                <div className="slide B3Mslide11">
                </div>
                <div className="slide B3Mslide12">
                </div>
                <div className="slide B3Mslide13">
                </div>
                <div className="slide B3Mslide14">
                </div>
                <div className="slide B3Mslide15">
                </div>
                <div className="slide B3Mslide16">
                </div>
                <div className="slide B3Mslide17">
                </div>
                <div className="slide B3Mslide18">
                </div>
                <div className="slide B3Mslide19">
                </div>
                <div className="slide B3Mslide20">
                </div>
                <div className="slide B3Mslide21">
                </div>
                <div className="slide B3Mslide22">
                </div>
            </Slider>
        </div>
    </div>

            </div>


            <div id='load6' style={{width:'100vw',height:'100vh',background:'rgba(0,0,0,0.5)', position:'absolute',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'-100', transition: 'z-index 0.5s'}}>
    <div style={{position: 'absolute', top: '20px', left: '20px'}}>
        <button onClick={() => {document.getElementById('load6').style.zIndex='-100'}}>
            <img src={Back} alt="Back" style={{width:'50px',height:'50px'}} />
        </button>
    </div>
    <div style={{width:'80vw',height:'80vh',background:'white', zIndex: '200'}}>
        <div className="container" style={{width:'100%',height:'100%'}} onWheel={handleWheel}>
        <Slider ref={sliderRef} {...settings}>
                <div className='slide B4slide1'  style={{ backgroundColor: 'red'}}>
                </div>
                <div className="slide B4slide2">
                </div>
                <div className="slide B4slide3">
                </div>
                <div className="slide B4slide4">
                </div>
                <div className="slide B4slide5">
                </div>
                <div className="slide B4slide6">
                </div>
                <div className="slide B4slide7">
                </div>
                <div className="slide B4slide8">
                </div>
                <div className="slide B4slide9">
                </div>
                <div className="slide B4slide10">
                </div>
                <div className="slide B4slide11">
                </div>
                <div className="slide B4slide12">
                </div>
                <div className="slide B4slide13">
                </div>
                <div className="slide B4slide14">
                </div>
                <div className="slide B4slide15">
                </div>
                <div className="slide B4slide16">
                </div>
                <div className="slide B4slide17">
                </div>
                <div className="slide B4slide18">
                </div>
                <div className="slide B4slide19">
                </div>
                <div className="slide B4slide20">
                </div>
                <div className="slide B4slide21">
                </div>
                <div className="slide B4slide22">
                </div>
                <div className="slide B4slide23">
                </div>
                <div className="slide B4slide24">
                </div>
                <div className="slide B4slide25">
                </div>
                <div className="slide B4slide26">
                </div>
                <div className="slide B4slide27">
                </div>
                <div className="slide B4slide28">
                </div>
                <div className="slide B4slide29">
                </div>
                <div className="slide B4slide30">
                </div>
            </Slider>
        </div>
    </div>

            </div>


        </div>
    )
}

export default ProductPortfolio
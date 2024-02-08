import ReactPlayer from 'react-player';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from './Images/image.jpg';
// import PDF from './FloCheck Dissolve Datasheet.pdf'
import Dissolve from './Specsheets/FloCheck Dissolve Datasheet.pdf'
import Injection from './Specsheets/FloCheck Injection Datasheet.pdf'
import Production from './Specsheets/FloCheck Production Datasheet.pdf'
import System from './Specsheets/FloCheck System Accessories Datasheet.pdf'
import Direct from './Specsheets/FloDirect Datasheet.pdf'
import Elite from './Specsheets/FloElite Datasheet.pdf'
import Fuse from './Specsheets/FloFuse - Rate limiting control device - MODIFIED.pdf'
import Max from './Specsheets/FloMax Disc Datasheet.pdf'
import ICD from './Specsheets/FloRight ICD Range Datasheet.pdf'
import Ultra from './Specsheets/FloRight Ultra Datasheet.pdf'
import Shroud from './Specsheets/FloShroud Datasheet.pdf'
import Range from './Specsheets/FloTextra Range Datasheet.pdf'
import Wrap from './Specsheets/FloWrap Datasheet.pdf'
import ICV from './Specsheets/PulseEight ICV Datasheet.pdf'
import ISV from './Specsheets/PulseEight ISV Datasheet.pdf'
import Wireless from './Specsheets/PulseEight Wireless Gauge Datasheet.pdf'
import Orings from './Specsheets/Swellable O-rings Datasheet.pdf'
import Packer from './Specsheets/SwellFix Packer Datasheet.pdf'
import PE from './Specsheets/SwellPlug PE.pdf'
import Sleeve from './Specsheets/SwellRight Elite Sleeve Datasheet.pdf'
import SwellRightPacker from './Specsheets/SwellRight Packer Datasheet.pdf'
import SwellRightSleeve from './Specsheets/SwellRight Sleeve Datasheet.pdf'
import UltraPacker from './Specsheets/SwellRight Ultra Packer Datasheet.pdf'
import UltraSleeve from './Specsheets/SwellRight Ultra Sleeve Datasheet.pdf'

const ProductPortfolio = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showPDFModal, setShowPDFModal] = useState(false);
    const [PDF, setPDF] = useState();

    function OpenPDF(v) {
        document.getElementById('pdf').style.zIndex = '100'
        setPDF(v)
        setShowPDFModal(true)
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '100' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '40vw', height: '100vh', flexDirection: 'column' }}>
                <div style={{ display: 'flex', height: '10vh', width: '40vw', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <p style={{ fontSize: '25px', fontWeight: '900' }}>Video 4x</p>
                </div>
                <div style={{ display: 'flex', height: '90vh', width: '40vw', justifyContent: 'center' }}>
                    <button style={{ borderRadius: '10px', border: 'none', height: '350px', width: '500px', backgroundSize: 'cover', backgroundImage: `url('${Image}')`, backgroundPosition: 'center' }} onClick={() => setShowVideoModal(true)}>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', width: '60vw', height: '100vh', flexDirection: 'column' }}>
                <div style={{ display: 'flex', height: '10vh', width: '40vw', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <p style={{ fontSize: '25px', fontWeight: '900' }}>Spec Sheet</p>
                </div>
                <div style={{ display: 'flex', height: '70vh', width: '60vw' }}>
                    <table style={{ width: '60vw', border: '1px solid black' }}>
                        <thead>
                            <tr>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 1</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 2</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 3</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Dissolve) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Injection) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Production) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(System) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Direct) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Elite) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Fuse) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Max) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(ICD) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Ultra) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Shroud) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Range) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Wrap) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(ICV) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(ISV) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Wireless) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Orings) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Packer) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PE) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(Sleeve) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightPacker) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightSleeve) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(UltraPacker) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(UltraSleeve) }} style={{ fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Button</button></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ width: '100vw', height: '100vh', background: 'rgba(255,255,255,1)', position: 'absolute', zIndex: '-10' }}></div>

            <Modal show={showVideoModal} onHide={() => setShowVideoModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Video Player</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ReactPlayer
                        url={`${process.env.PUBLIC_URL}/Videos/Sample.mp4`}
                        width="100%"
                        height="100%"
                        controls={true}
                        playing={true}
                        loop={true}
                    />
                </Modal.Body>
            </Modal>


            {/* <Modal
    style={{ 
        // Set the Modal's width to 100% of the viewport
        width: '100vw',
        // Ensure Modal takes up the entire screen by removing margins
        margin: 0
    }}
    show={showPDFModal}
    onHide={() => setShowPDFModal(false)}
>
    <Modal.Header closeButton>
        <Modal.Title>Video Player</Modal.Title>
    </Modal.Header>

    <Modal.Body style={{ 
        // Set the Modal Body's width and height to 100% of the viewport
        width: '100vw', 
        height: 'calc(100vh - 56px)', // Adjust 56px for Modal Header's height
        // Ensure the Modal Body takes up the entire screen by removing padding
        padding: 0
    }}>
       
    </Modal.Body>
</Modal> */}

<div id='pdf' style={{width:'100vw',height:'100vh',background:'rgba(0,0,127,0.5)', position:'absolute',zIndex:'-100',top:'0'}}>
    <div onClick={()=>{document.getElementById('pdf').style.zIndex = '-100'}} style={{width:'100%',display:'flex',justifyContent:'flex-end',paddingRight:'20px'}}><p style={{fontSize:'20px',fontWeight:'900'}}>X</p></div>
    <embed
                src={PDF}
                type="application/pdf"
                style={{
                    // Set the embedded PDF's width and height to 100% of the Modal Body
                    width: '100%',
                    height: '100%'
                }}
            />
</div>



        </div>
    )
}

export default ProductPortfolio
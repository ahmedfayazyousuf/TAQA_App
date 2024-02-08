import ReactPlayer from 'react-player';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from './Images/image.jpg';
// import PDF from './FloCheck Dissolve Datasheet.pdf'
import FloCheckDissolveDatasheet from './Specsheets/FloCheck Dissolve Datasheet.pdf'
import FloCheckInjectionDatasheet from './Specsheets/FloCheck Injection Datasheet.pdf'
import FloCheckProductionDatasheet from './Specsheets/FloCheck Production Datasheet.pdf'
import FloCheckSystemAccessoriesDatasheet from './Specsheets/FloCheck System Accessories Datasheet.pdf'
import FloDirectDatasheet from './Specsheets/FloDirect Datasheet.pdf'

import FloEliteDatasheet from './Specsheets/FloElite Datasheet.pdf'
import FloFuseRatelimitingControlDevice from './Specsheets/FloFuse - Rate limiting control device - MODIFIED.pdf'
import FloMaxDiscDatasheet from './Specsheets/FloMax Disc Datasheet.pdf'
import FloRightDissolveDatasheet from './Specsheets/FloRight Dissolve Datasheet.pdf'
import FloRightICDRangeDatasheet from './Specsheets/FloRight ICD Range Datasheet.pdf'

import FloRightUltraDatasheet from './Specsheets/FloRight Ultra Datasheet.pdf'
import FloShroudDatasheet from './Specsheets/FloShroud Datasheet.pdf'
import FloTextraRangeDatasheet from './Specsheets/FloTextra Range Datasheet.pdf'
import FloWrapDatasheet from './Specsheets/FloWrap Datasheet.pdf'
import PulseEightICVDatasheet from './Specsheets/PulseEight ICV Datasheet.pdf'

import PulseEightISVDatasheet from './Specsheets/PulseEight ISV Datasheet.pdf'
import PulseEightWirelessGaugeDatasheet from './Specsheets/PulseEight Wireless Gauge Datasheet.pdf'
import SwellableORingsDatasheet from './Specsheets/Swellable O-rings Datasheet.pdf'
import SwellFixPackerDatasheet from './Specsheets/SwellFix Packer Datasheet.pdf'
import SwellPlugPE from './Specsheets/SwellPlug PE.pdf'

import SwellRightEliteSleeveDatasheet from './Specsheets/SwellRight Elite Sleeve Datasheet.pdf'
import SwellRightPackerDatasheet from './Specsheets/SwellRight Packer Datasheet.pdf'
import SwellRightSleeveDatasheet from './Specsheets/SwellRight Sleeve Datasheet.pdf'
import SwellRightUltraPackerDatasheet from './Specsheets/SwellRight Ultra Packer Datasheet.pdf'
import SwellRightUltraSleeveDatasheet from './Specsheets/SwellRight Ultra Sleeve Datasheet.pdf'

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
                        {/* <thead>
                            <tr>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 1</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 2</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 3</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 4</th>
                                <th style={{ height: '40px', textAlign: 'center' }}>Column 5</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckDissolveDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck Dissolve Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckInjectionDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck Injection Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckProductionDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck Production Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckSystemAccessoriesDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck System Accessories Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloDirectDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloDirect Datasheet</button></div></td>
                            </tr>
                            <tr>
                            <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloEliteDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloElite Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloFuseRatelimitingControlDevice) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloFuse - Rate limiting control device</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloMaxDiscDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloMax Disc Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloRightDissolveDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloRight Dissolve Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloRightICDRangeDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloRight ICD Range Datasheet</button></div></td>
                            </tr>
                            <tr>
                            <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloRightUltraDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloRight Ultra Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloShroudDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloShroud Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloTextraRangeDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloTextra Range Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloWrapDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloWrap Datasheet</button></div></td>
                            <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PulseEightICVDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PulseEight ICV Datasheet</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PulseEightISVDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PulseEight ISV Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PulseEightWirelessGaugeDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PulseEight Wireless Gauge Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellableORingsDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Swellable O-rings Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellFixPackerDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellFix Packer Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellPlugPE) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellPlug PE</button></div></td>
                            </tr>
                            <tr>
                            <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightEliteSleeveDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Elite Sleeve Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightPackerDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Packer Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightSleeveDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Sleeve Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightUltraPackerDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Ultra Packer Datasheet</button></div></td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightUltraSleeveDatasheet) }} style={{color: 'black', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '150px', fontSize: '12px',  height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Ultra Sleeve Datasheet</button></div></td>
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
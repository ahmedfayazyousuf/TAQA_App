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
    // eslint-disable-next-line
    const [showPDFModal, setShowPDFModal] = useState(false);
    const [PDF, setPDF] = useState();

    function OpenPDF(v) {
        document.getElementById('pdf').style.zIndex = '100'
        setPDF(v)
        setShowPDFModal(true)
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '100', backgroundColor: '#005359' }}>

            <div style={{ display: 'flex', alignItems: 'center', width: '35vw', height: '100vh', flexDirection: 'column'}}>
                
                <div style={{ display: 'flex', height: '90vh', width: '35vw', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '20px', marginTop: '30px' }}>Portfolio Overview</p>
                    <button style={{ marginLeft: '20px', borderRadius: '10px', border: 'none', height: '170px', width: '250px', backgroundSize: 'cover', backgroundImage: `url('${Image}')`, backgroundPosition: 'center' }} onClick={() => setShowVideoModal(true)}></button>

                    
                    <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '20px', marginTop: '20px'  }}>Video</p>
                    <button style={{ marginLeft: '20px', borderRadius: '10px', border: 'none', height: '170px', width: '250px', backgroundSize: 'cover', backgroundImage: `url('${Image}')`, backgroundPosition: 'center' }} onClick={() => setShowVideoModal(true)}></button>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', width: '70vw', height: '100vh', flexDirection: 'column'}}>
                <div style={{ display: 'flex', height: '10vh', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%' }}>
                    <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '20px' }}>Spec Sheet</p>
                </div>
                <div style={{ display: 'flex', height: '75vh', width: '65vw' }}>
                    <table style={{ width: '65vw' }}>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckDissolveDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck Dissolve Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckInjectionDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck Injection Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckProductionDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck Production Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloCheckSystemAccessoriesDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloCheck System Accessories Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloDirectDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloDirect Datasheet</button></div></td>
                            </tr>
                            <tr>
                            <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloEliteDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloElite Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloFuseRatelimitingControlDevice) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloFuse - Rate limiting control device</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloMaxDiscDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloMax Disc Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloRightDissolveDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloRight Dissolve Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloRightICDRangeDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloRight ICD Range Datasheet</button></div></td>
                            </tr>
                            <tr>
                            <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloRightUltraDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloRight Ultra Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloShroudDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloShroud Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloTextraRangeDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloTextra Range Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(FloWrapDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FloWrap Datasheet</button></div></td>
                            <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PulseEightICVDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PulseEight ICV Datasheet</button></div></td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PulseEightISVDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PulseEight ISV Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(PulseEightWirelessGaugeDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PulseEight Wireless Gauge Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellableORingsDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Swellable O-rings Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellFixPackerDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellFix Packer Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellPlugPE) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellPlug PE</button></div></td>
                            </tr>
                            <tr>
                            <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightEliteSleeveDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Elite Sleeve Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightPackerDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Packer Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightSleeveDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Sleeve Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightUltraPackerDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Ultra Packer Datasheet</button></div></td>
                                <td style={{ textAlign: 'center' }} ><div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><button onClick={() => { OpenPDF(SwellRightUltraSleeveDatasheet) }} style={{color: 'white', backgroundColor: '#06636599', borderRadius: '10px', border: 'none', width: '130px', fontSize: '11px',  height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SwellRight Ultra Sleeve Datasheet</button></div></td>
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

            <div id='pdf' style={{width:'100vw',height:'100vh',background:'rgba(0,0,127,0.5)', position:'absolute',zIndex:'-100',top:'0'}}>
                <div onClick={()=>{document.getElementById('pdf').style.zIndex = '-100'}} style={{width:'100%',display:'flex',justifyContent:'flex-end',paddingRight:'20px', cursor: 'grab', position: 'absolute', zIndex: '1000000000000000000'}}><p style={{fontSize:'20px',fontWeight:'900'}}>X</p></div>
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
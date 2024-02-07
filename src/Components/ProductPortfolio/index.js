import ReactPlayer from 'react-player';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from './Images/image.jpg';
import PDF from './FloCheck Dissolve Datasheet.pdf'

const ProductPortfolio = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showPDFModal, setShowPDFModal] = useState(false);

    function OpenPDF(){
        setShowPDFModal(true)
    }



    return(
        <div>
            <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', width: '40vw', height: '100vh', flexDirection: 'column'}}>
                    <div style={{display: 'flex', height: '10vh', width: '40vw', justifyContent: 'center', alignItems: 'flex-end'}}>
                     <p style={{fontSize:'25px', fontWeight: '900'}}>Video 4x</p>
                    </div>
                    <div style={{display: 'flex', height: '90vh', width: '40vw', background: 'grey', justifyContent: 'center'}}>
                        <button style={{borderRadius: '10px', border: 'none', height: '350px', width: '500px', backgroundSize: 'cover', backgroundImage: `url('${Image}')`, backgroundPosition: 'center'}} onClick={() => setShowVideoModal(true)}>
                        </button>
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', width: '60vw', height: '100vh', flexDirection: 'column' }}>
                <div style={{display: 'flex', height: '10vh', width: '40vw', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <p style={{fontSize:'25px', fontWeight: '900'}}>Spec Sheet</p>
                    </div>
                    <div style={{display: 'flex', height: '70vh', width: '60vw'}}>             
                        <table style={{width: '60vw', border: '1px solid black'}}>
                        <thead>
                            <tr>
                            <th style={{height: '40px', textAlign: 'center'}}>Column 1</th>
                            <th style={{height: '40px', textAlign: 'center'}}>Column 2</th>
                            <th style={{height: '40px', textAlign: 'center'}}>Column 3</th>
                            <th style={{height: '40px', textAlign: 'center'}}>Column 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            </tr>
                            <tr>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            </tr>
                            <tr>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            </tr>
                            <tr>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            </tr>
                            <tr>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            </tr>
                            <tr>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            <td style={{border: '1px solid black', textAlign: 'center'}} onClick={()=>{OpenPDF()}}><button style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Button</button></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

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


            <Modal style={{height:'100%',width:"100vw"}} show={showPDFModal} onHide={() => setShowPDFModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Video Player</Modal.Title>
                </Modal.Header>
                
                <Modal.Body style={{height:'80vh',width:"100%"}}> 
                <embed
                src= {PDF}
                type="application/pdf"
                width="100%"
                height="100%"
            />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default ProductPortfolio
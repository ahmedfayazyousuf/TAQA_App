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
                    <div style={{display: 'flex', height: '30vh', width: '40vw', justifyContent: 'center', alignItems: 'flex-end'}}>
                     <p style={{fontSize:'25px', fontWeight: '900'}}>VIdeo 4x</p>
                    </div>
                    <div style={{display: 'flex', height: '70vh', width: '40vw', background: 'grey', justifyContent: 'center'}}>
                        <button style={{borderRadius: '10px', border: 'none', height: '350px', width: '500px', backgroundSize: 'cover', backgroundImage: `url('${Image}')`, backgroundPosition: 'center'}} onClick={() => setShowVideoModal(true)}>
                        </button>
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', width: '60vw', height: '100vh', flexDirection: 'column' }}>
                <div style={{display: 'flex', height: '30vh', width: '40vw', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <p style={{fontSize:'25px', fontWeight: '900'}}>Spec Sheet</p>
                    </div>
                    <div style={{display: 'flex', height: '70vh', width: '60vw'}}>             
                        <table style={{width: '60vw'}}>
                        <thead>
                            <tr>
                            <th >Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td onClick={()=>{OpenPDF()}}>Row 1, Cell 1</td>
                            <td onClick={()=>{OpenPDF()}}>Row 1, Cell 2</td>
                            <td onClick={()=>{OpenPDF()}}>Row 1, Cell 3</td>
                            <td onClick={()=>{OpenPDF()}}>Row 1, Cell 4</td>
                            </tr>
                            <tr>
                            <td onClick={()=>{OpenPDF()}}>Row 2, Cell 1</td>
                            <td onClick={()=>{OpenPDF()}}>Row 2, Cell 2</td>
                            <td onClick={()=>{OpenPDF()}}>Row 2, Cell 3</td>
                            <td onClick={()=>{OpenPDF()}}>Row 2, Cell 4</td>
                            </tr>
                            <tr>
                            <td onClick={()=>{OpenPDF()}}>Row 3, Cell 1</td>
                            <td onClick={()=>{OpenPDF()}}>Row 3, Cell 2</td>
                            <td onClick={()=>{OpenPDF()}}>Row 3, Cell 3</td>
                            <td onClick={()=>{OpenPDF()}}>Row 3, Cell 4</td>
                            </tr>
                            <tr>
                            <td onClick={()=>{OpenPDF()}}>Row 4, Cell 1</td>
                            <td onClick={()=>{OpenPDF()}}>Row 4, Cell 2</td>
                            <td onClick={()=>{OpenPDF()}}>Row 4, Cell 3</td>
                            <td onClick={()=>{OpenPDF()}}>Row 4, Cell 4</td>
                            </tr>
                            <tr>
                            <td onClick={()=>{OpenPDF()}}>Row 5, Cell 1</td>
                            <td onClick={()=>{OpenPDF()}}>Row 5, Cell 2</td>
                            <td onClick={()=>{OpenPDF()}}>Row 5, Cell 3</td>
                            <td onClick={()=>{OpenPDF()}}>Row 5, Cell 4</td>
                            </tr>
                            <tr>
                            <td onClick={()=>{OpenPDF()}}>Row 6, Cell 1</td>
                            <td onClick={()=>{OpenPDF()}}>Row 6, Cell 2</td>
                            <td onClick={()=>{OpenPDF()}}>Row 6, Cell 3</td>
                            <td onClick={()=>{OpenPDF()}}>Row 6, Cell 4</td>
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


            <Modal style={{height:'100%',width:"100%"}} show={showPDFModal} onHide={() => setShowPDFModal(false)}>
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
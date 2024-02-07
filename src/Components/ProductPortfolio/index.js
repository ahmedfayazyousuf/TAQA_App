import ReactPlayer from 'react-player';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from './Images/image.jpg';

const ProductPortfolio = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    return(
        <div>
            <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'red'}}>
                <div style={{display: 'flex', alignItems: 'center', background: 'blue', width: '40vw', height: '100vh', flexDirection: 'column'}}>
                    <div style={{display: 'flex', height: '30vh', width: '40vw', background: 'red'}}>
                    </div>
                    <div style={{display: 'flex', height: '70vh', width: '40vw', background: 'grey', justifyContent: 'center'}}>
                        <button style={{borderRadius: '10px', border: 'none', height: '350px', width: '500px', backgroundSize: 'cover', backgroundImage: `url('${Image}')`, backgroundPosition: 'center'}} onClick={() => setShowVideoModal(true)}>
                        </button>
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', background: 'green', width: '60vw', height: '100vh', flexDirection: 'column' }}>
                    <div style={{display: 'flex', height: '30vh', width: '60vw', background: 'green'}}>
                    </div>
                    <div style={{display: 'flex', height: '70vh', width: '60vw', background: 'yellow'}}>             
                        <table style={{width: '60vw'}}>
                        <thead>
                            <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Row 1, Cell 1</td>
                            <td>Row 1, Cell 2</td>
                            <td>Row 1, Cell 3</td>
                            <td>Row 1, Cell 4</td>
                            </tr>
                            <tr>
                            <td>Row 2, Cell 1</td>
                            <td>Row 2, Cell 2</td>
                            <td>Row 2, Cell 3</td>
                            <td>Row 2, Cell 4</td>
                            </tr>
                            <tr>
                            <td>Row 3, Cell 1</td>
                            <td>Row 3, Cell 2</td>
                            <td>Row 3, Cell 3</td>
                            <td>Row 3, Cell 4</td>
                            </tr>
                            <tr>
                            <td>Row 4, Cell 1</td>
                            <td>Row 4, Cell 2</td>
                            <td>Row 4, Cell 3</td>
                            <td>Row 4, Cell 4</td>
                            </tr>
                            <tr>
                            <td>Row 5, Cell 1</td>
                            <td>Row 5, Cell 2</td>
                            <td>Row 5, Cell 3</td>
                            <td>Row 5, Cell 4</td>
                            </tr>
                            <tr>
                            <td>Row 6, Cell 1</td>
                            <td>Row 6, Cell 2</td>
                            <td>Row 6, Cell 3</td>
                            <td>Row 6, Cell 4</td>
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

        </div>
    )
}

export default ProductPortfolio
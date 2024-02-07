import PPTImage from './Images/PPT.png';
import PPTImageSmall from './Images/PPTSmall.png';
import VideoImage from './Images/Video.png';

const ProductPortfolio = () => {

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', width: '100vw', background: 'red', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45vh', width: '100vw', background: 'blue'}}>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '45vh', width: '30vw', background: 'red', flexDirection: 'column'}}>
                    <p style={{width: '100%', backgroundColor: 'yellow', fontWeight: '900', fontSize: '20px', padding: '10px', margin: '0'}}>Screen</p>
                    <div style={{width: '100%', height: '60px', backgroundColor: 'black', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                        <p style={{width: '100%', fontSize: '20px', color: 'grey', margin: '0'}}>AICD's</p>
                    </div>
                    <div style={{width: '100%', height: '30vh', backgroundColor: 'white', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img style={{ height: '170px'}} src={PPTImage} alt="PPTImage" />
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
        </div>
    )
}

export default ProductPortfolio
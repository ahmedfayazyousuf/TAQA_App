import { NavLink } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center' }}>
        <NavLink to="/Player1Registration" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '40px'}}>
                <button id="buttontext" style={{background: 'white', height: '70px', padding: '10px', width: '250px', backgroundColor: 'white', borderRadius: '120px', fontSize: '25px', color: '#1E1450', border: '1px solid transparent'}}>LETS GO!</button>
            </div>
        </NavLink>
    </div>
  )
}

export default Home;
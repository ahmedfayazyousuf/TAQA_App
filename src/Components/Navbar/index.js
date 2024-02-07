import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const RenderMenu = () => {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/ProductPortfolio" style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                            Product Portfolio 
                        </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="/SmartLC" style={{fontWeight: '600', color: 'black', backgroundColor: 'grey', borderRadius: '10px', padding: '0 40px 0 40px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '30px', marginTop: '10px'}}>
                            Smart LC
                        </NavLink>
                    </li>
                </>
            )
    }
    return (
    <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#fff', padding: '0', margin: '0'}} >   
        <NavLink className="navbar-brand" to="/">
            {/* <img style={{marginLeft:'15px', width: '42px', height: '40px', marginTop: '5px', marginBottom: '5px'}} src={silalwhite} alt="the hanging house logo"/> */}
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse divvery" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <RenderMenu />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
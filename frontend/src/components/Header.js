import React,{useState} from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand,
} from "mdb-react-ui-kit";
import {useSelector,useDispatch} from "react-redux";
import { setLogout } from '../redux/features/authSlice';

const Header = () => {
 

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const {user} = useSelector((state)=>({...state.auth}));

    const handleLogout = () => {
      dispatch(setLogout());
    };

  return (
    <MDBNavbar fixed='top' expand="lg" style={{backgroundColor:"#f0e6ea"}}>
      <MDBContainer>
          <MDBNavbarBrand href="/"
          style={{ color:"#606080", fontweight:"600", fontSize:"22px"}}
          >
          Touropedia    
          </MDBNavbarBrand>
          <MDBNavbarToggler
           type="button"
           arial-expanded="false"
           aria-label="Togel navigation"
           onClick={() => setShow(!show)}
           style={{ color:"#606080"}}
          >
           <MDBIcon icon="bars" fas />   
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                <MDBNavbarItem >
                    <MDBNavbarLink href="/">
                        <p className='header-text'>Home</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>

                {user?.result?._id ? (
                  <>
                <MDBNavbarItem >
                    <MDBNavbarLink href="/addTour">
                        <p className='header-text'>Add Tour</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem >
                    <MDBNavbarLink href="/dashboard">
                        <p className='header-text'>Dashboard</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>                  
                <MDBNavbarItem >
                    <MDBNavbarLink href="/login" onClick={() => handleLogout()}>
                        <p className='header-text'>Logout</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>
                  </>
                ):(
                  <>
                <MDBNavbarItem >
                    <MDBNavbarLink href="/login">
                        <p className='header-text'>Login</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>
                  </>
                )}


             </MDBNavbarNav>
          </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header
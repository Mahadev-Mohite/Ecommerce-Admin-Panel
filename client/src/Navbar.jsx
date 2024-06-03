import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import './Navbar.css';

const Navbar = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        
    };

    return (
        <div style={styles.nav}>
            <div style={styles.headLogoContainer}>
                <img className="logo" src="https://cdn-icons-png.flaticon.com/128/10003/10003663.png" alt="Logo" />
                <h3><b>digital</b>flake</h3>
            </div>
            <div style={styles.profileContainer} onClick={togglePopup}>   
                <CgProfile />
            </div>

            {/* Popup window */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3><AiOutlineLogout />Log Out</h3>
                        {/* Add profile details or actions here */}
                        <button onClick={togglePopup}>Confirm</button>
                        <button onClick={togglePopup}>Back</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 50,
        background: 'purple',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    },
    profileContainer: {
        position: 'relative',
        fontSize: '30px', // Increase the size of the icon
        width: '40px', // Increase the width of the container
        height: '40px', // Increase the height of the container
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'white'
        
    },
    headLogoContainer: {
        position: 'relative',
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        color:'white'
    }
};

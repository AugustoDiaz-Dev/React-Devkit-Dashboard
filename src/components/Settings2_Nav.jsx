import React from 'react';
import { IconContext } from 'react-icons'
import { MdLockOpen, MdOutlineContactSupport, MdOutlineDashboard } from "react-icons/md";
import { FiType, FiUsers } from "react-icons/fi";
import { GiPaperBoat } from "react-icons/gi";
import { BiImageAlt } from "react-icons/bi";

function Settings2_Nav() {
    return (
        <IconContext.Provider value={{ size: '1.5rem' }}>
            <nav className='navbar' id='hide'>
                <div className='navbar__header'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/taptima%2Favatar.png?alt=media&token=15f7020d-1139-4d85-b256-bf0d48765435" alt="Avatar" width="100px" height="100px" />
                    <h2>Roman Kutepov</h2>
                    <p>Brain Director</p>
                    <hr />
                </div>
                <div className='navbar__content'>
                    <ul>
                        <li><a href="#"><MdOutlineDashboard /> Dashboard</a></li>
                        <li><a href="#"><FiUsers /> Users</a></li>
                        <li><a href="#"><GiPaperBoat /> Products</a></li>
                        <li><a href="#"><MdLockOpen /> Authentication</a></li>
                        <li><a href="#"><FiType></FiType> Typography</a></li>
                        <li><a href="#"><BiImageAlt /> Icons & Images</a></li>
                    </ul>
                    <hr />
                </div>
                <div className='navbar__footer'>
                    <p>Support</p>
                    <ul>
                        <li><a href="#"><MdOutlineContactSupport /> Support</a></li>
                    </ul>
                </div>
            </nav >
        </IconContext.Provider >
    );
}

export default Settings2_Nav;


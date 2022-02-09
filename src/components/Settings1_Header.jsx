import React from 'react';
import { FiBell } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";

function Settings1_Header(props) {
    return (
        <header className="header">
            <div className='header__main'>
                <div className='header__main__brand'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/taptima%2Flogo_devias.png?alt=media&token=91e4bcd3-6a43-4a01-a646-187314e51a84" alt="Devias Kit" className='header__logo' width="36px" height="36px" />
                    <h1 className='header__main__brand__name'>
                        <a href="#">{props.brand}</a>
                    </h1>
                </div>
                <div className='header__main__cta'>
                    <button>FREE</button>
                    <p>See our PRO version for more design components & coded in React follow this link: https://devias.io/products/devias-kit-pro</p>
                </div>
            </div>

            <div className='header__icons'>
                <ul className='header__icons__list'>
                    <li><a href="#"><FiBell /></a></li>
                    <li><a href="#"><BiLogIn /></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Settings1_Header;

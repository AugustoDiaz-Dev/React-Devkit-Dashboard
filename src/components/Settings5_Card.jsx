import React from 'react';

function Settings5_Card() {
    return (
        <section className='card'>
            <div className='card__head'>
                <div className='card__head__text'>
                    <h2>Adrian Stefan</h2>
                    <p>Rm. Valcea, Romania</p>
                    <p>4:32PM (GMT-4)</p>
                </div>
                <div className='card__head__img'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/taptima%2Fprofile.png?alt=media&token=cc9feb7f-3746-4421-a72a-fd0a106786ee" alt="Profile photo" width="140px" height="140px" />
                </div>
            </div>
            <div className='card__links'>
                <ul className='card__links__list'>
                    <li className='card__links__list__item'>
                        <a href="#">UPLOAD PICTURE</a>
                    </li>
                    <li className='card__links__list__item'>
                        <a href="#">REMOVE PICTURE</a>
                    </li>
                </ul>
            </div>
        </section >
    );
}

export default Settings5_Card;

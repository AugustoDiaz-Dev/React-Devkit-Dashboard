import React, { useState } from 'react';

function Settings6_Profile() {

    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        country: '',
        lastName: '',
        phone: '',
        city: ''
    })

    function validate({ firstName }) {
        const valid = firstName && firstName.length > 3;
        if (!valid) {
            setErrors({ firstName: true });
        } else {
            setErrors({});
        }
        return valid;
    }

    function onSubmit(event) {
        event.preventDefault();
        // console.log(formData)
        validate(formData) ? console.log(formData) : console.log("Invalid")
    }
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <section className='profile'>
            <div className='profile__header'>
                <h3>Basic Profile</h3>
                <p>The information can be edited from your profile page</p>
            </div>
            <div className='profile__content'>
                <form className='profile__content__form' id='profileForm' onSubmit={onSubmit}>
                    <div className='profile__content__form__left'>
                        <span>
                            <input type="text" placeholder='First Name' name="firstName" value={formData.firstName} onChange={onChange} />
                            {/* <label>First Name</label> */}
                            <small>Please specify the first name</small>
                        </span>
                        <span>
                            <input type="email" placeholder="adrian_shp@yahoo.com" name="email" value={formData.email} onChange={onChange} />
                            {/* <label>Last Name</label> */}
                        </span>
                        <span>
                            <input type="text" placeholder="Romania" name="country" value={formData.country} onChange={onChange} />
                            {/* <label>Last Name</label> */}
                        </span>
                    </div>
                    <div className='profile__content__form__right'>
                        <span>
                            <input type="text" placeholder="Manea" name="lastName" value={formData.lastName} onChange={onChange} />
                            {/* <label>Last Name</label> */}
                            <small className='assistive--active'>Assistive text</small>
                        </span>
                        <span>
                            <input type="phone" placeholder="0752549328" name="phone" value={formData.phone} onChange={onChange} />
                            {/* <label>Last Name</label> */}
                        </span>
                        <span>
                            <input type="text" placeholder="Ramnicu Valcea" name="city" value={formData.city} onChange={onChange} />
                            {/* <label>Last Name</label> */}
                        </span>
                    </div>

                </form>
                {errors.firstName && <p className='error'>Error</p>}
            </div>
            <div className='profile__footer'>
                <button type="submit" form="profileForm" className='profile__footer__button'>SAVE SETTINGS</button>
            </div>
        </section>
    );
}

export default Settings6_Profile;

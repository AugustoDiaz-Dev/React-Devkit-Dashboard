import React from 'react';

function Settings7_Notifications() {
    return (
        <section className='notifications'>
            <div className='notifications__header'>
                <h3>Notifications</h3>
                <p>Manage the notifications emailing</p>
            </div>
            <div className='notifications__content'>
                <form className='notifications__content__form'>
                    <div className='notifications__content__form__left'>
                        <h3>Notifications</h3>
                        <span>
                            <input type="checkbox" id="user_email" name="user_email" value="" />
                            <label htmlFor="user_email">Email</label>
                        </span>
                        <span className='assistive'>
                            <input type="checkbox" id="user_notifications" name="user_notifications" value="" />
                            <div className='assistive--div'>
                                <label htmlFor="user_notifications">Push notifications</label>
                                <small className='assistive--active'>For your mobile or tablet device</small>
                            </div>
                        </span>
                        <span><input type="checkbox" id="user_messages" name="user_messages" value="" />
                            <label htmlFor="user_messages">Text Messages</label>
                        </span>
                        <span><input type="checkbox" id="user_calls" name="user_calls" value="" />
                            <label htmlFor="user_calls">Phone Calls</label>
                        </span>
                    </div>
                    <div className='notifications__content__form__right'>
                        <h3>Messages</h3>
                        <span>
                            <input type="checkbox" id="msg_email" name="msg_email" value="" />
                            <label htmlFor="msg_email">Email</label>
                        </span>
                        <span>
                            <input type="checkbox" id="msg_notifications" name="msg_notifications" value="" />
                            <label htmlFor="msg_notifications">Push notifications</label>
                        </span>
                        <span><input type="checkbox" id="msg_messages" name="msg_messages" value="" />
                            <label htmlFor="msg_messages">Text Messages</label>
                        </span>

                    </div>

                </form>
            </div>
            <div className='notifications__footer'>
                <button className='notifications__footer__button'>SAVE</button>
            </div>
        </section>
    );
}

export default Settings7_Notifications;

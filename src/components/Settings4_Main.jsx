import React from 'react';
import Settings5_Card from './Settings5_Card';
import Settings6_Profile from './Settings6_Profile';
import Settings7_Notifications from './Settings7_Notifications';
import Settings9_Footer from './Settings9_Footer';

function Settings4_Main() {
    return (
        <main className='main'>
            <Settings5_Card></Settings5_Card>
            <div>
                <Settings6_Profile></Settings6_Profile>
                <Settings7_Notifications></Settings7_Notifications>
            </div>
            <Settings9_Footer></Settings9_Footer>
        </main>
    );
}

export default Settings4_Main;

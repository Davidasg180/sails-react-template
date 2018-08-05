import React from 'react';
import Background from './../../assets/images/bg1.jpg';

import './AccessPanel.css'

function AccessPanel(props) {
    return (
        <div>
            <div className="someHeader">Some Header</div>
            <div style={{
                top: 0,
                height: `100vh`,
                position: `relative`,
                overflow: `hidden`,
                minHeight: `100vh`
            }}>
                {/* Some Header */}
                <div className='AccesPanelMainContent'>
                    <div style={{
                        zIndex: 4,
                        position: `relative`,
                        minHeight: `calc(100vh - 80px)`,
                        paddingTop: `18vh`
                    }}>
                        {props.children}
                    </div>
                    {/* Some footer */}
                    <div className='bgImage' style={{ backgroundImage: `url(${Background})` }} ></div>
                </div>
            </div>
        </div>
    );
}

export default AccessPanel;
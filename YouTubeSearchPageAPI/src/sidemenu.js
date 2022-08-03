import './css/App.css';
import home_icon from './assets/home_icon.jpeg'
import {
    YOUTUBE_URL,
    YOUTUBE_EXPLORE_URL,
    YOUTUBE_SUBSCRIPTIONS_URL,
    YOUTUBE_LIBRARY_URL,
 } from './constants';

import React from 'react';

const SideMenu = (props)=>{
    return(
        <div className="sidemenu">
                <a href={YOUTUBE_URL}> 
                    <div>
                    <img 
                    src={home_icon} 
                    alt="Home Icon"
                    />
                    Home
                    </div> 
                </a>

                <a href={YOUTUBE_EXPLORE_URL}> 
                    <div>
                    <img 
                    src={home_icon}
                    alt="Explore Icon"
                    />
                    Explore
                    </div> 
                </a>

                <a href={YOUTUBE_SUBSCRIPTIONS_URL}> 
                    <div>
                    <img 
                    src={home_icon}
                    alt="Subscriptions Icon"
                    />
                    Subscriptions
                    </div> 
                </a>

                <a href={YOUTUBE_LIBRARY_URL}> 
                    <div>
                    <img 
                    src={home_icon} 
                    alt="Heree"
                    />
                    Library
                    </div> 
                </a>
        </div>
    )
}

export default SideMenu;
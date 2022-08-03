import './css/App.css';
import SideMenu from "./sidemenu"
import VideoItemsList from './video_items_list';
import { YouTubeSearchAPI } from './services';

import React, { useState } from 'react';
import ReactNotifications from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


const App = (props)=>{

    const [searchInput, setSearchInput] = useState("")
    const [searchResultVideoItems, setSearchResultVideoItems] = useState([])

    const handleChange = (event)=>{
        setSearchInput(event.target.value) 
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();

        YouTubeSearchAPI(searchInput,setSearchResultVideoItems)
    };

    return (
        <div className="main">
            <SideMenu/>
            <div> 
                <div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="searchBar" type="text" value={searchInput} onChange={handleChange}/> 
                    <button className="searchButton" type="submit" onSubmit={handleSubmit}> Search</button> 
                </form>
            </div>
            <br/>
            <div>
                {   
                    searchResultVideoItems && (
                        searchResultVideoItems.length === 0
                        ? <ReactNotifications/>
                        : <VideoItemsList items={searchResultVideoItems}/>
                    )
                }
                
            </div>
            
        </div>
        );
}

export default App;
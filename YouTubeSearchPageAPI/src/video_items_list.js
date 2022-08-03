import {viewCountCalculation} from "./helpers"

import React from 'react';

const VideoItem = (props)=>{
    let videoitem = props.item
    return (
        <div className="videoitem">
            <div className="videoitem_image">
                <a href={videoitem.url}>
                    <img 
                    src={videoitem.bestThumbnail.url} 
                    alt="Video Thumbnail" 
                    />
                </a>
            </div>

            <div className="videoitem_text">
                <a href={videoitem.url}>{videoitem.title}</a>
                <p> {viewCountCalculation(videoitem.views)} . {videoitem.uploadedAt}  </p>

                <div className="videoitem_channel">
                    <a href={videoitem.author.url}>
                        <img 
                        src={videoitem.author.bestAvatar.url} 
                        alt="Channel Thumbnail" 
                        /> 
                        <p>{videoitem.author.name}</p>
                    </a>
                </div>
                <div>
                    <p> { videoitem.description} </p>
                </div>

            </div>
        </div>
    )
}

const VideoItemsList= (props) =>{
    let videoitems = props.items
    return (
        <div>
            {videoitems.map(
                (item) => <VideoItem item={item} key={item.id}/>
            )}
        </div>
    )
}

export default React.memo(VideoItemsList);



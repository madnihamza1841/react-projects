import { BILLION, MILLION, THOUSAND } from "./constants";

import { store } from 'react-notifications-component';
import 'animate.css';

export function ShowErrorNotification(title, message){
    store.addNotification({
        title: title,
        message: message,
        type: 'warning',
        container: 'top-left',        
        animationIn: ["animated", "fadeIn"],     
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000
        }
      })
}

export function viewCountCalculation(views){

    let youtube_views = ""

    switch(true){
        case(views>=BILLION): 
        youtube_views = (views/BILLION).toFixed(1) + " B Views";
        break;

        case(views>=MILLION):
        youtube_views = (views/MILLION).toFixed(1) + " M Views";
        break;

        case(views>=THOUSAND):
        youtube_views = (views/THOUSAND).toFixed(1) + "K Views";
        break;

        default:
        youtube_views = views + " Views"
    };

    return youtube_views
}


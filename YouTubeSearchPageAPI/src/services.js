import { ShowErrorNotification } from './helpers'
import { YOUTUBE_API_HOST, YOUTUBE_API_KEY, YOUTUBE_API_URL} from "./constants";

import axios from "axios";

export function YouTubeSearchAPI(q, callback){
    
    const options = {
        method: 'GET',
        url: YOUTUBE_API_URL,
        params: {q: q},
        headers: {
          'x-rapidapi-host': YOUTUBE_API_HOST,
          'x-rapidapi-key': YOUTUBE_API_KEY
        }
      };

    axios.request(options)

    .then((response)=> {
    callback(response.data.items.filter(item=> item.type==='video'))
    })

    .catch((error) => {
        let error_message = "Data could not be fetched. " + error
        ShowErrorNotification("Error", error_message)
    });
};
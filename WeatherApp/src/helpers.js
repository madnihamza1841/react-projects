import { store } from 'react-notifications-component';

export const ShowErrorNotification = (title, message) => {
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

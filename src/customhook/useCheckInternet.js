import notify from './useNotification'

const CheckInternet = () => {

    if(!navigator.onLine){
        notify('لايوجد انترنت ','error')
        return;
     }
  
}

export default CheckInternet

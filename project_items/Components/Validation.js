import NetInfo from '@react-native-community/netinfo';
 export const InternetValidation = async () => {
     let Internet=false;
await  NetInfo.fetch().then(networkState => {
     Internet = networkState.isConnected;

    })
    if (Internet === false) {
      return {
        success: false,
        message: 'Enternet Not Connected',
      };
    } else {
      return {
        success: true,
        message: '',
      };
    }
};

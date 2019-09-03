// import { LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';

// export const facebookLogin = async () => {
//   let result;

//   try {
//     result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
//   } catch (error) {
//     throw new Error(error);
//   }

//   if (result.isCancelled) {
//     console.log('LoginCancelado');
//   }

//   return false;
// };

export const googleLogin = async () => {
  let result;
  try {
    await GoogleSignin.hasPlayServices();
    result = await GoogleSignin.signIn();
  } catch (error) {
    console.tron.log(error);
  }
};

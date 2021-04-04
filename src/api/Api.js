import firebase from 'firebase/app';
import 'firebase/auth';

import { userCollection } from '../utils/fbase'


export const registerUser = async ({email, password, name, lastname})=> {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const {user} = response;

        const userProfile = {
            uid: user.uid,
            email: email,
            name: name,
            lastname: lastname,
            role: 1
        };

        await userCollection.doc(user.uid).set(userProfile);
        firebase.auth().currentUser.sendEmailVerification(null);
        return { isAuth: true, user: userProfile}
    } catch (err) {
        return{ error: err.message}
    }

}
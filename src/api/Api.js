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

export const loginUser = ({email, password}) => (
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password).then( response => {
        return userCollection.doc(response.user.uid).get().then( snapshot => {
            return { isAuth: true, user: snapshot.data()}
        })
    }).catch (err => {
        return{ error: err.message}
    })
    
)

export const autoSignIn = () => (
    new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged( user => {
            if (user){
                userCollection.doc(user.uid).get().then( snapshot => {
                    resolve({ isAuth: true, user: snapshot.data() })
                })   
            } else {
                resolve({ isAuth: false, user: null })
            }
        })
    })
)

export const logoutUser = () => (
    firebase.auth().signOut()
)
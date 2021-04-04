import { 
    AUTH_USER
} from '../types';

import * as api from '../../api/Api';

export const registerUser = (userData) => ({
    type: AUTH_USER,
    payload: api.registerUser(userData)
})
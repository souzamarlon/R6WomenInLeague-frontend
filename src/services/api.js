import axios from 'axios';
import { toast } from 'react-toastify';

import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.registerInterceptWithStore = (store) => {
    api.interceptors.response.use(
        (response) => response,

        async (err) => {
            if (err.response.status === 401) {
                const { error } = err.response.data;
                toast.error(`Authentication failure!, ${error}`);

                store.dispatch(signOut());
            }
        }
    );
};

export default api;

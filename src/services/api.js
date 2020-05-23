import axios from 'axios';
import { toast } from 'react-toastify';

import history from './history';
import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.registerInterceptWithStore = (store) => {
    api.interceptors.response.use(
        (response) => response,
        async function check(err) {
            if (err.response.status === 401) {
                const { error } = err.response.data;
                toast.error(`Authentication failure!, ${error}`);
                console.tron.log(store);
                store.dispatch(signOut());
                history.push('/');
            }
        }
    );
};

export default api;

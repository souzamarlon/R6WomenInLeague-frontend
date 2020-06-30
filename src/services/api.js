import axios from 'axios';
import { toast } from 'react-toastify';

import history from '~/services/history';

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

                await store.dispatch(signOut());
                history.go('/');
            }
            if (err.response.status === 400) {
                const { error } = err.response.data;
                toast.error(`Failure, something is wrong!, ${error}`);
            }
        }
    );
};

export default api;

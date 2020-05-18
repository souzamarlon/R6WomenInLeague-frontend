import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const {
            name,
            email,
            uplay,
            competition,
            ranked,
            region,
            play_style,
            times,
            ...rest
        } = payload.data;

        console.tron.log(payload.data);

        const profile = {
            name,
            email,
            uplay,
            competition,
            ranked,
            region,
            play_style,
            times,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'users', profile);

        toast.success('Your profile was successfully updated!');
        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        toast.error('Error to update your profile!');

        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

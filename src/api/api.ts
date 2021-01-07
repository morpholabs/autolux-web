import axios from 'axios';
import { getAccessToken } from 'context/AuthContext';
import { newGuid } from 'utils/guid';

export const api = async () => {
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'x-requestid': newGuid(),
            authorization: `Bearer ${getAccessToken()}`,
            'Content-Type': 'application/json',
        },
    });
};

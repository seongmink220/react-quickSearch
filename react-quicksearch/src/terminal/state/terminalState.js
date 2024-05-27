import { atom, selectorFamily } from 'recoil';
import axios from 'axios';

export const terminalState = atom({
    key: 'terminalState',
    default: null,
});

export const fetchTerminalSelector = selectorFamily({
    key: 'fetchTerminalSelector',
    get: (terminalID) => async () => {
        try {
            const response = await axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/' + terminalID);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
});

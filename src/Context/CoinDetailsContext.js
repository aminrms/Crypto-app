import React, { createContext, useEffect, useState } from 'react';
import { getCoinDetails } from '../Api/api';
export const CoinDetailsContextProvider = createContext()
const CoinDetailsContext = ({ children}) => {
    const [CoinDetails , setCoinDetails] = useState({});
    useEffect(() => {
        const fetchAPI = async () => {
            setCoinDetails(await getCoinDetails());
        }
        fetchAPI()
    },[])

    return (
        <CoinDetailsContextProvider.Provider value={CoinDetails}>
            {children}
        </CoinDetailsContextProvider.Provider>
    );
};

export default CoinDetailsContext;
import { createContext, useState } from 'react';
import logo from '../assets/svgs/logo.svg';
import { dummyContent } from './dummyContent';
const AppContext = createContext([
    {
        pages: [],
        openNav: false,
        content: {},
    },
    () => {},
]);

const AppContextProvider = (props) => {
    const [state, setState] = useState({
        pages: [],
        openNav: false,
        content: {
            logo: logo,
            footerLogo: logo,
            home: dummyContent,
            about: dummyContent,
        },
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };

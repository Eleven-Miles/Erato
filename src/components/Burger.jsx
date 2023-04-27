import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Burger = () => {
    const [appContext, setAppStateContext] = useContext(AppContext);
    const close = appContext.openNav;

    const handleSetOpenNav = () => {
        document.body.classList.toggle('locked');
        setAppStateContext({
            ...appContext,
            openNav: close ? false : true,
        });
    };

    return (
        <button
            className={`burger ${appContext.openNav ? `active` : ''}`}
            onClick={() => handleSetOpenNav()}
            type="button"
        >
            <div />
            <div />
            <div />
        </button>
    );
};

export default Burger;

import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navigation from './Navigation';
import Routes from './Routes';
import Footer from './Footer';
import useDocumentScrollThrottled from '../assets/hooks/useScroll';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/context';

const Layout = ({ routes }) => {
    const [appContext, setAppStateContext] = useContext(AppContext);
    const location = useLocation();
    const currentOutlet = useOutlet();
    const { nodeRef } =
        routes.find((route) => route.path === location.pathname) ?? {};

    useEffect(() => {
        setAppStateContext({
            ...appContext,
            pages: routes,
        });
    }, []);

    return (
        <>
            <Navigation />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="site-page"
                    unmountOnExit
                >
                    {(state) => (
                        <Routes
                            nodeRef={nodeRef}
                            currentOutlet={currentOutlet}
                        />
                    )}
                </CSSTransition>
            </SwitchTransition>
            <Footer />
        </>
    );
};
export default Layout;

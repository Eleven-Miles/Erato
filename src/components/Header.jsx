import { useContext, useState } from 'react';
import { AppContext } from '../context/context';
import Menu from './Menu';
import Burger from './Burger';
import { useWindowSize } from '../assets/hooks/useWindowSize';
import { Link } from 'react-router-dom';
import useDocumentScrollThrottled from '../assets/hooks/useScroll';

function Header() {
    const [appContext] = useContext(AppContext);
    const [isScrolled, setIsScrolled] = useState(false);

    const logo = appContext.content.logo;

    const MINIMUM_SCROLL = 100;
    const TIMEOUT_DELAY = 100;

    useDocumentScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setIsScrolled(currentScrollTop > 100);

        setTimeout(() => {
            setIsScrolled(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const { width } = useWindowSize();
    const breakpoint = width >= 800;

    return (
        <>
            <header
                className={`site-header ${
                    isScrolled ? `reduced` : ``
                }  content-section content-section--reduced-padding`}
            >
                <div className="site-header__masthead container">
                    <Link to="/">
                        <img
                            className="site-header__logo"
                            src={logo}
                            alt="Moo Air Logo"
                        />
                    </Link>
                    {breakpoint && <Menu navType="desktop" />}
                    {!breakpoint && <Burger />}
                </div>
            </header>
            {!breakpoint && <Menu navType="mobile" />}
        </>
    );
}

export default Header;

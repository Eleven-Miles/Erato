import { Link } from 'react-router-dom';
import { AppContext } from '../context/context';
import { useContext } from 'react';

const Nav = ({ navType }) => {
    const [appContext, setAppStateContext] = useContext(AppContext);
    const openNav = appContext.openNav;

    const handleSetOpenNav = () => {
        document.body.classList.remove('locked');
        setAppStateContext({
            ...appContext,
            openNav: close ? false : true,
        });
    };

    return (
        <nav
            className={`site-header__${navType}-nav  ${
                openNav ? `open` : `closed`
            } navigation container`}
        >
            {appContext.pages &&
                appContext.pages.map((item, index) => (
                    <Link
                        key={index}
                        className="navigation__item"
                        to={item.path}
                        onClick={() => handleSetOpenNav()}
                    >
                        {item.title}
                    </Link>
                ))}
        </nav>
    );
};

export default Nav;

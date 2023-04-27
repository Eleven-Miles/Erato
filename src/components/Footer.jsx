import { useContext } from 'react';
import Icon from './Icon';
import { AppContext } from '../context/context';
import { Link } from 'react-router-dom';

function Footer() {
    const [appContext] = useContext(AppContext);

    const logo = appContext.content.logo;
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__layout content-section">
                    <Link to="/">
                        <img
                            className="site-footer__logo"
                            src={logo}
                            alt="Moo Air Logo"
                        />
                    </Link>
                    <div className="site-footer__social">
                        <Icon
                            icon="instagram"
                            width="30px"
                            fill="var(--white)"
                        />
                        <Icon icon="youtube" width="30px" fill="var(--white)" />
                        <Icon icon="twitter" width="30px" fill="var(--white)" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

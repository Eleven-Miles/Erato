import BackgroundImage from './BackgroundImage';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const CardItem = ({ item }) => {
    return (
        <div className={`card card--${item.size}`}>
            <div className="card__content">
                {item.title && (
                    <header className="card__header">
                        <h1>{item.title}</h1>
                    </header>
                )}
                {item.content && <p className="text--black">{item.content}</p>}
                {item.cta && (
                    <Link
                        className="button button--text button--with-icon-right"
                        to={item.cta}
                    >
                        {item.cta_label}
                        <Icon icon="chevronright" width="16px" />
                    </Link>
                )}
            </div>
            <BackgroundImage url={item.image} classes="card__bg-img" />
        </div>
    );
};

export default CardItem;

import Icon from './Icon';

const SliderButtons = ({ nextRef = null, prefRef = null }) => {
    return (
        <div className="glide__arrows" data-glide-el="controls">
            <button
                ref={prefRef}
                className="glide__arrow glide__arrow--prev"
                data-glide-dir="<"
            >
                <Icon icon="arrowleftalt" width="30px" fill="var(--white)" />
            </button>
            <button
                ref={nextRef}
                className="glide__arrow glide__arrow--next"
                data-glide-dir=">"
            >
                <Icon icon="arrowrightalt" width="30px" fill="var(--white)" />
            </button>
        </div>
    );
};

export default SliderButtons;

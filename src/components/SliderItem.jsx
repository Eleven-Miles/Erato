const SliderItem = ({ item }) => {
    return (
        <li key={item._id} className="glide__slide">
            <img className="glide__slide-image" src={item.image} alt="test" />
        </li>
    );
};

export default SliderItem;

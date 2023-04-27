import CardItem from './CardItem';

const Card = ({ data }) => {
    return (
        <>
            {data &&
                data.items.map((card, index) => (
                    <CardItem key={index} item={card} />
                ))}
        </>
    );
};

export default Card;

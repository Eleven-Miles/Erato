const Images = ({ data }) => {
    return (
        <>
            {data &&
                data.items.map((item, index) => (
                    <img key={index} src={item.image} />
                ))}
        </>
    );
};

export default Images;

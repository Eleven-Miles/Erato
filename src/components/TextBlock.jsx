function TextBlock({ data }) {
    return (
        <div className="text-block__wrapper">
            {data.title && <h2 className="text--black">{data.title}</h2>}
            <div
                className="text--black"
                dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
        </div>
    );
}

export default TextBlock;

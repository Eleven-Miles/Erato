function TextBlock({ data }) {
    const { title, content } = data;
    return (
        <div className="text-block__wrapper">
            {title && <h2 className="text--black">{title}</h2>}
            <div
                className="text--black"
                dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
}

export default TextBlock;

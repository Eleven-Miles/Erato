function BackgroundImage({ url, classes }) {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(` + url + `)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                    height: '100%',
                }}
                className={`bg-image ${classes}`}
            ></div>
        </>
    );
}

export default BackgroundImage;

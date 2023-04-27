function Component({ component, children, container, classes, addStyle }) {
    return (
        <section className={component}>
            {container && (
                <div
                    style={addStyle ? addStyle : {}}
                    className={`${
                        container ? `content-section container` : ``
                    } ${component}__container ${classes ? classes : ``}`}
                >
                    {children}
                </div>
            )}
            {!container && children}
        </section>
    );
}

export default Component;

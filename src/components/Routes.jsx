function Routes({ nodeRef, currentOutlet }) {
    return (
        <main ref={nodeRef} className="site-page">
            {currentOutlet}
        </main>
    );
}

export default Routes;

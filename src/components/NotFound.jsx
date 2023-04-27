import Component from './Component';
import SEO from './SEO';
import TextBlock from './TextBlock';

function NotFound() {
    const data = {
        title: '404',
        content: 'Page not found',
    };
    return (
        <>
            <SEO
                title="About"
                description="About Moo Air"
                name="mooair.com"
                type="page"
            />
            <Component
                component="text-block"
                container={true}
                classes="container--medium"
            >
                <TextBlock data={data} />
            </Component>
        </>
    );
}

export default NotFound;

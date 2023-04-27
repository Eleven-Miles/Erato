import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import { createRef, useContext, useEffect } from 'react';
import { AppContext, AppContextProvider } from './context/context';
import { HelmetProvider } from 'react-helmet-async';

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
    if (!fileName) {
        continue;
    }

    const normalizedPathName = fileName.includes('$')
        ? fileName.replace('$', ':')
        : fileName.replace(/\/index/, '');

    routes.push({
        path:
            fileName === 'home' ? '/' : `/${normalizedPathName.toLowerCase()}`,
        Element: pages[path].default,
        nodeRef: createRef(),
        title: normalizedPathName.replace('-', ' '),
        loader: pages[path]?.loader,
        action: pages[path]?.action,
        ErrorBoundary: pages[path]?.ErrorBoundary,
    });
}

const router = createBrowserRouter([
    {
        element: <Layout routes={routes} />,
        children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
            ...rest,
            element: <Element />,
            ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
        })),
    },
]);

const App = () => {
    const helmetContext = {};

    return (
        <AppContextProvider>
            <HelmetProvider context={helmetContext}>
                <RouterProvider router={router} />
            </HelmetProvider>
        </AppContextProvider>
    );
};

export default App;

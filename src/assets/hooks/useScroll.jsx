import throttle from 'lodash.throttle';
import { useEffect } from 'react';

function useDocumentScrollThrottled(callback) {
    let previousScrollTop = 0;

    function handleDocumentScroll() {
        const { scrollTop: currentScrollTop } =
            document.documentElement || document.body;

        callback({ previousScrollTop, currentScrollTop });
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScrollThrottled);

        return () =>
            window.removeEventListener('scroll', handleDocumentScrollThrottled);
    }, [handleDocumentScrollThrottled]);
}

export default useDocumentScrollThrottled;

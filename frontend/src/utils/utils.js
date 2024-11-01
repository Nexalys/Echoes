export function extractHeadersFromMarkdown(markdownValue) {
    return markdownValue
        .split('\n')
        .filter((line) => line.match(/^#{1,2}(?!#)/))
        .map((header) => {
            const match = header.match(/^#{1,2}(?!#)/);
            const rank = Math.min((match && match[0].length) || 0, 2);
            header = header.slice(rank);

            const link = `#${header
                .toLowerCase()
                .trim()
                .split(' ')
                .map((linkElement) => {
                    return linkElement.replaceAll(/[^a-zA-Z0-9]+/g, '');
                })
                .join('-')}`;
            return { header, link, rank };
        });
}




const linkTracker = [];
let lastY = window.scrollY;

export function observeHeader(header, setCallback) {
    if (!header) return;

    const observer = new IntersectionObserver((entries) => {
        const currentY = window.scrollY;
        const isScrollUp = currentY < lastY;
        lastY = currentY;

        console.log(linkTracker, isScrollUp);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isScrollUp) {
                    linkTracker.push(`#${header.id}`);
                }
            } else {
                if (isScrollUp) {
                    linkTracker.pop();
                }
            }

            setCallback(linkTracker.at(-1));
        });
    }, {
        root: null,
        rootMargin: '0px 0px -90% 0px',
        threshold: 0
    });

    observer.observe(header);

    return observer;
}


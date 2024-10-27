export function extractHeadersFromMarkdown(markdownValue) {
    return markdownValue
        .split('\n')
        .filter((line) => line.startsWith('#'))
        .map((header) => {
            const match = header.match(/^#+/);
            const rank = Math.min((match && match[0].length) || 0, 6);
            header = header.slice(rank);

            const link = `#${header
                .toLowerCase()
                .trim()
                .split(' ')
                .map((linkElement) => {
                    return linkElement
                        .replaceAll(/[^a-zA-Z0-9]+/g, '');
                })
                .join('-')}`

            return {header, link, rank}
        });
}

let currentObservedLink = null;

export function observeHeader(header, callback) {
    if (!header) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (currentObservedLink === null) {
                currentObservedLink = entry;
            }
            if (entry.isIntersecting) {
                callback(`#${header.id}`);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 1
    });

    observer.observe(header);

    return observer;
}


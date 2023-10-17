export interface Items {
    alternate: [object];
    author: string;
    canonicalUrl: string;
    crawled: number;
    fingerprint: string;
    id: string;
    keywords: [string];
    language: string;
    origin: [object];
    originId: string;
    published: number;
    summary: {
        content: string;
        direction: string;
    };
    title: string;
    unread: boolean;
}
export interface DataItems {
    alternate: object;
    direction: string;
    id: string;
    items: Items[];
    title: string;
    updated: number;
}

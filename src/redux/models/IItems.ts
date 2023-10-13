export interface IItems {
    alternate: [object],
    author: string,
    canonicalUrl: string,
    crawled: number,
    fingerprint: string,
    id: string,
    keywords: [string],
    language: string,
    origin: [object],
    originId: string,
    published: number,
    summary: {
        content: string,
        direction: string,
    },
    title: string,
    unread: boolean,
}
export interface IDataItems {
    alternate: object,
    direction: string,
    id: string,
    items: IItems[],
    title: string,
    updated: number,
}
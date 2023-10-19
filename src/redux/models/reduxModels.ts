import e from 'express';
import { string } from 'yargs';

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

export interface CoinsData {
    data: [
        {
            coins: Coins[];
            stats: [];
        },
    ];
    status: string;
}
export interface Coins {
    '24hVolume': string;
    btcPrice: string;
    change: string;
    coinrankingUrl: string;
    color: string;
    iconUrl: string;
    listedAt: number;
    lowVolume: boolean;
    marketCap: string;
    name: string;
    price: string;
    rank: number;
    sparkline: [string];
    symbol: string;
    tier: number;
    uuid: string;
}
export interface QueryProps {
    pageOffset: number;
    name: string;
    value: number;
}

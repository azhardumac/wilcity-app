export interface Item {
    title: string;
    updatedAt: string;
    id: number;
    status: 'publish' | 'draft';
}
export interface ResGetListItems {
    status: 'success';
    code?: 200;
    items: Item[];
    maxPages: number;
    next?: {
        endpoint: string;
        filters: {
            page: number;
            postsPerPage: number;
        };
    };
}

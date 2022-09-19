import { ReactNode } from 'react';
export interface GridProps<T extends any> {
    data: T[];
    column?: number;
    gap?: number;
    renderItem: (item: T, index: number) => ReactNode;
    keyExtractor?: (item: T, index: number) => string;
}
export default function Grid<T extends any>({ data, column, gap, renderItem, keyExtractor }: GridProps<T>): JSX.Element;

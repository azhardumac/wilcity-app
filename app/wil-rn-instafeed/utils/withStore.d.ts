import React, { ComponentType, HTMLAttributes } from 'react';
import { CreateStateInterface, UnSubscribe } from './createState';
interface MapStateDefault {
    getState: CreateStateInterface['getState'];
    subscribe: CreateStateInterface['subscribe'];
}
declare function withStore<T extends Record<string, MapStateDefault>>(mapStateToProps: T): <P extends object = {}>(Component: React.ComponentType<P & React.HTMLAttributes<HTMLElement>>) => {
    new (props: P): {
        unsubs: UnSubscribe[];
        componentWillUnmount(): void;
        handleSubscribe: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<P, Exclude<keyof P, keyof T>>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, Exclude<keyof P, keyof T>>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<P, Exclude<keyof P, keyof T>>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withStore;

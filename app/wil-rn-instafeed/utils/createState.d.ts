declare type Listener<S = any> = (state: S) => void;
declare type CompareFunc<S = any> = (prevState: S, state: S) => boolean;
interface Config {
    useLocalStorage: boolean;
    stateName: string;
}
export declare type UnSubscribe = () => void;
export interface CreateStateInterface<S = any> {
    getState(): S;
    setState<K extends keyof S>(state: S | Pick<S, K> | ((prevState: Readonly<S>) => S | Pick<S, K>), actionName: string): void;
    subscribe(listener: Listener<S>): UnSubscribe;
    shouldUpdate(compareFunc: CompareFunc<S>): void;
}
export declare class CreateState<S extends any = any> implements CreateStateInterface<S> {
    private state;
    private prevState;
    private listeners;
    private config;
    private compareFunc;
    constructor(initialState: S, config?: Config);
    private updateStateFromLocalStorage;
    private callListeners;
    private callCompare;
    getState: () => S;
    setState: <K extends keyof S>(state: S | Pick<S, K> | ((prevState: Readonly<S>) => S | Pick<S, K>)) => (actionName?: string) => void;
    subscribe: (listener: Listener<S>) => () => void;
    shouldUpdate: (compareFunc: CompareFunc<S>) => void;
}
export default function createState<S>(initialState: S, config?: Config): CreateState<S>;
export {};

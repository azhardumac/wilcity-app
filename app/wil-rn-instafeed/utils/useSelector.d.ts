import { CreateStateInterface } from './createState';
interface MapStateDefault {
    getState: CreateStateInterface['getState'];
    subscribe: CreateStateInterface['subscribe'];
}
export default function useSelector<T extends MapStateDefault>(state: T): ReturnType<T["getState"]>;
export {};

import { Instagram } from "../../api/Instagram";
export interface AppStore {
    [key: string]: Partial<{
        isLoading: boolean;
        message: string;
        posts: Instagram['posts'];
        profile: Instagram['profile'];
        prevTimestamp: number;
    }>;
}
declare const appStore: {
    getState: () => AppStore;
    subscribe: (listener: (state: AppStore) => void) => () => void;
    getInstagramRequest: (endpoint: string, callback?: (() => void) | undefined) => Promise<void>;
};
export default appStore;

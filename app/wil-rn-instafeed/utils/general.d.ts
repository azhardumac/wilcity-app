import { AppStore } from "../containers/store/appStore";
import { Setting } from "../types";
export declare const getColumn: (setting?: Setting | undefined) => number;
export declare const getRow: (setting?: Setting | undefined) => number;
export declare const getGap: (setting?: Setting | undefined) => number;
export declare const getInstaGridData: (instaSection: AppStore[0], row: number, column: number) => import("../api/Instagram").InstaItem[];
export declare type ItemReturnType<T> = T & {
    index: number;
};
export declare function splitCarouselData<T>(data: T[], numCol: number, numRow: number): ItemReturnType<T>[][];

import * as CSS from 'csstype';
import { EditItemValueChange } from './resType/ListFieldsEdit';
export declare type CSSProperties = CSS.Properties<string | number>;
export interface InstaCardProps {
    imageSrc: string;
    avatarSrc: string;
    authorName: string;
    text: string;
    like: number;
    comment: number;
    imageRatioPercent?: string;
    imageAlt?: string;
    hashtags?: string[];
    onClick?: (event: MouseEvent) => void;
    linkColor?: string;
    textColor?: string;
    overlayColorGradient?: {
        color1: string;
        color2?: string;
    };
    usePostMessage?: boolean;
    isMobile: boolean;
    itemHeight?: number;
}
export declare type Setting = Omit<EditItemValueChange, 'collapse' | 'status' | 'tabs_row_column' | 'color_collapse'> & {
    id: string | number;
    slot_data_id: string;
};
export declare type Settings = Setting[];

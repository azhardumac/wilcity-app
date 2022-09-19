export interface DisplayResource {
    config_width: number;
    config_height: number;
    src: string;
}
export interface Dimentions {
    height: number;
    width: number;
}
export interface SidecarItem {
    node: {
        id: string;
        shortcode: string;
        commenter_count: number;
        dimensions: Dimentions;
        display_url: string;
        display_resources: DisplayResource[];
        is_video: boolean;
    };
}
export declare type Sidecar = SidecarItem[];

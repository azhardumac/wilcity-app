export interface InstaDate {
    date: string;
    timezone_type: number;
    timezone: string;
}
export interface InstaThumbs {
    src: string;
    config_width: number;
    config_height: number;
}
export interface GalleryItemThumb {
    src: string;
}
export interface GalleryItem {
    id: number;
    shortcode: string;
    thumbnails: GalleryItemThumb[];
    video: boolean;
    igtv: boolean;
    videoViewCount: number;
    accessibilityCaption: string;
    hashtags: string[];
    videoUrl: string;
}
export interface InstaItem {
    id: number;
    shortcode: string;
    height: number;
    width: number;
    thumbnailSrc: string;
    link: string;
    date: InstaDate;
    displaySrc: string;
    caption: string;
    comments: number;
    likes: number;
    thumbnails: InstaThumbs[];
    video: boolean;
    igtv: boolean;
    videoViewCount: number;
    hashtags: string[];
    accessibilityCaption: string;
    gallery?: GalleryItem[];
    videoUrl?: string;
}
export interface InstaProfile {
    id: number;
    userName: string;
    fullName: string;
    biography: string;
    followers: number;
    following: number;
    profilePicture: string;
    externalUrl: string;
    private: boolean;
    verified: boolean;
    mediaCount: number;
    hasMoreMedias: boolean;
    endCursor: string;
}
export interface Instagram {
    posts: InstaItem[];
    profile?: InstaProfile;
}

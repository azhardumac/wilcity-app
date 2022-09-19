import { GalleryItem } from "../../api/Instagram";
import React from 'react';
export interface ImageCardFeaturedProps {
    imageSrc: string;
    isVideo: boolean;
    videoUrl: string;
    gallery?: GalleryItem[];
    height: number;
    width: number;
}
declare const _default: React.NamedExoticComponent<ImageCardFeaturedProps>;
export default _default;

import React from 'react';
import { InstaCardHeaderProps } from './InstaCardHeader';
import { InstaCardContentProps } from './InstaCardContent';
import { InstaCardActionsProps } from './InstaCardActions';
import { ImageCardFeaturedProps } from './ImageCardFeatured';
export interface InstaCardProps extends InstaCardHeaderProps, InstaCardActionsProps, InstaCardContentProps, Omit<ImageCardFeaturedProps, 'height' | 'width'> {
    imageWidth: number;
    imageHeight: number;
    shareButtonFacebook?: string;
    shareButtonMessenger?: string;
    shareButtonTwitter?: string;
    shareButtonEmail?: string;
    shareButtonCopylink?: string;
}
declare const _default: React.NamedExoticComponent<InstaCardProps>;
export default _default;

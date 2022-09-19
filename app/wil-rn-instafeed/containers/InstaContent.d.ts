import React from 'react';
import { Setting } from "../types";
import { AppStore } from './store/appStore';
export interface InstaContentProps {
    instaSection: AppStore[0];
    setting: Setting;
    slotId: string;
    useNavigation?: boolean;
    navigation?: any;
}
declare const _default: React.NamedExoticComponent<InstaContentProps>;
export default _default;

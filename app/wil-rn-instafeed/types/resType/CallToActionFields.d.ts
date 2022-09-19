export declare type SwitchValueType = 'enable' | 'disable';
export interface CallToActionFields {
    id: 'call_to_action';
    title: string;
    description: string;
    description_title: string;
    description_link: string;
    variation: 'settings';
    object_types: ['call_to_action'];
    fields: {
        btn_action_share_facebook: {
            name: string;
            id: 'btn_action_share_facebook';
            type: 'checkbox_text';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_share_twitter: {
            name: string;
            id: 'btn_action_share_twitter';
            type: 'checkbox_text';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_share_messenger: {
            name: string;
            id: 'btn_action_share_messenger';
            type: 'checkbox_text';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_share_email: {
            name: string;
            id: 'btn_action_share_email';
            type: 'checkbox_text';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_copylink: {
            name: string;
            id: 'btn_action_copylink';
            type: 'checkbox_text';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_follow: {
            name: string;
            id: 'btn_action_follow';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_share: {
            name: string;
            id: 'btn_action_share';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
        btn_action_loadmore: {
            name: string;
            id: 'btn_action_loadmore';
            frontend_type: 'checkbox_text';
            isExcludeFromCmb2: true;
            default: {
                status: SwitchValueType;
                text: string;
            };
        };
    };
    blockKey: 'call_to_action';
}

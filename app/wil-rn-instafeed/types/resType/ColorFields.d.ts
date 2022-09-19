export interface ColorFields {
    id: 'colors';
    title: string;
    description_title: string;
    description_link: string;
    description: string;
    variation: 'settings';
    object_types: ['colors'];
    fields: {
        color_collapse: {
            name: string;
            id: 'color_collapse';
            frontend_type: 'collapse';
            default_cb: {
                type: 'post_meta';
            };
            options: {
                post_card: 'Post Card';
                popup: 'Popup';
            };
            isExcludeFromCmb2: true;
            value: '';
        };
        overlay_gradient: {
            name: string;
            id: 'overlay_gradient';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            collapse_panel: 'post_card';
            frontend_type: 'color-gradient-picker';
            default: {
                color1: string;
                color2: string;
            };
            value: {
                color1: string;
                color2: string;
            };
        };
        text_color: {
            name: string;
            id: 'text_color';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'color-picker';
            collapse_panel: 'post_card';
            default: string;
            value: string;
        };
        link_color: {
            name: string;
            id: 'link_color';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'color-picker';
            default: string;
            collapse_panel: 'post_card';
            value: string;
        };
        overlay_gradient_popup: {
            name: string;
            id: 'overlay_gradient_popup';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            collapse_panel: 'popup';
            frontend_type: 'color-gradient-picker';
            default: {
                color1: string;
                color2: string;
            };
            value: {
                color1: string;
                color2: string;
            };
        };
        text_color_popup: {
            name: string;
            id: 'text_color_popup';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'color-picker';
            default: string;
            collapse_panel: 'popup';
            value: string;
        };
        link_color_popup: {
            name: string;
            id: 'link_color_popup';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'color-picker';
            default: string;
            collapse_panel: 'popup';
            value: string;
        };
        btn_close_color_popup: {
            name: string;
            id: 'btn_close_color_popup';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'color-picker';
            default: string;
            collapse_panel: 'popup';
            value: string;
        };
    };
    blockKey: 'colors';
}

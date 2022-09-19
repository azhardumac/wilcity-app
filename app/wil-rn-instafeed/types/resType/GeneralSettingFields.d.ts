export interface ReneralSettingsFields {
    id: 'section';
    title: string;
    description: string;
    description_title: string;
    description_link: string;
    variation: 'settings';
    object_types: ['insta_management'];
    fields: {
        title: {
            name: string;
            id: 'title';
            type: 'text';
            isExcludeFromCmb2: true;
            isRequired: true;
            default_cb: {
                type: 'post_param';
                target: 'post_title';
            };
            default: string;
            value: string;
        };
        status: {
            name: 'Status';
            id: 'status';
            type: 'select';
            frontend_type: 'switch';
            default_cb: {
                type: 'post_param';
                target: 'post_status';
            };
            options: {
                publish: 'Publish';
                draft: 'Draft';
            };
            isRequired: true;
            isExcludeFromCmb2: true;
            value: keyof ReneralSettingsFields['fields']['status']['options'];
            default: keyof ReneralSettingsFields['fields']['status']['options'];
        };
        insta_username: {
            name: string;
            id: 'insta_username';
            type: 'text';
            default_cb: {
                type: 'taxonomy';
                target: 'insta_users';
                isMultiple: false;
                field: 'slug';
            };
            isRequired: true;
            isExcludeFromCmb2: true;
            default: string;
            value: string;
        };
        collapse: {
            name: 'collapse';
            id: 'collapse';
            frontend_type: 'collapse';
            default_cb: {
                type: 'post_meta';
            };
            options: {
                template: 'Template';
                column_and_row: 'Column And Row';
                slider: 'Slider';
                post: 'Post card';
            };
            isExcludeFromCmb2: true;
            value: keyof ReneralSettingsFields['fields']['collapse']['options'];
        };
        tabs_row_column: {
            name: string;
            id: 'tabs_row_column';
            type: 'tabs';
            frontend_type: 'tabs';
            default_cb: {
                type: 'post_meta';
            };
            options: {
                desktop: 'Desktop';
                tablet: 'Tablet';
                mobile: 'Mobile';
            };
            isExcludeFromCmb2: true;
            collapse_panel: 'column_and_row';
            value: keyof ReneralSettingsFields['fields']['tabs_row_column']['options'];
        };
        template: {
            name: string;
            id: 'template';
            default_cb: {
                type: 'post_meta';
            };
            type: 'select';
            frontend_type: 'image-radio';
            options: {
                grid: 'Grid';
                slider: 'Slider';
                'grid-brick': 'Grid Brick';
            };
            optionImages: {
                grid: 'grid.png';
                slider: 'slider.png';
                'grid-brick': 'grid_brick.png';
            };
            collapse_panel: 'template';
            default: keyof ReneralSettingsFields['fields']['template']['options'];
            value: keyof ReneralSettingsFields['fields']['template']['options'];
        };
        number_of_columns_desktop: {
            name: string;
            id: 'number_of_columns_desktop';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'slider';
            variation: 'number';
            valueType: 'number';
            min: number;
            max: number;
            tabs_panel: 'desktop';
            parentRequired: {
                template: ['grid', 'slider'];
            };
            description: string;
            default: number;
            value: number;
        };
        number_of_rows_desktop: {
            name: string;
            id: 'number_of_rows_desktop';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'slider';
            variation: 'number';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'desktop';
            parentRequired: {
                template: ['grid', 'slider'];
            };
            description: string;
            value: number;
        };
        gap_desktop: {
            name: string;
            id: 'gap_desktop';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            frontend_type: 'slider';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'desktop';
            description: string;
            value: number;
        };
        brick_row_height_desktop: {
            name: string;
            id: 'brick_row_height_desktop';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            valueType: 'number';
            frontend_type: 'slider';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'desktop';
            parentRequired: {
                template: 'grid-brick';
            };
            description: string;
            value: number;
        };
        number_of_columns_tablet: {
            name: string;
            id: 'number_of_columns_tablet';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'slider';
            variation: 'number';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'tablet';
            parentRequired: {
                template: ['grid', 'slider'];
            };
            description: string;
            value: number;
        };
        number_of_rows_tablet: {
            name: string;
            id: 'number_of_rows_tablet';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'slider';
            variation: 'number';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'tablet';
            parentRequired: {
                template: ['grid', 'slider'];
            };
            description: string;
            value: number;
        };
        gap_tablet: {
            name: string;
            id: 'gap_tablet';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            frontend_type: 'slider';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'tablet';
            description: string;
            value: number;
        };
        brick_row_height_tablet: {
            name: string;
            id: 'brick_row_height_tablet';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            valueType: 'number';
            frontend_type: 'slider';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'tablet';
            parentRequired: {
                template: 'grid-brick';
            };
            description: string;
            value: number;
        };
        number_of_columns_mobile: {
            name: string;
            id: 'number_of_columns_mobile';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'slider';
            variation: 'number';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'mobile';
            parentRequired: {
                template: ['grid', 'slider'];
            };
            description: string;
            value: number;
        };
        number_of_rows_mobile: {
            name: string;
            id: 'number_of_rows_mobile';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            frontend_type: 'slider';
            variation: 'number';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'mobile';
            parentRequired: {
                template: ['grid', 'slider'];
            };
            description: string;
            value: number;
        };
        gap_mobile: {
            name: string;
            id: 'gap_mobile';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            frontend_type: 'slider';
            valueType: 'number';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'mobile';
            description: string;
            value: number;
        };
        brick_row_height_mobile: {
            name: 'Row Height';
            id: 'brick_row_height_mobile';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            valueType: 'number';
            frontend_type: 'slider';
            default: number;
            min: number;
            max: number;
            tabs_panel: 'mobile';
            parentRequired: {
                template: 'grid-brick';
            };
            description: string;
            value: number;
        };
        slider_autoplay: {
            name: string;
            id: 'slider_autoplay';
            type: 'radio';
            frontend_type: 'switch';
            default_cb: {
                type: 'post_meta';
            };
            options: {
                enable: 'enable';
                disable: 'disable';
            };
            valueType: 'bool';
            parentRequired: {
                template: 'slider';
            };
            collapse_panel: 'slider';
            default: keyof ReneralSettingsFields['fields']['slider_autoplay']['options'];
            value: keyof ReneralSettingsFields['fields']['slider_autoplay']['options'];
        };
        slider_delay: {
            name: string;
            id: 'slider_delay';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            valueType: 'number';
            frontend_type: 'slider';
            default: number;
            min: number;
            max: number;
            parentRequired: {
                template: 'slider';
            };
            collapse_panel: 'slider';
            value: number;
        };
        slider_speed: {
            name: string;
            id: 'slider_speed';
            default_cb: {
                type: 'post_meta';
            };
            type: 'text';
            variation: 'number';
            valueType: 'number';
            frontend_type: 'slider';
            default: number;
            min: number;
            max: number;
            parentRequired: {
                template: 'slider';
            };
            collapse_panel: 'slider';
            value: number;
        };
        post_template: {
            name: string;
            id: 'post_template';
            type: 'select';
            frontend_type: 'image-radio';
            default_cb: {
                type: 'post_param';
                target: 'post_status';
            };
            options: {
                style1: 'Style 1';
                style2: 'style 2';
                style3: 'style 3';
            };
            optionImages: {
                style1: 'style1.png';
                style2: 'style2.png';
                style3: 'style3.png';
            };
            isRequired: true;
            collapse_panel: 'post';
            default: keyof ReneralSettingsFields['fields']['post_template']['options'];
            value: keyof ReneralSettingsFields['fields']['post_template']['options'];
        };
        click_item_action: {
            name: string;
            id: 'click_item_action';
            type: 'select';
            default_cb: {
                type: 'post_param';
                target: 'post_status';
            };
            options: {
                open_modal: 'Open modal';
                navigate_instagram: 'Navigate to Instagram';
                none: 'None';
            };
            isRequired: true;
            collapse_panel: 'post';
            description: string;
            default: keyof ReneralSettingsFields['fields']['click_item_action']['options'];
            value: keyof ReneralSettingsFields['fields']['click_item_action']['options'];
        };
        modal_view_mode: {
            name: string;
            id: 'modal_view_mode';
            type: 'select';
            default_cb: {
                type: 'post_param';
                target: 'post_status';
            };
            options: {
                slider: 'Slider';
                scroll: 'Scroll';
            };
            isRequired: true;
            collapse_panel: 'post';
            parentRequired: {
                click_item_action: 'open_modal';
            };
            description: string;
            value: keyof ReneralSettingsFields['fields']['modal_view_mode']['options'];
            default: keyof ReneralSettingsFields['fields']['modal_view_mode']['options'];
        };
    };
    blockKey: 'general_settings';
}

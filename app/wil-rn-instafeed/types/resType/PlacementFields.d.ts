export interface PlacementFields {
    id: 'placement';
    title: string;
    description_title: string;
    description_link: string;
    description: string;
    variation: 'settings';
    object_types: ['placement'];
    fields: {
        display_on_pages: {
            name: string;
            desc: string;
            id: 'display_on_pages';
            type: 'multicheck';
            default_cb: {
                type: 'post_meta';
            };
            options: {
                'template-index': 'Home Page';
                'template-blog': 'All Blog pages';
                'template-article': 'All Article pages';
                'template-collection': 'All Collection pages';
                'template-list-collections': 'All Collections pages';
                'template-product': 'All Product pages';
                'template-page': 'All Page pages';
                everywhere: 'Every where';
            };
            default: (keyof PlacementFields['fields']['display_on_pages']['options'])[];
            value: (keyof PlacementFields['fields']['display_on_pages']['options'])[];
        };
        position: {
            name: string;
            id: 'position';
            type: 'multicheck';
            default_cb: {
                type: 'post_meta';
            };
            options: {
                bottom: 'Bottom';
                top: 'Top';
            };
            default: (keyof PlacementFields['fields']['position']['options'])[];
            value: (keyof PlacementFields['fields']['position']['options'])[];
        };
    };
    blockKey: 'placement';
}

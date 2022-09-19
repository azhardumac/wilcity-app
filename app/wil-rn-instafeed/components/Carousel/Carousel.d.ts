import { ReactNode } from 'react';
import { FlatListProps, ListRenderItemInfo } from 'react-native';
export interface CarouselProps<ItemT extends any> extends Omit<FlatListProps<ItemT>, 'renderItem'> {
    renderItem?: (info: ListRenderItemInfo<ItemT>, isActive: boolean) => ReactNode;
}
declare const Carousel: <ItemT extends unknown>({ data, onMomentumScrollEnd, keyExtractor, renderItem, ...rest }: CarouselProps<ItemT>) => JSX.Element;
export default Carousel;

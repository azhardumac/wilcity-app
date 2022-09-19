import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
export declare type Size = 'small' | 'medium' | 'large';
export declare type Radius = 'default' | 'round' | 'pill';
export interface ButtonProps extends TouchableOpacityProps {
    children?: ReactNode;
    borderRadius?: Radius;
    size?: Size;
    block?: boolean;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: 1 | 2 | 3;
    loading?: boolean;
    loadingColor?: string;
    LoadingComponent?: ReactNode;
}
declare function Button({ children, borderRadius, size, block, activeOpacity, backgroundColor, color, borderWidth, borderColor, loading, loadingColor, LoadingComponent, style, ...rest }: ButtonProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Button>;
export default _default;

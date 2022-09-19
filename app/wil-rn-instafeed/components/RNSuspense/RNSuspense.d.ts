import { PureComponent, ReactNode } from 'react';
interface RNSuspenseProps {
    children: ReactNode;
    fallback: ReactNode;
}
interface RNSuspenseState {
    isLoaded: boolean;
}
declare type DefaultProps = Pick<RNSuspenseProps, 'fallback'>;
export default class RNSuspense extends PureComponent<RNSuspenseProps, RNSuspenseState> {
    static defaultProps: DefaultProps;
    _req: number;
    constructor(props: RNSuspenseProps);
    componentWillUnmount(): void;
    _handleLoaded: () => void;
    render(): {} | null | undefined;
}
export {};

import { FC } from 'react';
import { InstaContentProps } from './InstaContent';
export interface ModalInstaProps extends InstaContentProps {
    slotId: string;
}
declare const ModalInsta: FC<ModalInstaProps>;
export default ModalInsta;

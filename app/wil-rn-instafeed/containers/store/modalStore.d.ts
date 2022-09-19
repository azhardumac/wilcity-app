export interface ModalStore {
    [slotId: string]: {
        isVisible: boolean;
        isVisibleDone: boolean;
        idActive: string;
        indexActive: number;
    };
}
declare const modalStore: {
    getState: () => ModalStore;
    subscribe: (listener: (state: ModalStore) => void) => () => void;
    handleOpenModal: (id: string, slotId: string, index: number) => void;
    handleCloseModal: (slotId: string) => void;
};
export default modalStore;

import React from 'react';
import { Modal, StatusBar } from 'react-native';
import useSelector from "../utils/useSelector";
import InstaContent from './InstaContent';
import modalStore from './store/modalStore';
var ModalInsta = function (_a) {
    var _b;
    var instaSection = _a.instaSection, setting = _a.setting, slotId = _a.slotId;
    var modalSelect = useSelector(modalStore);
    return (React.createElement(Modal, { visible: !!((_b = modalSelect[slotId]) === null || _b === void 0 ? void 0 : _b.isVisible), animationType: "slide", transparent: true },
        React.createElement(StatusBar, { hidden: true }),
        React.createElement(InstaContent, { instaSection: instaSection, setting: setting, slotId: slotId })));
};
export default ModalInsta;

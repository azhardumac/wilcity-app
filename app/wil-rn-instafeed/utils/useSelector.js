import { useState, useEffect } from 'react';
export default function useSelector(state) {
    var _a = useState(state.getState()), reactState = _a[0], setReactState = _a[1];
    var handleSubscribe = function () {
        setReactState(state.getState());
    };
    useEffect(function () {
        var unsub = state.subscribe(handleSubscribe);
        return function () {
            unsub();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return reactState;
}

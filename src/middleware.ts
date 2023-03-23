import { AnyAction, isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

export const rtkQueryLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
    // function kiểm tra xem 1 action có phải là 1 action reject không
    if (isRejectedWithValue()) {
        // chỉ có lỗi từ server mới có thể chạy vào trong đây
        if (action.payload) {
            // xử lý key và in ra lỗi
            console.log(action);
        }
    }

    return next(action);
};

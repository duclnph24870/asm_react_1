import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export function isFetchBaseQueyError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error !== null && 'status' in error;
}

/**
 * function có tác dụng kiểm tra logic và ép kiểu của 1 biến về 1 kiểu xác định khi function chạy xong
 * return là để kiểm tra logic
 * : error is FetchBaseQueryError để khi chạy xong error sẽ được gán kiểu về kiểu FetchBaseQueryError
 */

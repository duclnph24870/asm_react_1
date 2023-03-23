import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { isFetchBaseQueyError } from '../helpers';
import { describe, expect, it } from 'vitest';

// describe dùng để mô tả tập howpk các ngữ cảnh hoặc 1 đơn vị cần test: ví dụ function, componnet
describe('isFetchBaseQueyError', () => {
    // it dùng để ghi chú trường hợp cần test
    it('isFetchBaseQueyError trả về true và error type phải là FetchBaseQueryError', () => {
        const error: FetchBaseQueryError | SerializedError | undefined = {
            status: 404,
            data: { message: 'Not found' },
        };

        // expect dùng để mong đợi giá trị trả về
        expect(isFetchBaseQueyError(error)).toBe(true);
    });
});

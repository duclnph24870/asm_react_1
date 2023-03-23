### Các lưu ý về giá trị trong khi sử dụng hook được tạo từ rtk query api

-   data: dữ liệu lấy về từ server
-   isLoading: chỉ dành cho lần fetch đầu tiên
-   isfetching: là cho mỗi lần gọi api
-   refetch: function kích hoạt thì rtk query sẽ call lại api

### Cách thức hoạt động của rtk query khi call api

-   B1: bắn 1 action .../config/middlewareRegistered để đăng ký middleware
-   B2: bắn action ../executeQuery/pending khi bắt đầu gọi api và để trạng thái là 'pending';
-   B3: bắn action ../executeQuery/fulfilled được gọi khi dữ liệu từ server được lấy về hoàn thành
-   action "internalSubscriptions/subscriptionsUpdated" sẽ được gửi đi khi có sự thay đổi dữ liệu từ server và yêu cầu cập nhập lại state
-   removeQueryResult action sẽ được bắn ra khi cach bị xóa đi sau 60s (mặc định)

### Cách thức render lại của tag

-   Khi gọi method POST được gọi xong (chạy hook) thì invalidatesTags của nó sec trả về 1 cái array gồm type và id
-   Khi type và id mà invalidatesTags trả về trùng với type và id của providesTags của endpoints nào thì enpoint đó sẽ được gọi lại (call api lại)

### Các đối số

-   bulid.query<type response, type đối số truyền vào>() (useTestQuery(abc: đối số truyền vào))

### Các tính năng khác

-   polling: gọi api lại sau 1 khoảng thời gian nhất định

import { useGetProductQuery, useRemoveProductMutation } from '../services/product.api';
import { Product } from '../interface/product';
import { useDispatch } from 'react-redux';
import { setProduct } from '../slices/productSlice';
import { useNavigate } from 'react-router-dom';

function Products() {
    const { isFetching, data, error } = useGetProductQuery();
    const [deleteProduct, result] = useRemoveProductMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleEdit = (product: Product) => {
        dispatch(setProduct(product));
        navigate('/edit');
    };

    const handleDelete = async (id: any) => {
        try {
            await deleteProduct({ id });
            alert('Xóa thành công');
        } catch (error) {
            console.log('delete product error', error);
        }
    };

    return (
        <div className="mt-3 rounded-lg bg-white p-4 shadow">
            <h1 className="mb-3 text-center text-4xl font-bold text-blue-600">List product</h1>
            <ul>
                {isFetching && data ? (
                    <>Loading ...</>
                ) : (
                    data?.map((item) => (
                        <li key={item.id}>
                            {item.id} - {item.title} - {item.description}
                            <button
                                className="mx-3 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
                                onClick={() => handleEdit(item)}
                            >
                                Sửa
                            </button>
                            <button
                                className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
                                onClick={() => handleDelete(item.id)}
                            >
                                Xóa
                            </button>
                        </li>
                    ))
                )}

                {data?.length === 0 && <h2>Product rỗng</h2>}
            </ul>
        </div>
    );
}

export default Products;

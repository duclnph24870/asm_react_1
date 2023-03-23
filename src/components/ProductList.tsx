import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Product } from 'interface/product';
import { useMemo, useState } from 'react';
import { isFetchBaseQueyError } from '../utils/helpers';
import { useAddProductMutation, useGetProductsQuery } from '../services/product.service';

function ProductList() {
    const { data, isFetching, isLoading, refetch } = useGetProductsQuery();
    const [addProduct, addProductResult] = useAddProductMutation();
    const [formData, setFormData] = useState<Omit<Product, 'id'>>({
        title: '',
        description: '',
    });

    const handleDelete = () => {
        alert('xóa');
    };

    const handleEdit = () => {
        alert('Sửa');
    };

    // hứng lỗi trả về từ server
    const errorData = useMemo(() => {
        const error = addProductResult.error;

        if (isFetchBaseQueyError(error)) {
            return error;
        }
    }, [addProductResult]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addProduct(formData).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h1>Product lisst</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />{' '}
                <br />
                <input
                    type="text"
                    placeholder="mô tả"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <button type="submit">Thêm</button>
            </form>
            <div className="mt-3">
                <ul>
                    {!isFetching &&
                        data?.map((item) => (
                            <li key={item.id}>
                                {item.title} <button onClick={handleDelete}>Xóa</button>{' '}
                                <button onClick={handleEdit}>Sửa</button>
                            </li>
                        ))}
                    <li>{}</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductList;

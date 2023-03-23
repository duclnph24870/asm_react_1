import { useForm } from 'react-hook-form';
import { useEditProductMutation } from '../services/product.api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function ProductEdit() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const [updateProduct, result] = useEditProductMutation();
    const productEdit = useSelector((state: RootState) => state.product.products);

    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            const result = await updateProduct({ id: productEdit?.id, body: data });

            alert('Sửa thành công');

            navigate('/list');
        } catch (error) {
            console.log('create product failed' + error);
        }
    };
    return (
        <div>
            <h1 className="my-3 text-center text-4xl font-bold text-blue-600">Edit product</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 flex rounded-lg bg-white p-4 p-6 shadow [&>input]:mt-3"
                style={{ flexDirection: 'column' }}
            >
                <input
                    className="rounded-md border py-2 px-4 focus:outline-none"
                    defaultValue={productEdit?.title}
                    {...register('title', { required: true })}
                    placeholder="title"
                />
                {errors.title && <span>Trường này là bắt buộc</span>}

                <input
                    className="rounded-md border py-2 px-4 focus:outline-none"
                    defaultValue={productEdit?.description}
                    {...register('description', { required: true })}
                    placeholder="description"
                />
                {errors.description && <span>Trường này là bắt buộc</span>}

                <button className="mt-3 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ProductEdit;

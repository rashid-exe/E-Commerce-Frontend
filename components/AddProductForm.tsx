import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  price: z.number().positive('Price must be positive'),
  description: z.string().min(10, 'Description too short'),
  category: z.string().min(3, 'Category must be valid'),
  image: z.string().url('Must be a valid image URL'),
});

type ProductInput = z.infer<typeof productSchema>;

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductInput) => {
    console.log('Simulated submission:', data);
    alert('Product submitted successfully!');
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 border rounded shadow bg-white mt-8"
    >
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      <input
        {...register('title')}
        placeholder="Title"
        className="border p-2 w-full mb-2"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

      <input
        type="number"
        step="0.01"
        {...register('price', { valueAsNumber: true })}
        placeholder="Price"
        className="border p-2 w-full mb-2"
      />
      {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

      <textarea
        {...register('description')}
        placeholder="Description"
        className="border p-2 w-full mb-2"
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

      <input
        {...register('category')}
        placeholder="Category"
        className="border p-2 w-full mb-2"
      />
      {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

      <input
        {...register('image')}
        placeholder="Image URL"
        className="border p-2 w-full mb-2"
      />
      {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
}
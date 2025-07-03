import { Product } from '@/types';
import { useStore } from '@/store/useStore';

export default function ProductCard({ product }: { product: Product }) {
  const setSelectedProduct = useStore((state) => state.setSelectedProduct);

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="border p-2 rounded shadow cursor-pointer hover:shadow-lg transition"
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-sm font-bold mt-2 line-clamp-2">{product.title}</h2>
      <p className="text-xs">{product.price} USD</p>
    </div>
  );
}
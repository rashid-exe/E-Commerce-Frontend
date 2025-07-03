import { useQuery } from '@tanstack/react-query';
import { getProducts, getCategories } from '@/lib/api';
import { useStore } from '@/store/useStore';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import Navbar from '@/components/Navbar';

export default function Home() {
  const { search, category, setSearch, setCategory } = useStore();
  const { data: products = [], isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: getProducts,
});

  const { data: categories = [] } = useQuery({
  queryKey: ['categories'],
  queryFn: getCategories,
});

  const filtered = products.filter((p: Product) =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  );

  return (
    <>
    <Navbar />
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border p-2 mb-4 w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat: string) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductModal />
     
    </div>
    </>
  );
}

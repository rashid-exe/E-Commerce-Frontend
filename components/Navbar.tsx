import { useStore } from '@/store/useStore';
import { useRouter } from 'next/router';

export default function Navbar() {
  const cart = useStore((state) => state.cart);
  const router = useRouter();

  return (
    <nav className=" bg-amber-50 shadow px-6 py-4 flex justify-between items-center sticky top-0 z-30">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push('/')}>🛍️ MyStore</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Cart: {cart.length}</span>
        <button
          onClick={() => router.push('/add')}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
        >
          ➕ Add Product
        </button>
      </div>
    </nav>
  );
}
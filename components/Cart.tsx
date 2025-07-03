import { useStore } from '@/store/useStore';
import { useState } from 'react';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50"
      >
        🛒<span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1">{cart.length}</span>
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-white border rounded shadow-md p-4 w-72 z-40">
          <h3 className="font-bold mb-2">Shopping Cart</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {cart.map((item, i) => (
                <li key={i} className="border p-2 rounded text-sm">
                  {item.title} - ${item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

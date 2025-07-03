import { useStore } from '@/store/useStore';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useStore();
  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-md w-full relative">
        <button
          type="button"
          onClick={() => setSelectedProduct(null)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <img src={selectedProduct.image} alt={selectedProduct.title} className="h-60 mx-auto object-contain" />
        <h2 className="text-lg font-bold mt-2">{selectedProduct.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{selectedProduct.description}</p>
        <p className="text-md font-semibold mt-2">{selectedProduct.price} USD</p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(selectedProduct);
            setSelectedProduct(null);
          }}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

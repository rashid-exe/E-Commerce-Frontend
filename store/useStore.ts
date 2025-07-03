import { create } from 'zustand';
import { Product } from '@/types';

interface StoreState {
  search: string;
  category: string;
  cart: Product[];
  selectedProduct: Product | null;
  setSearch: (val: string) => void;
  setCategory: (val: string) => void;
  addToCart: (product: Product) => void;
  setSelectedProduct: (product: Product | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  search: '',
  category: '',
  cart: [],
  selectedProduct: null,
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  addToCart: (product) => {
    console.log('Adding product to cart:', product);
    set((state) => {
      const updatedCart = [...state.cart, product];
      console.log('Updated cart:', updatedCart);
      return { cart: updatedCart };
    });
  },
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

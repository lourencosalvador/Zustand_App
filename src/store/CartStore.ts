import { create } from "zustand";


// Buscando de uma API
const initialItem = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20.99 },
    { id: 3, name: "Product 3", price: 40.80 }
]

type Item = {
  id: number;
  name: string;
  price: number;
};

type CartStore = {
  cart: Item[];
  addCart: (item: Item) => void;
  removeCart: (id: number) => void;
  availableItems: Item[]
};

// o Hook para adicionar    

export const useCartstore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItem,
    addCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeCart: (id) => 
    set((state) => ({cart: state.cart.filter((item) => item.id !== id)}))
  };
});
 
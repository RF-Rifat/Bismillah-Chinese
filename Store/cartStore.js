import create from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (i) => i._id === item._id
      );
      if (existingItemIndex !== -1) {
        const newCartItems = [...state.cartItems];
        newCartItems[existingItemIndex] = {
          ...newCartItems[existingItemIndex],
          quantity: (newCartItems[existingItemIndex].quantity || 1) + 1,
        };
        return { cartItems: newCartItems };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    });
  },
  removeFromCart: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== itemId),
    }));
  },
  decrementQuantity: (itemId) => {
    set((state) => {
      const newCartItems = state.cartItems
        .map((item) =>
          item._id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return { cartItems: newCartItems };
    });
  },
  increaseQuantity: (itemId) => {
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item._id === itemId
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
      return { cartItems: newCartItems };
    });
  },
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;

import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
const loadInitialState = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {
      cartItems: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
      loading: false,
      error: null,
      paymentStatus: null
    };
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return {
      cartItems: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
      loading: false,
      error: null,
      paymentStatus: null
    };
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadInitialState(),
  reducers: {
    setCartItems: (state, action) => {
      // Handle case where action.payload might be null or undefined
      if (!action.payload) {
        state.cartItems = [];
        state.subtotal = 0;
        state.shipping = 0;
        state.total = 0;
        return;
      }

      state.cartItems = action.payload.items || [];
      state.subtotal = action.payload.items?.reduce((sum, item) => {
        const price = item.variant.discountPrice && 
                     item.variant.discountPrice > 0 && 
                     item.variant.discountPrice < item.variant.price 
                       ? item.variant.discountPrice 
                       : item.variant.price;
        return sum + (price * item.quantity);
      }, 0) || 0;
      state.shipping = action.payload.shipping || 0;
      state.total = state.subtotal + state.shipping;
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify({
        cartItems: state.cartItems,
        subtotal: state.subtotal,
        shipping: state.shipping,
        total: state.total,
        loading: state.loading,
        error: state.error,
        paymentStatus: state.paymentStatus
      }));
    },
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
      localStorage.setItem('cart', JSON.stringify({
        ...state,
        paymentStatus: action.payload
      }));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.subtotal = 0;
      state.shipping = 0;
      state.total = 0;
      state.loading = false;
      state.error = null;
      state.paymentStatus = null;
      localStorage.removeItem('cart');
    },
    updateCartPrices: (state, action) => {
      state.cartItems = action.payload;
      state.subtotal = action.payload.reduce((sum, item) => sum + item.finalPrice, 0);
      state.total = state.subtotal + state.shipping;
      
      localStorage.setItem('cart', JSON.stringify({
        cartItems: state.cartItems,
        subtotal: state.subtotal,
        shipping: state.shipping,
        total: state.total,
        loading: state.loading,
        error: state.error,
        paymentStatus: state.paymentStatus
      }));
    }
  }
});

export const { 
  setCartItems, 
  setLoading, 
  setError, 
  clearCart,
  updateCartPrices,
  setPaymentStatus 
} = cartSlice.actions;

export default cartSlice.reducer;
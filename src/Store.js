import { configureStore, createSlice } from "@reduxjs/toolkit";

/* ===================== CART SLICE ===================== */
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((i) => i.id == action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    decreaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (!item) return state;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((i) => i.id !== action.payload.id);
      }
    },

    clearCart: () => [],
  },
});

/* ===================== COUPON SLICE ===================== */
const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    code: "",
    discount: 0,
    applied: false,
    message: "",
  },
  reducers: {
    applyCoupon: (state, action) => {
      const entered = action.payload.toLowerCase();
      if (entered === "praveen10") {
        state.code = entered;
        state.discount = 10;
        state.applied = true;
        state.message = "Coupon Applied! 10% Off!";
      } else {
        state.code = "";
        state.discount = 0;
        state.applied = false;
        state.message = "Invalid Coupon!";
      }
    },

    setDiscount: (state, action) => {
      state.discount = action.payload;
      state.applied = true;
      state.message = `Discount Applied! ${action.payload}% OFF`;
    },
  },
});

/* ===================== LOCATION SLICE ===================== */
const locationSlice = createSlice({
  name: "location",
  initialState: "",
  reducers: {
    setLocation: (state, action) => action.payload, // store location string
  },
});

/* ===================== EXPORT ACTIONS ===================== */
export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const { applyCoupon, setDiscount } = couponSlice.actions;

export const { setLocation } = locationSlice.actions;

/* ===================== STORE ===================== */
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,      // Cart state
    coupon: couponSlice.reducer,  // Coupon state
    location: locationSlice.reducer, // Location state added
  },
});

export default store;

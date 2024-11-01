import { configureStore, createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'tomato', price: 200.5 },
            { name: 'potato', price: 100.8 }
        ],
        nonveg: [
            { name: 'chicken', price: 2000.5 },
            { name: 'mutton', price: 1100.8 }
        ]
    },
    reducers: {}
});


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1; 
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            
        },
        increament:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
        
        },
        decreament:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1)
            {
                item.quantity-=1;
            }
            else{
                return state.filter(item=>item.name)==action.payload.name;
        
       
            }
            return state; // Return the modified state
        
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
           
        }
    },
})





const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer 
    }
});


export const { addTocart,increament,decreament,remove} = cartSlice.actions;
export default store;

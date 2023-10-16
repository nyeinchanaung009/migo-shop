import axios from 'axios'

export default {
    state : {
        products : [],
        categories : [],
        detail : {},
        favItems : localStorage.getItem('myfav') ? JSON.parse(localStorage.getItem('myfav')) : [],
        similar : [],
        cart : [],
        totalprice : 0,
        foundproducts : [],
        order : []
    },
    getters : {
        myProducts(state){
            return state.products
        },
        categories(state){
            return state.categories
        },
        myFavItems(state){
            return state.favItems
        },
        detail(state){
            return state.detail
        },
        similars(state){
            return state.similar
        },
        mycart(state){
            return state.cart
        },
        totalprices(state){
            return state.totalprice
        },
        foundproducts(state){
            return state.foundproducts
        },
        orders(state){
            return state.order
        }
    },
    mutations : {
        get_products(state,data){
            state.products = data;
        },
        get_categories(state,data){
            state.categories = data;
        },
        get_detail(state,data){
            state.detail = data;
        },
        get_similar(state,{id,data}){
            const fdata = data.filter(val => val.id != id);
            state.similar = fdata;
        },
        add_to_cart(state,item){
            const ids = state.cart.map(val => val.id);
            if(ids.includes(item.id)){
                state.cart.map(val => val.id == item.id ? val.qty++ : null);
            }else{
                state.cart = [...state.cart,{...item,qty:1}];
            }
        },
        reduce_qty(state,id){
            state.cart.map(val => val.id == id && val.qty > 1 ? val.qty-- : null);
        },
        add_qty(state,id){
            state.cart.map(val => val.id == id ? val.qty++ : null);
        },
        remove_cart(state,id){
            state.cart = state.cart.filter(val => val.id != id);
        },
        calculate_total(state){
            let total = 0;
            state.cart.map(val => total += val.price * val.qty);
            state.totalprice = total;
        },
        toggle_fav(state,item){
            const ids = state.favItems.map(val => val.id);
            if(ids.includes(item.id)){
                const res = state.favItems.filter(val => val.id != item.id);
                state.favItems = res;
                localStorage.setItem('myfav',JSON.stringify(res));
            }
            else{
                const res = [...state.favItems,item];
                state.favItems = res;
                localStorage.setItem('myfav',JSON.stringify(res));
            }
        },
        search_product(state,data){
            state.foundproducts = data;
        },
        take_order(state){
            state.order = [...state.order,...state.cart];
            state.cart = [];
        }
    },
    actions : {
        async getProducts(context,payload){
            const res = await axios.get(`https://dummyjson.com/products?limit=25&skip=${(payload * 25) - 25}`);
            context.commit('get_products',res.data.products);
        },
        async getCategories(context){
            const res = await axios.get('https://dummyjson.com/products/categories');
            context.commit('get_categories',res.data);
        },
        async getDetail(context,payload){
            const res = await axios.get('https://dummyjson.com/products/' + payload);
            context.commit('get_detail',res.data);
        },
        async getSimilar(context,payload){
            const res = await axios.get('https://dummyjson.com/products/category/'+payload.cat);
            context.commit('get_similar',{id:payload.id,data:res.data.products});
        },
        addToCart(context,payload){
            context.commit('add_to_cart',payload);
        },
        reduceQty(context,payload){
            context.commit('reduce_qty',payload);
        },
        addQty(context,payload){
            context.commit('add_qty',payload);
        },
        removeCart(context,payload){
            context.commit('remove_cart',payload);
        },
        calculateTotal(context){
            context.commit('calculate_total');
        },
        toggleFav(context,payload){
            context.commit('toggle_fav',payload);
        },
        async searchProduct(context,{type,data}){
            if(type == 'cat'){
                const res = await axios.get('https://dummyjson.com/products/category/'+data);
                context.commit('search_product',res.data.products);
            }else{
                const res = await axios.get('https://dummyjson.com/products/search?q='+data);
                context.commit('search_product',res.data.products);
            }
        },
        takeOrder(context){
            context.commit('take_order');
        }
    }
}
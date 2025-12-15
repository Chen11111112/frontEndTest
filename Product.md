import API from '../api/api'; 
import { Product, CheckoutItem, CheckoutResponse } from '../types/ProductTypes';
import { AxiosResponse } from 'axios';

# https://frontend-practice.ntubimdbirc.tw
const BASE_URL = '/practice/api/products';

const ProductAPI = {
    // 1. 載入商品資料
    'getProducts': 

    // 2. 刪除購物車項目
    'deleteCartItem': (itemId: number): 
        
    // 3. 結帳
    'checkout': (payload: CheckoutItem): 
};

export default ProductAPI;
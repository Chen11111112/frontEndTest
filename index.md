import React, { useState, useEffect } from 'react';
// 引入 React Hook Form
import { useForm, SubmitHandler } from 'react-hook-form'; 

// 引入元件和 API
import ProductAPI from '../lib/api/ProductAPI';
import ProductList from '../components/ProductList';
import ShoppingCart from '../components/ShoppingCart'
import { 
    Product, 
    CartItem, 
    CheckoutItem, 
} from '../lib/types/ProductTypes'; 
import '../Index.css'; // 引入樣式



export default function ShoppingCartApp() {
    // 狀態
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [error, setError] = useState<string | null>('範例-錯誤訊息顯示');
    const [searchTerm, setSearchTerm] = useState('');
    const [types, setTypes] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>('All'); 

    // *** Hook Form 初始化 ***
    const { register, handleSubmit, getValues, reset} = useForm<FormInputs>();


    // GET ALL 商品
    useEffect(() => {})

    // DELETE 刪除購物車項目
    const handleDeleteCartItem = async () => {
    };

    // Props 加入購物車
    const handleAddOrUpdateCartItem = (productToAdd: Product) => {

        const quantityField = `quantity_${productToAdd.id}`; // 取得欄位名稱
        let quantity = getValues(quantityField); // 取得欄位資料

        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                (item) => item.productId === productToAdd.id
            );

            if (existingItemIndex >= 0) { // 如果已經存在購物車中，就累加上去
                const newItems = [...prevItems];
                const existingItem = newItems[existingItemIndex];

                newItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + quantity
                };

                return newItems;
            } else {
                // ✅ 第一次加入才建立新物件
                const newCartItem: CartItem = {
                    id: productToAdd.id,
                    productId: productToAdd.id,
                    title: productToAdd.title,
                    price: productToAdd.price,
                    quantity: quantity,
                };

                return [...prevItems, newCartItem];
            }
        });

        alert(`已將 ${quantity} 個 ${productToAdd.title} 加入購物車！`);
    };

    const handleAddOrUpdateCartItem = setItem(products)

    // POST 結帳 FormData-based Form Submission
    const onCheckoutSubmit = async () => {
    };

    // 計算總價，完善計算總價的邏輯
    const cartTotal = cartItems.reduce();

    return (
        <div className="container">
            <header className="header">
                <h1>購物車系統</h1>
            </header>

            {error && <div className="error">{error}</div>}

            <div className="main">
                {/* 傳遞 props 給 ProductList */}
                <ProductList
                    products={products}
                    productsLoading={productsLoading}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm} 
                    types={types}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType} 
                    register={register} 
                    handleAddOrUpdateCartItem={handleAddOrUpdateCartItem}
                />

                {/* 傳遞 props 給 ShoppingCart */}
                <ShoppingCart
                    cartItems={cartItems}
                    cartLoading={false} 
                    cartTotal={cartTotal}
                    handleDeleteCartItem={handleDeleteCartItem}
                    handleCheckoutSubmit={handleSubmit(onCheckoutSubmit)} // 這裡觸發帶有 FormData 的 API 呼叫
                />
            </div>
        </div>
    );
}
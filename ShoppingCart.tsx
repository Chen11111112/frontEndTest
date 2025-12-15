import React from 'react';
import { CartItem } from '../lib/types/ProductTypes'; // 假設型別路徑
import '../Index.css'; // 假設樣式引入

// 定義 ShoppingCart 元件的 Props
interface ShoppingCartProps {
    cartItems: CartItem[];
    cartLoading: boolean;
    cartTotal: number;
    handleDeleteCartItem: (id: number) => void;
    // React Hook Form Props
    handleCheckoutSubmit: () => void; // 接受 handleSubmit 包裝後的結帳函式
}

export default function ShoppingCart({
    cartItems,
    cartLoading,
    cartTotal,
    handleDeleteCartItem,
    handleCheckoutSubmit,
}: ShoppingCartProps) {

    return (
        <aside className="cart-section">
            <h2>購物車</h2>

            // 完善loading邏輯
            {cartLoading ? (
            ) : cartItems.length === 0 ? (
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-info">
                                    <h4>{item.title}</h4>
                                    <p>單價: ${item.price.toFixed(2)}</p>
                                    <p>數量: {item.quantity}</p>
                                    <p className="subtotal">
                                        小計: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDeleteCartItem(item.id)}
                                    className="btn-delete"
                                >
                                    刪除
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>總計: ${cartTotal.toFixed(2)}</h3>
                    </div>
                    
                    {/* *** 使用 handleSubmit 包裝後的結帳按鈕 *** */}
                    <button
                        onClick={handleCheckoutSubmit} 
                        className="btn-checkout" 
                        disabled={cartItems.length === 0}
                    >
                        結帳 (提交 {cartItems.length} 件商品)
                    </button>
                    {/* ------------------------------------------- */}
                </>
            )}
        </aside>
    );
}

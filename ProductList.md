import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Product } from '../lib/types/ProductTypes'; // 假設型別路徑
import '../Index.css'; // 假設樣式引入

// 定義 ProductList 元件的 Props
interface ProductListProps {
    products: Product[];
    productsLoading: boolean;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    types: string[];
    selectedType: string;
    setSelectedType: (type: string) => void;
    
    // React Hook Form Props
    register: UseFormRegister<any>; // 接受 register 函式
    // 改變這裡：現在傳遞完整的 Product 物件給父元件
    handleAddOrUpdateCartItem: (product: Product) => void; 
}

export default function ProductList({
    products,
    productsLoading,
    searchTerm,
    setSearchTerm,
    types,
    selectedType,
    setSelectedType,
    register,
    handleAddOrUpdateCartItem,
}: ProductListProps) {


    const filteredProducts = products.filter();// 請完善邏輯

    return (
        <section className="products-section">
            <h2>商品列表</h2>
            
            {/* 商品類型篩選按鈕 */}

            {/* 搜尋框 */}

            {productsLoading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>載入商品中...</p>
                </div>
            ) : (
                <div className="products-grid">
                    {filteredProducts?.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3>{product.title}</h3>
                            <p className="product-type">類型: {product.category}</p> 
                            <p className="price">${product.price.toFixed(2)}</p>
                            <div className="actions">
                                
                                {/* *** 使用 register 註冊數量輸入欄位 *** */}
                                <input
                                    {...register(`quantity_${product.id}`, { // 欄位名稱
                                        valueAsNumber: true,
                                        min: { value: 1, message: '數量至少為 1' },
                                        value: 1, // 預設值為 1
                                    })}
                                    type="number"
                                    min="1"
                                    className="quantity"
                                />
                                {/* -------------------------------------- */}

                                <button
                                    // *** 傳遞整個 Product 物件給父元件 ***
                                    onClick={} 
                                    className="btn-add"
                                >
                                    加入購物車
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
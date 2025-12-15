// types/ProductTypes.ts

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

export interface CartItem {
    id: number; // 購物車項目 ID (由後端生成)
    productId: number; // 商品 ID
    title: string;
    price: number;
    quantity: number;
}

// 結帳時傳遞給後端的精簡資料
export interface CheckoutItem {
    productId: number;
    quantity: number;
}

// 假設結帳成功的響應格式
export interface CheckoutResponse {
    orderNo: number;
    totalAmount: number;
    checkoutTime: string;
    status: string;
}

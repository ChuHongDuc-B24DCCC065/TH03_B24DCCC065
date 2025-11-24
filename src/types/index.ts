export type Category = 'Điện tử' | 'Quần áo' | 'Đồ ăn' | 'Sách' | 'Khác';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  quantity: number;
  description: string;
}

export const initialProducts: Product[] = [
  { id: 1, name: 'iPhone 15 Pro Max', category: 'Điện tử', price: 34000000, quantity: 10, description: 'Titanium tự nhiên 256GB' },
  { id: 2, name: 'Áo Thun Polo', category: 'Quần áo', price: 250000, quantity: 50, description: 'Vải cá sấu thoáng mát' },
  { id: 3, name: 'MacBook Air M2', category: 'Điện tử', price: 27000000, quantity: 5, description: 'Mỏng nhẹ, pin trâu' },
  { id: 4, name: 'Combo Pizza Hải Sản', category: 'Đồ ăn', price: 250000, quantity: 100, description: 'Size L + Coca' },
  { id: 5, name: 'Đắc Nhân Tâm', category: 'Sách', price: 80000, quantity: 30, description: 'Sách kỹ năng sống kinh điển' },
  { id: 6, name: 'Sony WH-1000XM5', category: 'Điện tử', price: 6500000, quantity: 15, description: 'Chống ồn chủ động hàng đầu' },
  { id: 7, name: 'Quần Jean Slimfit', category: 'Quần áo', price: 550000, quantity: 20, description: 'Co giãn 4 chiều' },
  { id: 8, name: 'Bánh Mì Huỳnh Hoa', category: 'Đồ ăn', price: 68000, quantity: 200, description: 'Đặc biệt full topping' },
  { id: 9, name: 'Harry Potter trọn bộ', category: 'Sách', price: 1200000, quantity: 12, description: 'Bìa cứng bản đặc biệt' },
  { id: 10, name: 'Chuột Logitech MX Master 3S', category: 'Điện tử', price: 2500000, quantity: 40, description: 'Chuột văn phòng tốt nhất' },
  { id: 11, name: 'Bàn phím Keychron K2', category: 'Điện tử', price: 1800000, quantity: 10, description: 'Cơ quang học, Led RGB' },
  { id: 12, name: 'Váy Hoa Nhí', category: 'Quần áo', price: 350000, quantity: 25, description: 'Phong cách Vintage' },
  { id: 13, name: 'Nhà Giả Kim', category: 'Sách', price: 75000, quantity: 45, description: 'Tiểu thuyết bán chạy nhất' },
  { id: 14, name: 'Apple Watch Series 9', category: 'Điện tử', price: 10000000, quantity: 8, description: 'Màn hình Always-On' },
  { id: 15, name: 'Gà Rán KFC', category: 'Đồ ăn', price: 150000, quantity: 60, description: 'Combo 3 miếng + khoai' },
  { id: 16, name: 'Giày Sneaker Basic', category: 'Quần áo', price: 800000, quantity: 15, description: 'Màu trắng, dễ phối đồ' },
  { id: 17, name: 'Tủ Lạnh Samsung', category: 'Điện tử', price: 12000000, quantity: 3, description: 'Inverter tiết kiệm điện' },
  { id: 18, name: 'Cà Phê Muối', category: 'Đồ ăn', price: 35000, quantity: 100, description: 'Đậm đà hương vị Huế' },
  { id: 19, name: 'Dế Mèn Phiêu Lưu Ký', category: 'Sách', price: 50000, quantity: 50, description: 'Văn học thiếu nhi' },
  { id: 20, name: 'Áo Khoác Bomber', category: 'Quần áo', price: 650000, quantity: 18, description: 'Chống nước nhẹ' },
  { id: 21, name: 'Màn hình LG 27 inch', category: 'Điện tử', price: 4500000, quantity: 7, description: '4K IPS' },
  { id: 22, name: 'Trà Sữa Trân Châu', category: 'Đồ ăn', price: 55000, quantity: 80, description: 'Đường đen size L' },
  { id: 23, name: 'Sapiens: Lược Sử Loài Người', category: 'Sách', price: 180000, quantity: 20, description: 'Sách khoa học bán chạy' },
  { id: 24, name: 'Sạc Dự Phòng Anker', category: 'Điện tử', price: 800000, quantity: 35, description: '20000mAh sạc nhanh' },
];
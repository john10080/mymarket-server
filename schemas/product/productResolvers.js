export const products = [
  { id: "1", name: "Laptop", description: "A laptop", price: 1000, inStock: true, userId: "1", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "2", name: "Smartphone", description: "A smartphone", price: 800, inStock: true, userId: "2", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "3", name: "Tablet", description: "A tablet", price: 600, inStock: false, userId: "3", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "4", name: "Headphones", description: "Headphones", price: 200, inStock: true, userId: "1", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "5", name: "Smartwatch", description: "A smartwatch", price: 250, inStock: false, userId: "2", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "6", name: "Camera", description: "A camera", price: 900, inStock: true, userId: "3", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "7", name: "Monitor", description: "A monitor", price: 400, inStock: true, userId: "1", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "8", name: "Keyboard", description: "A keyboard", price: 100, inStock: true, userId: "2", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "9", name: "Mouse", description: "A mouse", price: 50, inStock: false, userId: "3", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
  { id: "10", name: "Printer", description: "A printer", price: 300, inStock: true, userId: "1", createdAt: "2024-01-01", updatedAt: "2024-01-02" },
];

export const productResolvers = {
  Query: {
    products: () => products,
    product: (parent, { id }) => products.find((p) => p.id === id),
  },
};
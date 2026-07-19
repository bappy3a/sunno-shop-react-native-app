declare global {
  interface CategoryType {
    id: number;
    slug: string;
    name: string;
    image: any;
  }

  interface ProductType {
    id: number;
    title: string;
    category: string;
    price: number;
    image: any;
    slug: string;
    sold: number;
    discount: number;
    rating: number;
    reviews: number;
  }
}

export {};

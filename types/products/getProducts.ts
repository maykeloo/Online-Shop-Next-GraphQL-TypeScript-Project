  export interface GetProductsCount {
      productsCount: number
  }
  
  export interface GetAllProductsResponse {
      products: Product[];
  }
  
  export interface Product {
      id:          string;
      title:       string;
      slug:        string;
      imageId:     string;
      image:       Image;
      rating:      Rating;
      price:       number;
      category:    string;
      description: string;
  }

  export interface Image {
      url:       string
      alt:       string
      width:     number
      height:    number
  }
  
  export interface Rating {
      rate:  number;
      count: number;
  }
  
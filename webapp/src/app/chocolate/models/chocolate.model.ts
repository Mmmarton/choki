export class ChocolatePreview {
  rating: number;
  image: string;
  description: string;
  brand: string;
  type: string;
}

export class Chocolate {
  rating: number;
  image: string;
  description: string;
  brand: string;
  type: string;
  author: User;
}

export class User {
  name: string;
  image: string;
}

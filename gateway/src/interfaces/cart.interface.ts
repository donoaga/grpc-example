export interface CartsListResponse {
  list: Cart[];
}

export interface Cart {
  readonly id: string;
  readonly name: string;
  readonly price: number;
}

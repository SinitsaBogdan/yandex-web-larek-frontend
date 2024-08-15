export interface IProductApi<T> {
	getProducts(): Promise<T[]>;
	getProduct(id: string): Promise<T[]>;
}

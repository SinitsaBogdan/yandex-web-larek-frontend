// TODO: Возможно лучше сделать один общий абстрактный класс Catalog для реализации общих методов ?
// IProductPresenter и IBasketPresenter

export interface IBasketPresenter<T, M> {
	addItem(item: T): void;
	getAllItems(): M[];
	checkItemInBasket(id: string): boolean;
	createModel(item: T): M;
	getTotalPrice(): number;
	clear(): void;
	deleteItem(id: string): void;
}

// TODO: Возможно лучше сделать один общий абстрактный класс Catalog для реализации общих методов ?
// IProductPresenter и IBasketPresenter

export interface IProductPresenter<T, M> {
	addItem(item: T): void;
	getItem(id: string): M;
	getAllItems(): M[];
	createModel(item: T): M;
}

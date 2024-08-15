import { IEvents } from '../../utils/base/Events';
import { ProductModel } from '../product/ProductModel';
import { IProductType } from '../product/types/IProductType';
import { IBasketPresenter } from './types/IBasketPresenter';

export class BasketPresenter<T, M> implements IBasketPresenter<T, M> {
	events: IEvents;
	private _items: Map<string, M> = new Map();

	constructor(events: IEvents) {
		this.events = events;
	}

	addItem(item: T): void {
		this._items.set((item as IProductType).id, this.createModel(item));
	}

	createModel(item: T): M {
		return new ProductModel(item, this.events) as M;
	}

	getAllItems(): M[] {
		return Array.from(this._items.values());
	}

	checkItemInBasket(id: string): boolean {
		return this._items.has(id);
	}

	deleteItem(id: string): void {
		this._items.delete(id);
	}

	getTotalPrice(): number {
		return this.getAllItems().reduce((total, item) => total + (item as IProductType).price, 0);
	}

	clear(): void {
		this._items.clear();
	}
}

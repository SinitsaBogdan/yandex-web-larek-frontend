import { IProductApi } from './types/IProductApi';
import { IProductPresenter } from './types/IProductPresenter';
import { ProductModel } from './ProductModel';
import { IEvents } from '../../utils/base/Events';
import { IProductType } from './types/IProductType';

export class ProductPresenter<T, M> implements IProductPresenter<T, M> {
	api?: IProductApi<T>;
	events: IEvents;
	private _items: Map<string, M> = new Map();

	constructor(events: IEvents, api?: IProductApi<T>) {
		this.events = events;
		this.api = api;
	}

	createModel(item: T): M {
		return new ProductModel(item, this.events) as M;
	}

	addItem(item: T): void {
		this._items.set((item as IProductType).id, this.createModel(item));
	}

	getItem(id: string): M {
		return this._items.get(id) as M;
	}

	getAllItems(): M[] {
		return Array.from(this._items.values());
	}
}

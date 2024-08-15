import { IEvents } from '../../utils/base/Events';
import { Model } from '../../utils/base/Model';
import { ProductModel } from '../product/ProductModel';
import { IProductType } from '../product/types/IProductType';
import { IOrderModel } from './types/IOrderModel';
import { IOrderType } from './types/IOrderType';

export class OrderModel extends Model<IOrderType> implements IOrderModel<ProductModel> {
	private _items: string[] = [];
	private _total = 0;
	private _payment = '';
	private _address = '';
	private _phone = '';
	private _email = '';

	constructor(data: Partial<IOrderType>, events: IEvents) {
		super(data, events);
	}

	get total(): number {
		return this._total;
	}

	set total(value: number) {
		this._total = value;
	}

	get payment(): string {
		return this._payment;
	}

	set payment(value: string) {
		this._payment = value;
	}

	get address(): string {
		return this._address;
	}

	set address(value: string) {
		this._address = value;
	}

	get phone(): string {
		return this._phone;
	}

	set phone(value: string) {
		this._phone = value;
	}

	get email(): string {
		return this._email;
	}

	set email(value: string) {
		this._email = value;
	}

	addItem(item: IProductType): void {
		this._items.push(item.id);
		this._total += item.price;
	}

	deleteItem(item: IProductType): void {
		this._items = this._items.filter((id) => id !== item.id);
		this._total -= item.price;
	}

	clear(): void {
		this._items = [];
		this._total = 0;
		this._payment = '';
		this._address = '';
		this._phone = '';
		this._email = '';
	}

	toJson(): IOrderType {
		return {
			items: this._items,
			total: this._total,
			payment: this._payment,
			address: this._address,
			phone: this._phone,
			email: this._email,
		};
	}
}

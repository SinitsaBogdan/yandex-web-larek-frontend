import { IEvents } from '../../utils/base/Events';
import { Model } from '../../utils/base/Model';
import { ProductModel } from '../product/ProductModel';
import { TProductType } from '../product/types/TProductType';
import { IOrderModel } from './types/IOrderModel';
import { TOrderType } from './types/TOrderType';

/**
 * Это определение класса представляет собой OrderModel, который расширяет базовый класс Model и реализует интерфейс IOrderModel. 
 * Он управляет деталями заказа, включая элементы, общую стоимость, платеж, адрес, телефон и электронную почту.
 * 
 * get/set total: получает или задает общую стоимость заказа.
 * get/set payment: Получает или устанавливает способ оплаты заказа.
 * get/set address: Получает или устанавливает адрес для заказа.
 * get/set phone: получает или задает номер телефона для заказа.
 * get/set email: получает или задает адрес электронной почты для заказа.
 * addItem: Добавляет товар в заказ, обновляя общую стоимость и список товаров.
 * deleteItem: Удаляет элемент из заказа, обновляя общую стоимость и список элементов.
 * clear(): Возвращает заказ в исходное состояние, очищая все поля.
 * toJSON(): Возвращает JSON-представление данных заказа.
 */
export class OrderModel extends Model<TOrderType> implements IOrderModel<ProductModel> {
	private _items: string[] = [];
	private _total = 0;
	private _payment = '';
	private _address = '';
	private _phone = '';
	private _email = '';

	constructor(data: Partial<TOrderType>, events: IEvents) {
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

	addItem(item: TProductType): void {
		this._items.push(item.id);
		this._total += item.price;
	}

	deleteItem(item: TProductType): void {
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

	toJson(): TOrderType {
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

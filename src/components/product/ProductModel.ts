import { IEvents } from '../../utils/base/Events';
import { Model } from '../../utils/base/Model';
import { TProductType } from './types/TProductType';

/**
 * Модель товара в приложении.
 * @category Модель
 * @see IEvents
 * @see TProductType
 * @see IProductModel
 */
export class ProductModel extends Model<TProductType> {
	/**
	 * Идентификатор продукта
	 */
	private _id: string;

	/**
	 * Изображение продукта
	 */
	private _image?: string;

	/**
	 * Категория продукта
	 */
	private _category?: string;

	/**
	 * Наименование продукта
	 */
	private _title: string;

	/**
	 * Описание продукта
	 */
	private _description: string;

	/**
	 * Стоимость продукта
	 */
	private _price: number;

	/**
	 * @param data - Объект с данными продукта, которые будут записаны в поля модели.
	 * @param events - Объект событий, который будет передан в родительский конструктор.
	 */
	constructor(data: Partial<TProductType>, protected events?: IEvents) {
		super(data, events);
	}

	/**
	 * Возвращает уникальный идентификатор продукта.
	 */
	public get id(): string {
		return this._id;
	}

	/**
	 * Устанавливает уникальный идентификатор продукта.
	 * @param value - Новое значение уникального идентификатора.
	 */
	public set id(value: string) {
		this._id = value;
	}

	/**
	 * Возвращает URL-адрес изображения продукта.
	 */
	public get image(): string {
		return this._image;
	}

	/**
	 * Устанавливает URL-адрес изображения продукта.
	 * @param value - Новое значение URL-адреса изображения.
	 */
	public set image(value: string) {
		this._image = value;
	}

	/**
	 * Возвращает категорию товара.
	 */
	public get category(): string {
		return this._category;
	}

	/**
	 * Устанавливает категорию товара.
	 * @param value - Новое значение категории.
	 */
	public set category(value: string) {
		this._category = value;
	}

	/**
	 * Возвращает заголовок товара.
	 */
	public get title(): string {
		return this._title;
	}

	/**
	 * Устанавливает заголовок товара.
	 * @param value - Новое значение заголовка.
	 */
	public set title(value: string) {
		this._title = value;
	}

	/**
	 * Возвращает описание товара.
	 */
	public get description(): string {
		return this._description;
	}

	/**
	 * Устанавливает описание товара.
	 * @param value - Новое значение описания.
	 */
	public set description(value: string) {
		this._description = value;
	}

	/**
	 * Возвращает цену товара.
	 */
	public get price(): number {
		return this._price;
	}

	/**
	 * Устанавливает цену товара.
	 * @param value - Новое значение цены.
	 */
	public set price(value: number) {
		this._price = value;
	}
}

import { IEvents } from '../../utils/base/Events';
import { Model } from '../../utils/base/Model';
import { IProductType } from './types/IProductType';

export class ProductModel extends Model<IProductType> {
	private _id: string;
	private _image?: string;
	private _category?: string;
	private _title: string;
	private _description: string;
	private _price: number;

	constructor(data: Partial<IProductType>, protected events?: IEvents) {
		super(data, events);
	}

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get image(): string {
		return this._image;
	}

	public set image(value: string) {
		this._image = value;
	}

	public get category(): string {
		return this._category;
	}

	public set category(value: string) {
		this._category = value;
	}

	public get title(): string {
		return this._title;
	}

	public set title(value: string) {
		this._title = value;
	}

	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}

	public get price(): number {
		return this._price;
	}

	public set price(value: number) {
		this._price = value;
	}
}

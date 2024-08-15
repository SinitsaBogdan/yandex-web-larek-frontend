import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { IProductBasketSettings } from '../types/IProductBasketSettings';
import { IProductType } from '../types/IProductType';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class ProductBasketUI extends Component<IProductType> {
	private readonly settings: IProductBasketSettings;
	private _id: string;
	private _index: HTMLSpanElement;
	private _title: HTMLSpanElement;
	private _price: HTMLSpanElement;
	private _delete: HTMLButtonElement;

	constructor(protected container: HTMLTemplateElement, events: IEvents, settings: IProductBasketSettings) {
		super(container);
		this.settings = settings;

		this._index = ensureElement(settings.selectorIndex, container) as HTMLSpanElement;
		this._title = ensureElement(settings.selectorTitle, container) as HTMLSpanElement;
		this._price = ensureElement(settings.selectorPrice, container) as HTMLSpanElement;
		this._delete = ensureElement(settings.selectorButton, container) as HTMLButtonElement;

		this._delete.addEventListener('click', () => {
			events.emit(EVENT.BASKET_DELETE_PRODUCT, { id: this.id });
			events.emit(EVENT.RENDER_BASKET_FULL);
		});
	}

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public set index(value: string) {
		this.setText(this._index, value);
	}

	public set title(value: string) {
		this.setText(this._title, value);
	}

	public set price(value: string) {
		if (Number(value) === 0) this.setText(this._price, 'Бесценно');
		else this.setText(this._price, `${value} синапсов`);
	}
}

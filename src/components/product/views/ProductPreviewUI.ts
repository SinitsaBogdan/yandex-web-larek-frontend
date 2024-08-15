import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { IProductPreviewSettings } from '../types/IProductPreviewSettings';
import { IProductType } from '../types/IProductType';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class ProductPreviewUI extends Component<IProductType> {
	private readonly settings: IProductPreviewSettings;
	private _id: string;
	private _image: HTMLImageElement;
	private _category: HTMLSpanElement;
	private _title: HTMLTimeElement;
	private _description: HTMLParagraphElement;
	private _button: HTMLButtonElement;
	private _price: HTMLSpanElement;

	constructor(protected container: HTMLTemplateElement, events: IEvents, settings: IProductPreviewSettings) {
		super(container);
		this.settings = settings;

		this._image = ensureElement(settings.selectorImage, container) as HTMLImageElement;
		this._category = ensureElement(settings.selectorCategory, container) as HTMLSpanElement;
		this._title = ensureElement(settings.selectorTitle, container) as HTMLTimeElement;
		this._description = ensureElement(settings.selectorDescription, container) as HTMLParagraphElement;
		this._button = ensureElement(settings.selectorButton, container) as HTMLButtonElement;
		this._price = ensureElement(settings.selectorPrice, container) as HTMLSpanElement;

		this._button.addEventListener('click', () => {
			if (this._button.textContent === 'Купить') {
				events.emit(EVENT.BASKET_ADD_PRODUCT, { id: this.id });
				this._button.textContent = 'Убрать из корзины';
			} else {
				events.emit(EVENT.BASKET_DELETE_PRODUCT, { id: this.id });
				this._button.textContent = 'Купить';
			}
		});
	}

	public set id(value: string) {
		this._id = value;
	}

	public get id() {
		return this._id;
	}

	public set image(value: string) {
		this.setImage(this._image, value, this.title);
	}

	public set category(value: string) {
		this.setText(this._category, value);
		switch (value) {
			case 'софт-скил':
				this._category.classList.add(this.settings.classCategorySoft);
				break;
			case 'другое':
				this._category.classList.add(this.settings.classCategoryOther);
				break;
			case 'дополнительное':
				this._category.classList.add(this.settings.classCategoryAdditional);
				break;
			case 'кнопка':
				this._category.classList.add(this.settings.classCategoryButton);
				break;
			case 'хард-скил':
				this._category.classList.add(this.settings.classCategoryHard);
				break;
		}
	}

	public set title(value: string) {
		this.setText(this._title, value);
	}

	public set description(value: string) {
		this.setText(this._description, value);
	}

	public set button(value: string) {
		this.setText(this._button, value);
	}

	public set price(value: string) {
		if (Number(value) === 0) this.setText(this._price, 'Бесценно');
		else this.setText(this._price, `${value} синапсов`);
	}
}

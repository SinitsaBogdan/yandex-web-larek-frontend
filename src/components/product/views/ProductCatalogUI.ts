import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { IProductCatalogSettings } from '../types/IProductCatalogSettings';
import { IProductType } from '../types/IProductType';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class ProductCatalogUI extends Component<IProductType> {
	private readonly settings: IProductCatalogSettings;
	private _id: string;
	private _category: HTMLSpanElement;
	private _image: HTMLImageElement;
	private _title: HTMLTitleElement;
	private _price: HTMLSpanElement;

	constructor(protected container: HTMLElement, settings?: IProductCatalogSettings, events?: IEvents) {
		super(container);
		this.settings = settings;

		this._category = ensureElement(settings.selectorCategory, container) as HTMLSpanElement;
		this._title = ensureElement(settings.selectorTitle, container) as HTMLTitleElement;
		this._image = ensureElement(settings.selectorImage, container) as HTMLImageElement;
		this._price = ensureElement(settings.selectorPrice, container) as HTMLSpanElement;

		this.container.addEventListener('click', () => events.emit(EVENT.RENDER_PRODUCT_PREVIEW, { id: this.id }));
	}

	public set id(value: string) {
		this._id = value;
	}

	public get id() {
		return this._id;
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

	public set image(value: string) {
		this.setImage(this._image, value, this.title);
	}

	public set price(value: string) {
		if (value === null) this.setText(this._price, `Бесценно`);
		else this.setText(this._price, `${value} синнапсов`);
	}
}

import { Component } from '../../../../utils/base/Component';
import { IEvents } from '../../../../utils/base/Events';
import { ensureElement } from '../../../../utils/utils';
import { TProductCatalogSettings } from './types/TProductCatalogSettings';
import { TProductType } from '../../types/TProductType';
import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';
import { CATEGORY_COLOR } from '../../utils/const';

/**
 * Класс пользовательского интерфейса `ProductCatalog` расширяет класс `Component` и используется для управления пользовательским интерфейсом каталога продуктов.
 * У него есть несколько свойств и методов для установки и получения идентификатора продукта, категории, названия, изображения и цены.
 */
export class ProductCatalogUI extends Component<TProductType> {
	/**
	 * Объект с настройками компонента пользовательского интерфейса каталога продуктов.
	 */
	private readonly settings: TProductCatalogSettings;

	/**
	 * Идентификатор продукта
	 */
	private _id: string;

	/**
	 * HTML комопнент категории продукта
	 */
	private _category: HTMLSpanElement;

	/**
	 * HTML комопнент изображения продукта
	 */
	private _image: HTMLImageElement;

	/**
	 * HTML комопнент названия продукта
	 */
	private _title: HTMLTitleElement;

	/**
	 * HTML комопнент цены продукта
	 */
	private _price: HTMLSpanElement;

	constructor(protected container: HTMLElement, settings?: TProductCatalogSettings, events?: IEvents) {
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
		this.toggleClass(this._category, `card__category_${CATEGORY_COLOR[value]}`, true);
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

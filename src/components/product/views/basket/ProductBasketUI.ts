import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';
import { Component } from '../../../../utils/base/Component';
import { IEvents } from '../../../../utils/base/Events';
import { ensureElement } from '../../../../utils/utils';
import { TProductType } from '../../types/TProductType';
import { TProductBasketSettings } from './types/TProductBasketSettings';

/**
 * Класс пользовательского интерфейса корзины продуктов расширяет класс `Component` и представляет собой компонент пользовательского интерфейса для корзины продуктов.
 * У него есть несколько частных свойств для хранения настроек и HTML-элементов, а также конструктор,
 * который инициализирует эти свойства и настраивает прослушиватель событий для кнопки удаления.
 */
export class ProductBasketUI extends Component<TProductType> {
	/**
	 * Объект с настройками компонента пользовательского интерфейса корзины продуктов.
	 */
	private readonly settings: TProductBasketSettings;

	/**
	 * Идентификатор продукта
	 */
	private _id: string;

	/**
	 * HTML комопнент индекса товара
	 */
	private _index: HTMLSpanElement;

	/**
	 * HTML комопнент названия продукта
	 */
	private _title: HTMLSpanElement;

	/**
	 * HTML комопнент цены продукта
	 */
	private _price: HTMLSpanElement;

	/**
	 * HTML комопнент кнопки удаления
	 */
	private _delete: HTMLButtonElement;

	/**
	 * Конструктор класса ProductBasketUI.
	 * @param container - корневой HTML-элемент, в котором будет отображаться компонент.
	 * @param events - объект, содержащий методы для генерации событий.
	 * @param settings - объект, содержащий настройки для компонента.
	 */
	constructor(protected container: HTMLTemplateElement, events: IEvents, settings: TProductBasketSettings) {
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

	/**
	 * Средство получения и установки идентификатора.
	 * @returns {string} - идентификатор корзины продуктов.
	 */
	public get id(): string {
		return this._id;
	}

	/**
	 * Установщик идентификатора.
	 * @param {string} value - идентификатор корзины продуктов.
	 */
	public set id(value: string) {
		this._id = value;
	}

	/**
	 * Установщик текстового содержимого HTML-элемента index.
	 * @param {string} value - текстовое содержимое.
	 */
	public set index(value: string) {
		this.setText(this._index, value);
	}

	/**
	 * Установщик текстового содержимого HTML-элемента title.
	 * @param {string} value - текстовое содержимое.
	 */
	public set title(value: string) {
		this.setText(this._title, value);
	}

	/**
	 * Установщик текстового содержимого HTML-элемента price.
	 * @param {string} value - текстовое содержимое.
	 * Форматирует значение как "Бесплатно", если оно равно 0, или "{значение} синапсов" в противном случае.
	 */
	public set price(value: string) {
		if (Number(value) === 0) this.setText(this._price, 'Бесценно');
		else this.setText(this._price, `${value} синапсов`);
	}
}

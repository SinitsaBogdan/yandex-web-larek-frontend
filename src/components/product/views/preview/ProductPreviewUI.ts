import { Component } from '../../../../utils/base/Component';
import { IEvents } from '../../../../utils/base/Events';
import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';
import { ensureElement } from '../../../../utils/utils';
import { TProductType } from '../../types/TProductType';
import { CATEGORY_COLOR } from '../../utils/const';
import { TProductPreviewSettings } from './types/TProductPreviewSettings';

/**
 * ProductPreviewUI - используется для создания пользовательского интерфейса для отображения предварительного просмотра продукта.
 *
 * Конструктор: Инициализирует элементы пользовательского интерфейса и настраивает прослушиватели событий для кнопки "Купить". Он также устанавливает начальные значения для частных свойств _id, _image, _category, _title, _description, _button и _price.
 * id: Возвращает или задает значение свойства _id.
 * image: Задает источник изображения для свойства _image.
 * category: Задает текстовое содержимое свойства _category и применяет соответствующий класс CSS на основе указанного значения.
 * title: Задает текстовое содержимое свойства _title.
 * description: Задает текстовое содержимое свойства _description.
 * button: Задает текстовое содержимое свойства _button.
 * price: задает текстовое содержимое свойства _price на основе указанного значения.
 *
 * Класс ProductPreviewUI предназначен для использования с типами TProductType и TProductPreviewSettings,
 * которые предоставляют дополнительные параметры конфигурации для элементов пользовательского интерфейса.
 */
export class ProductPreviewUI extends Component<TProductType> {
	/**
	 * Свойство settings предоставляет объект с настройками для UI компонента.
	 */
	private readonly settings: TProductPreviewSettings;

	/**
	 * Свойство id предоставляет идентификатор продукта.
	 */
	private _id: string;

	/**
	 * Свойство image предоставляет источник изображения.
	 */
	private _image: HTMLImageElement;

	/**
	 * Свойство category предоставляет категорию продукта.
	 */
	private _category: HTMLSpanElement;

	/**
	 * Свойство title предоставляет название продукта.
	 */
	private _title: HTMLTimeElement;

	/**
	 * Свойство description предоставляет описание продукта.
	 */
	private _description: HTMLParagraphElement;

	/**
	 * Свойство button предоставляет кнопку "Купить".
	 */
	private _button: HTMLButtonElement;

	/**
	 * Свойство price предоставляет цену продукта.
	 */
	private _price: HTMLSpanElement;

	/**
	 * Конструктор класса ProductPreviewUI.
	 *
	 * @param {HTMLTemplateElement} container - контейнер, в котором будет отображаться UI компонент.
	 * @param {IEvents} events - диспетчер, который будет использоваться для отправки и получение событий.
	 * @param {TProductPreviewSettings} settings - объект с настройками для UI компонента.
	 *
	 * Инициализирует элементы пользовательского интерфейса, настраивает
	 * прослушиватели событий для кнопки "Купить" и устанавливает начальные
	 * значения для частных свойств _id, _image, _category, _title,
	 * _description, _button и _price.
	 */
	constructor(protected container: HTMLTemplateElement, events: IEvents, settings: TProductPreviewSettings) {
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
				this.setText(this._button, 'Убрать из корзины');
			} else {
				events.emit(EVENT.BASKET_DELETE_PRODUCT, { id: this.id });
				this.setText(this._button, 'Купить');
			}
		});
	}

	/**
	 * Установщик идентификатора.
	 * @param {string} value - идентификатор.
	 */
	public set id(value: string) {
		this._id = value;
	}

	/**
	 * Средство получения идентификатора.
	 * @returns {string} - идентификатор.
	 */
	public get id() {
		return this._id;
	}

	/**
	 * Установщик для свойства image.
	 * @param {string} value - URL изображения.
	 */
	public set image(value: string) {
		this.setImage(this._image, value, this.title);
	}

	/**
	 * Установщик для свойства category.
	 * @param {string} value - значение категории.
	 */
	public set category(value: string) {
		this.setText(this._category, value);
		this.toggleClass(this._category, `card__category_${CATEGORY_COLOR[value]}`, true);
	}

	/**
	 * Установщик для свойства title.
	 * @param {string} value - заголовок.
	 */
	public set title(value: string) {
		this.setText(this._title, value);
	}

	/**
	 * Установщик для свойства description.
	 * @param {string} value - описание.
	 */
	public set description(value: string) {
		this.setText(this._description, value);
	}

	/**
	 * Установщик для свойства button.
	 * @param {string} value - текст на кнопке.
	 */
	public set button(value: string) {
		this.setText(this._button, value);
	}

	/**
	 * Установщик для свойства price.
	 * @param {string} value - текстовое содержимое.
	 * Форматирует значение как "Бесплатно", если оно равно 0, или "{значение} синапсов" в противном случае.
	 */
	public set price(value: string) {
		if (Number(value) === 0) this.setText(this._price, 'Бесценно');
		else this.setText(this._price, `${value} синапсов`);
	}
}

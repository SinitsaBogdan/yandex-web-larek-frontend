import { Component } from '../../utils/Component';

/**
 * Представление карточки с краткой информацией о товаре
 * @property { IProductModel } model - Модель данных для использования в отрисовке
 * @method render Метод для сборки разметки компонента
 */
export interface IProductShortUI<IProductModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IProductModel }
	 */
	_model: IProductModel;

	/**
	 * Элемент изображения товара.
	 * @type { HTMLImageElement }
	 */
	_img: HTMLImageElement;

	/**
	 * Элемент категории товара.
	 * @type { HTMLElement }
	 */
	_tag: HTMLElement;

	/**
	 * Элемент заголовка товара.
	 * @type { HTMLElement }
	 */
	_title: HTMLElement;

	/**
	 * Элемент стоимости товара.
	 * @type { HTMLElement }
	 */
	_total: HTMLElement;
}

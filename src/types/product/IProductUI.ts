import { Component } from "../../utils/Component";

/**
 * Интерфейс представления карточки с полной информацией о товаре
 * @property {IProductModel} model - модель товара
 * @function render Метод для сборки разметки компонента
 */
export interface IProductUI<IProductModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IProductModel }
	 */
	_model: IProductModel;

	/**
	 * Элемент изображения товара
	 * @type { HTMLImageElement }
	 */
	_img: HTMLImageElement;

	/**
	 * Элемент категории товара
	 * @type { HTMLElement }
	 */
	_tag: HTMLElement;

	/**
	 * Элемент заголовка товара
	 * @type { HTMLElement }
	 */
	_title: HTMLElement;

	/**
	 * Элемент описания товара
	 * @type { HTMLElement }
	 */
	_descriptions: HTMLElement;

	/**
	 * Элемент стоимости товара
	 * @type { HTMLElement }
	 */
	_total: HTMLElement;

	/**
	 * Элемент акцентной кнопки
	 * @type { HTMLButtonElement }
	 */
	_close: HTMLButtonElement;
}

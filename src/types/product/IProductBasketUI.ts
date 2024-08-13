import { Component } from '../../utils/Component';

/**
 * Интерфейс представления карточки с информацией о товаре для размещения в корзине
 * @property { IProductModel } model - Модель данных для использования в отрисовке
 * @method render Метод для сборки разметки компонента
 */
export interface IProductBasketUI<IProductModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке.
	 * @type { IProductModel }
	 */
	_model: IProductModel;

	/**
	 * Элемент порядкового номера позиции в корзине.
	 * @type { number }
	 */
	_index: number;

	/**
	 * Элемент заголовка.
	 * @type { HTMLElement }
	 */
	_title: HTMLElement;

	/**
	 * Элемент стоимости товара.
	 * @type { HTMLElement }
	 */
	_total: HTMLElement;

	/**
	 * Элемент кнопки удаления позиции.
	 * @type { HTMLButtonElement }
	 */
	_delete: HTMLButtonElement;
}

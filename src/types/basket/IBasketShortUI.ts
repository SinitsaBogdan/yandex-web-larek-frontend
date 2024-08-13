import { Component } from "../../utils/Component";

/**
 * Интерфейс представления краткой корзины
 * @property { IBasketModel } model
 */
export interface IBasketShortUI<IBasketModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке.
	 * @type { IBasketModel }
	 */
	_model: IBasketModel;

	/**
	 * Колличество товаров в корзине.
	 * @type { number }
	 */
	_coll: number;
}

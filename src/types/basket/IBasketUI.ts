import { Component } from "../../utils/Component";

/**
 * Интерфейс представления полной корзины
 * @property { IBasketModel } model
 */
export interface IBasketUI<IBasketModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IBasketModel }
	 */
    _model: IBasketModel;

    /**
	 * Сумма корзины.
	 * @type { number }
	 */
    _total: number;

    /**
	 * Элемент акцентной кнопки.
	 * @type { HTMLButtonElement }
	 */
    _close: HTMLButtonElement;
}

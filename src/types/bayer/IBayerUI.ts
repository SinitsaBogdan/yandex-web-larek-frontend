import { Component } from "../../utils/Component";

/**
 * Класс представления UI компонента для отрисовки содержимого формы в модальном окне (один из шагов пользовательского сценария).
 * @property { IBayerModel } model
 */
export interface IBayerUI<IBayerModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IBayerModel }
	 */
	_model: IBayerModel;

	/**
	 * Элемент ввода почты.
	 * @type { HTMLElement }
	 */
	_email: HTMLElement;

	/**
	 * Элемент ввода телефона.
	 * @type { HTMLElement }
	 */
	_phone: HTMLElement;

	/**
	 * Элемент кнопки.
	 * @type { HTMLButtonElement }
	 */
	_close: HTMLButtonElement;
}

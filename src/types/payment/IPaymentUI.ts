import { Component } from '../../utils/Component';

/**
 * Класс представления UI компонента для отрисовки содержимого формы в модальном окне (один из шагов пользовательского сценария).
 * @property { IPaymentModel } model
 */
export interface IPaymentUI<IPaymentModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IPaymentModel }
	 */
	_model: IPaymentModel;

	/**
	 * Контейнер с кнопками типов оплаты.
	 * @type { HTMLElement }
	 */
	_btnPayments: HTMLElement;

	/**
	 * Элемент поля ввода адреса.
	 * @type { HTMLInputElement }
	 */
	_adress: HTMLInputElement;

	/**
	 * Элемент акцентной кнопки.
	 * @type { HTMLButtonElement }
	 */
	_close?: HTMLButtonElement;
}

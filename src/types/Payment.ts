import { PaymentsEnum } from './Enums';

export type PaymentType = {
	payment: PaymentsEnum;
	address: string;
};

/**
 * Модель данных о типе оплаты заказа и адресе доставки.
 * Хранит в себе тип оплаты из перечисления `PaymentsEnum` и адрес доставки.
 * Используется как содержимое в UI модальной формы на странице магазина (один из шагов пользовательского сценария).
 * @property { PaymentsEnum } payment
 * @property { string } address
 */
export interface IPaymentModel {
	/**
	 * Тип оплаты заказа из перечисления PaymentsEnum
	 * @type { PaymentsEnum } payment
	 */
	payment: PaymentsEnum;
	/**
	 * Адресс доставки заказа
	 * @type { string } address
	 */
	address: string;

	/**
	 * Запрос типа оплаты заказа.
	 * @returns { PaymentType }
	 */
	getPayment(): PaymentType;

	/**
	 * Запись типа оплаты заказа.
	 * @param { PaymentType } value
	 * @returns { void }
	 */
	setPayment(value: PaymentType): void;

	/**
	 * Запрос адреса доставки заказа.
	 * @returns { string }
	 */
	getAddress(): string;

	/**
	 * Запись адреса доставки заказа.
	 * @param { string } value
	 * @returns { void }
	 */
	setAddress(value: string): void;
}

/**
 * Класс представления UI компонента для отрисовки содержимого формы в модальном окне (один из шагов пользовательского сценария).
 * @property { IPaymentModel } model
 */
export interface IPaymentUI<IPaymentModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IPaymentModel }
	 */
	model: IPaymentModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}

import { PaymentsEnum } from '../Enums';

/**
 * Модель данных о типе оплаты заказа и адресе доставки.
 * Хранит в себе тип оплаты из перечисления `PaymentsEnum` и адрес доставки.
 * Используется как содержимое в UI модальной формы на странице магазина (один из шагов пользовательского сценария).
 * @property { PaymentsEnum } payment
 * @property { string } address
 */
export interface IPaymentModel<PaymentType> {
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
}

import { PaymentsEnum } from '../Enums';

/**
 * Тип данных для создания модели типа оплаты.
 * @property { PaymentsEnum } payment - Описание товара
 * @property { string } address - Стоимость товара
 */
export type PaymentType = {
	payment: PaymentsEnum;
	address: string;
};
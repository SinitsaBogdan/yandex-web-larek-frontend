import { StatusOrderEnum } from '../Enums';
import { IBasketModel } from '../basket/BasketType';
import { IPaymentModel } from '../payment/IPaymentModel';
import { IBayerModel } from '../bayer/IBayerModel';
import { PaymentType } from '../payment/PaymentType';

/**
 * Интерфейс модели заказа
 * @property { StatusOrderEnum } status
 * @property { IBasketModel } basket
 * @property { IPaymentModel } payment
 * @property { IBayerModel } bayer
 */
export interface IOrderModel {
	/**
	 * Статус заказа из перечисления StatusOrderEnum
	 * @type { StatusOrderEnum } status
	 */
	status: StatusOrderEnum;

	/**
	 * Модель данных корзины товаров
	 * @type { IBasketModel } basket
	 */
	basket: IBasketModel;

	/**
	 * Модель данных о типе оплаты и доставке
	 * @type { IPaymentModel } payment
	 */
	payment: IPaymentModel<PaymentType>;

	/**
	 * Модель данных о покупателе
	 * @type { IBayerModel } bayer
	 */
	bayer: IBayerModel;
}

import { StatusOrderEnum } from './Enums';
import { IBasketModel } from './Basket';
import { IPaymentModel } from './Payment';
import { IBayerModel } from './Bayer';

type OrderType = {
	status: StatusOrderEnum;
	basket: IBasketModel;
	payment: IPaymentModel;
	bayer: IBayerModel;
};

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
	payment: IPaymentModel;

	/**
	 * Модель данных о покупателе
	 * @type { IBayerModel } bayer
	 */
	bayer: IBayerModel;

	/**
	 * Запрос статуса заказа.
	 * @returns { StatusOrderEnum }
	 */
	getStatus(): StatusOrderEnum;

	/**
	 * Запись статуса заказа.
	 * @param { StatusOrderEnum } value
	 * @returns { this }
	 */
	setStatus(value: StatusOrderEnum): void;

	/**
	 * Запрос позиций заказа (корзины).
	 * @returns { IBasketModel }
	 */
	getBasket(): IBasketModel;

	/**
	 * Запись позиций заказа (корзины).
	 * @param { IBasketModel } value
	 * @returns { void }
	 */
	setBasket(value: IBasketModel): void;

	/**
	 * Запрос данных об оплате и адресе.
	 * @returns { IPaymentModel }
	 */
	getPayment(): IPaymentModel;

	/**
	 * Запись данных об оплате и адресе.
	 * @param { IPaymentModel } value
	 * @returns { void }
	 */
	setPayment(value: IPaymentModel): void;

	/**
	 * Запрос данных об покупателе.
	 * @returns { IBayerModel }
	 */
	getBayer(): IBayerModel;

	/**
	 * Запись данных об покупателе.
	 * @param { IBayerModel } value
	 * @returns { void }
	 */
	setBayer(value: IBayerModel): void;
}

/**
 * Интерфейс API методов Order
 */
export interface OrderAPI {
	/**
	 * POST - Отправка заказа на сервер.
	 * @returns { StatusOrderEnum }
	 */
	postOrder(): void;
}

/**
 * Контроллер модели заказа связывающий модель с api запросами
 * @property { IOrderModel } model
 */
export interface OrderController extends OrderAPI {
	/**
	 * Модель заказа
	 * @type { IOrderModel } model
	 */
	model: IOrderModel;
}

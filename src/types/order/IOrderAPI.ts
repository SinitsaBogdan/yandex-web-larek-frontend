/**
 * Интерфейс API методов Order
 */
export interface IOrderAPI {
	/**
	 * POST - Отправка заказа на сервер.
	 * @returns { StatusOrderEnum }
	 */
	postOrder(): void;
}

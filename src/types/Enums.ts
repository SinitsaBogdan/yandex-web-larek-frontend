/**
 * Перечисление событий в приложении
 */
export enum EventsEnum {
	API_GET_ALL_PRODUCTS = 'api:get-products',
	API_GET_PRODUCT = 'api:get-product',
	API_POST_PRODUCT = 'api:post-order',
	OPEN_MODAL_PRODUCT = 'modal:open-product',
	OPEN_MODAL_BASKET = 'modal:open-basket',
	OPEN_MODAL_PAYMENT = 'modal:open-payment',
	OPEN_MODAL_BAYER = 'modal:open-bayer',
	OPEN_MODAL_SUCCESS = 'modal:open-success',
	CLOSE_MODAL = 'modal:close',
	ADD_PRODUCT_TO_BASKET = 'basket:add-product',
	DELETE_PRODUCT_IN_BASKET = 'basket:delete-product',
	SELECT_TYPE_PAYMENT = 'select:payument',
	INPUT_ADDRESS = 'input:address',
	INPUT_PHONE = 'input:phone',
	INPUT_EMAIL = 'input:email',
}

/**
 * Перечисление событий выбора типа оплаты
 */
export enum PaymentsEnum {
	PAYMENT_ONLINE = 'online',
	PAYMENT_RECEIPT = 'receipt',
}

/**
 * Перечисление событий статуса оформления заказа
 */
export enum StatusOrderEnum {
	ORDER_REJECTION = 'order:status-rejection',
	ORDER_MISTAKE = 'order:status-mistake',
	ORDER_SUCCESS = 'order:status-success',
}

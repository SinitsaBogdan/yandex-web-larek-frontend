/**
 * Перечисление событий выбора типа оплаты
 */
export enum PaymentsEnum {
	PAYMENT_ONLINE = 'payment:select-online',
	PAYMENT_RECEIPT = 'payment:select-receipt',
}

/**
 * Перечисление событий статуса оформления заказа
 */
export enum StatusOrderEnum {
	ORDER_REJECTION = 'order:status-rejection',
	ORDER_MISTAKE = 'order:status-mistake',
	ORDER_SUCCESS = 'order:status-success',
}

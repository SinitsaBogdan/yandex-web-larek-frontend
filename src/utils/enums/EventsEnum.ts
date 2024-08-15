/** Перечисление событий
 */
export enum EventsEnum {
	// Основные события в приложении
	API_ORDER_POST = 'api:order-post',
	API_CATALOG_GET_ALL = 'api:catalog-get-all',
	API_CATALOG_GET_ID = 'api:catalog-get-id',
	MODAL_OPEN = 'modal:open',
	MODAL_CLOSE = 'modal:close',
	BASKET_ADD_PRODUCT = 'basket:add-product',
	BASKET_DELETE_PRODUCT = 'basket:delete-product',

	// События технического характера
	LOGGER = 'logger',
	PRODUCT_PREVIEW_CLICK_BUTTON = 'product:preview-click-button',
	RENDER_PRODUCT_PREVIEW = 'render:product-preview',
	RENDER_BASKET_SHORT = 'render:basket-short',
	RENDER_BASKET_FULL = 'render:basket-full',
	RENDER_ORDER_PAYMENT = 'render:order-payment',
	RENDER_ORDER_CONTACTS = 'render:order-bayer',
	RENDER_ORDER_SUCCESS = 'render:order-success',
	BROCKER_FORM_VALIDATOR = 'form:check-valid',
	CHECK_VALID_FORM_PAYMENT = 'form:check-valid-payment',
	CHECK_VALID_FORM_CONTACTS = 'form:check-valid-contacts',
	FORM_PAYMENT_ERRORS = 'form:payment-errors',
	FORM_CONTACTS_ERRORS = 'form:contacts-errors',
}

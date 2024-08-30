/** Перечисление событий
 */
export enum EventsEnum {
	/**
	 * События API. Отправка заказа на сервер
	 */
	API_ORDER_POST = 'api:order-post',

	/**
	 * События API. Загрузка каталога
	 */
	API_CATALOG_GET_ALL = 'api:catalog-get-all',

	/**
	 * События API. Загрузка товара по ID
	 */
	API_CATALOG_GET_ID = 'api:catalog-get-id',

	/**
	 * Событие открытия модального окна
	 */
	MODAL_OPEN = 'modal:open',

	/**
	 * Событие закрытия модального окна.
	 */
	MODAL_CLOSE = 'modal:close',

	/**
	 * Событие добавления продукта в корзину
	 */
	BASKET_ADD_PRODUCT = 'basket:add-product',

	/**
	 * Событие удаления продукта из корзины
	 */
	BASKET_DELETE_PRODUCT = 'basket:delete-product',

	/**
	 * Событие логирования
	 */
	LOGGER = 'logger',

	/**
	 * Событие клика по карточке продукта в каталоге. Открытие модального окна предпросмотра продукта.
	 */
	RENDER_PRODUCT_PREVIEW = 'render:product-preview',

	/**
	 * Событие клика по кнопке в модальном окне предпросмотра продукта.
	 */
	PRODUCT_PREVIEW_CLICK_BUTTON = 'product:preview-click-button',

	/**
	 * Событие изменения состояния корзины. Отрисовка компонента виджета "Корзина"
	 */
	RENDER_BASKET_SHORT = 'render:basket-short',

	/**
	 * Событие изменения состояния корзины. Отрисовка компонента модального окна полной корзины
	 */
	RENDER_BASKET_FULL = 'render:basket-full',

	/**
	 * Событие перерисовки модального окна с формой заказа
	 */
	RENDER_ORDER_PAYMENT = 'render:order-payment',

	/**
	 * Событие перерисовки модального окна с формой контактов
	 */
	RENDER_ORDER_CONTACTS = 'render:order-bayer',

	/**
	 * Событие перерисовки модального окна с информацией о завершении формирования заказа
	 */
	RENDER_ORDER_SUCCESS = 'render:order-success',

	/**
	 * Событие закрытия модального окна с информацией о завершении формирования заказа
	 */
	SUCCESS_CLOSE = 'success:close',

	/**
	 * Броккер получил данные для распределения по валидаторам форм.
	 */
	BROCKER_FORM_VALIDATOR = 'form:check-valid',

	/**
	 * Валидация поля из формы "Оплата"
	 */
	CHECK_VALID_FORM_PAYMENT = 'form:check-valid-payment',

	/**
	 * Валидация поля из формы "Контакты"
	 */
	CHECK_VALID_FORM_CONTACTS = 'form:check-valid-contacts',

	/**
	 * Ошибка валидации в форме "Оплата"
	 */
	FORM_PAYMENT_ERRORS = 'form:payment-errors',

	/**
	 * Ошибка валидации в форме "Контакты"
	 */
	FORM_CONTACTS_ERRORS = 'form:contacts-errors',
}

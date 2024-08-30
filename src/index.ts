import './scss/styles.scss';
import * as CONST from './utils/constants';
import { ApplicationsModel } from './components/app/ApplicationsModel';
import { BasketPresenter } from './components/basket/BasketPresenter';
import { EventEmitter, IEvents } from './utils/base/Events';
import { cloneTemplate, ensureElement } from './utils/utils';
import { ProductPresenter } from './components/product/ProductPresenter';
import { OrderPresenter } from './components/order/OrderPresenter';
import { ProductApi } from './components/product/ProductApi';
import { OrderApi } from './components/order/api/OrderApi';
import { EventsEnum as EVENT } from './utils/enums/EventsEnum';
import { ProductModel } from './components/product/ProductModel';
import { ProductCatalogUI } from './components/product/views/catalog/ProductCatalogUI';
import { TProductType } from './components/product/types/TProductType';
import { BasketShortUI } from './components/basket/view/short/BasketShortUI';
import { BasketFullUI } from './components/basket/view/full/BasketFullUI';
import { TContactsData, TPaymentData } from './components/order/types/TOrderType';
import { PaymentUI } from './components/order/views/payment/PaymentUI';
import { ContactsUI } from './components/order/views/contacts/ContactsUI';
import { PageUI } from './components/page/PageUI';
import { TPresenters } from './components/app/types/TPresenters';
import { TComponents } from './components/app/types/TComponents';
import { ModalUI } from './components/shared/modal/ModalUI';
import { SuccessUI } from './components/order/views/success/SuccessUI';
import { ProductPreviewUI } from './components/product/views/preview/ProductPreviewUI';
import { ProductBasketUI } from './components/product/views/basket/ProductBasketUI';

// ======================================================================

// Глобальные компоненты
const basketShortComponent = ensureElement<HTMLButtonElement>('.header__basket');
const galeryComponent = ensureElement<HTMLUListElement>('.gallery');
const modalComponent = ensureElement<HTMLElement>('#modal-container');

// Шаблоны
const productCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
const productPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const productBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const orderPaymentTemplate = ensureElement<HTMLTemplateElement>('#order');
const orderContactsTemplate = ensureElement<HTMLTemplateElement>('#contacts');
const orderSuccessTemplate = ensureElement<HTMLTemplateElement>('#success');
const basketFullTemplate = ensureElement<HTMLTemplateElement>('#basket');

// Глобальные классы
const events = new EventEmitter();

const api = {
	order: new OrderApi(CONST.CDN_URL, CONST.API_URL),
	catalog: new ProductApi(CONST.CDN_URL, CONST.API_URL),
};

const app = new ApplicationsModel<TPresenters, TComponents>(
	{
		basket: new BasketPresenter(events),
		order: new OrderPresenter<IEvents>(events),
		product: new ProductPresenter(events),
	},
	{
		page: new PageUI(document.body, events, CONST.PAGE_SETTINGS),

		basketShort: new BasketShortUI(basketShortComponent, events, CONST.BASKET_SHORT_SETTINGS),
		basketFull: new BasketFullUI(cloneTemplate(basketFullTemplate), events, CONST.BASKET_SETTINGS),
		payment: new PaymentUI(cloneTemplate(orderPaymentTemplate), events, CONST.PAYMENT_SETTINGS),
		contacts: new ContactsUI(cloneTemplate(orderContactsTemplate), events, CONST.CONTACTS_SETTINGS),
		modal: new ModalUI(modalComponent, events, CONST.MODAL_SETTINGS),
		success: new SuccessUI(cloneTemplate(orderSuccessTemplate), events, CONST.SUCCESS_SETTINGS),
	}
);

events.on(EVENT.API_ORDER_POST, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.API_ORDER_POST' });
	app.presenters.basket.getAllItems().forEach((item) => {
		if (item.price != null) app.presenters.order.model.addItem(item);
	});
	api.order
		.postOrder(app.presenters.order.model.toJson())
		.then((response) => {
			events.emit(EVENT.LOGGER, { message: 'API_ORDER_POST response : ', response });
			events.emit(EVENT.RENDER_ORDER_SUCCESS);
			app.presenters.basket.clear();
			app.presenters.order.model.clear();
			app.components.payment.clear();
			app.components.contacts.clear();
			events.emit(EVENT.RENDER_BASKET_SHORT);
		})
		.catch((error) => {
			events.emit(EVENT.LOGGER, { message: error });
			events.emit(EVENT.RENDER_ORDER_SUCCESS);
		});
});

events.on(EVENT.API_CATALOG_GET_ALL, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.API_CATALOG_GET_ALL' });
	api.catalog.getProducts().then((data) => {
		data.forEach((item) => {
			const product: TProductType = new ProductModel(item, events);
			app.presenters.product.addItem(product);
			const ui = new ProductCatalogUI(
				cloneTemplate(productCatalogTemplate),
				CONST.PRODUCT_CATALOG_SETTINGS,
				events
			);
			galeryComponent.append(
				ui.render({
					id: product.id,
					category: product.category,
					title: product.title,
					image: CONST.CDN_URL + product.image,
					description: product.description,
					price: product.price,
				})
			);
		});
	});
});

events.on(EVENT.API_CATALOG_GET_ID, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.API_CATALOG_GET_ID' });
});

events.on(EVENT.MODAL_OPEN, ({ content }: { content: HTMLElement }) => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.MODAL_OPEN' });
	app.components.page.locked = true;
	app.components.modal.render({ content });
});

events.on(EVENT.MODAL_CLOSE, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.MODAL_CLOSE' });
	app.components.page.locked = false;
	app.components.modal.content = null;
});

events.on(EVENT.SUCCESS_CLOSE, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.SUCCESS_CLOSE' });
	app.components.modal.close()
});

events.on(EVENT.BASKET_ADD_PRODUCT, ({ id }: { id: string }) => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.BASKET_ADD_PRODUCT' });
	const product: ProductModel = app.presenters.product.getItem(id);
	app.presenters.basket.addItem(product);
	events.emit(EVENT.RENDER_BASKET_SHORT);
});

events.on(EVENT.BASKET_DELETE_PRODUCT, ({ id }: { id: string }) => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.BASKET_DELETE_PRODUCT' });
	app.presenters.basket.deleteItem(id);
	events.emit(EVENT.RENDER_BASKET_SHORT);
});

events.on(EVENT.RENDER_PRODUCT_PREVIEW, ({ id }: { id: string }) => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.RENDER_PRODUCT_PREVIEW' });
	const product: ProductModel = app.presenters.product.getItem(id);
	const ui: ProductPreviewUI = new ProductPreviewUI(
		cloneTemplate(productPreviewTemplate),
		events,
		CONST.PRODUCT_PREVIEW_SETTINGS
	);
	app.presenters.basket.checkItemInBasket(product.id) ? (ui.button = 'Убрать из корзины') : (ui.button = 'Купить');
	events.emit(EVENT.MODAL_OPEN, {
		content: ui.render({
			id: product.id,
			category: product.category,
			title: product.title,
			image: CONST.CDN_URL + product.image,
			description: product.description,
			price: product.price,
		}),
	});
});

events.on(EVENT.RENDER_BASKET_SHORT, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.RENDER_BASKET_SHORT' });
	app.components.basketShort.render({
		count: app.presenters.basket.getAllItems().length,
	});
});

events.on(EVENT.RENDER_BASKET_FULL, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.RENDER_BASKET_FULL' });
	const ui = app.components.basketFull.render({
		total: app.presenters.basket.getTotalPrice(),
		isActivButton: app.presenters.basket.getTotalPrice() !== 0,
		items: app.presenters.basket.getAllItems().map((item, index) => {
			return new ProductBasketUI(
				cloneTemplate(productBasketTemplate),
				events,
				CONST.PRODUCT_BASKET_SETTINGS
			).render({
				index: index + 1,
				id: item.id,
				title: item.title,
				price: item.price,
			});
		}),
	});
	events.emit(EVENT.MODAL_OPEN, { content: ui });
});

events.on(EVENT.RENDER_ORDER_PAYMENT, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.RENDER_ORDER_PAYMENT' });
	events.emit(EVENT.MODAL_OPEN, {
		content: app.components.payment.render({
			valid: app.statusValidationFormPayment,
			errors: app.statusValidationFormPayment ? '' : 'Выберите способ оплаты и заполните адрес доставки.',
			next: EVENT.RENDER_ORDER_CONTACTS,
		}),
	});
});

events.on(EVENT.RENDER_ORDER_CONTACTS, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.RENDER_ORDER_CONTACTS' });
	events.emit(EVENT.MODAL_OPEN, {
		content: app.components.contacts.render({
			valid: app.statusValidationFormContacts,
			errors: app.statusValidationFormContacts ? '' : 'Введите ваш контактный телефон и электронную почту.',
			next: EVENT.RENDER_ORDER_SUCCESS,
		}),
	});
});

events.on(EVENT.RENDER_ORDER_SUCCESS, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.RENDER_ORDER_SUCCESS' });
	events.emit(EVENT.MODAL_OPEN, {
		content: app.components.success.render({
			descriptions: `Списано ${app.presenters.order.model.total} синапсов`,
		}),
	});
});

events.on(EVENT.CHECK_VALID_FORM_CONTACTS, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.CHECK_VALID_FORM_CONTACTS' });

	if (app.presenters.order.model.phone === '') {
		app.statusValidationFormContacts = false;
		app.errors = 'Введите ваш контактный телефон для обратной связи.';
		events.emit(EVENT.FORM_CONTACTS_ERRORS);
		return;
	}

	if (app.presenters.order.model.phone.length < 11) {
		app.statusValidationFormContacts = false;
		app.errors = 'Номер должен содержать не меньше 11 цифр.';
		events.emit(EVENT.FORM_CONTACTS_ERRORS);
		return;
	}

	if (app.presenters.order.model.email === '') {
		app.statusValidationFormContacts = false;
		app.errors = 'Введите вашу электронную почту для обратной связи.';
		events.emit(EVENT.FORM_CONTACTS_ERRORS);
		return;
	}

	if (app.presenters.order.model.email.length < 6) {
		app.statusValidationFormContacts = false;
		app.errors = 'Адрес электронной почты должен содержать не меньше 6 символов.';
		events.emit(EVENT.FORM_CONTACTS_ERRORS);
		return;
	}

	if (app.presenters.order.model.email !== '' && app.presenters.order.model.phone !== '') {
		app.statusValidationFormContacts = true;
		app.errors = '';
	} else {
		app.errors = 'Введите вашу электронную почту и контактный телефон';
		app.statusValidationFormContacts = false;
	}

	events.emit(EVENT.FORM_CONTACTS_ERRORS);
});

events.on(EVENT.CHECK_VALID_FORM_PAYMENT, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.CHECK_VALID_FORM_PAYMENT' });

	if (app.presenters.order.model.payment === '') {
		app.statusValidationFormPayment = false;
		app.errors = 'Выберите способ оплаты';
		events.emit(EVENT.FORM_PAYMENT_ERRORS);
		return;
	}

	if (app.presenters.order.model.address === '') {
		app.errors = 'Введите адрес доставки';
		app.statusValidationFormPayment = false;
		events.emit(EVENT.FORM_PAYMENT_ERRORS);
		return;
	}

	if (app.presenters.order.model.address.length < 10) {
		app.errors = 'Адрес доставки должен содержать более 10 символов';
		app.statusValidationFormPayment = false;
		events.emit(EVENT.FORM_PAYMENT_ERRORS);
		return;
	}

	if (app.presenters.order.model.payment !== '' && app.presenters.order.model.address !== '') {
		app.statusValidationFormPayment = true;
		app.errors = '';
	}
	events.emit(EVENT.FORM_PAYMENT_ERRORS);
});

events.on(
	EVENT.BROCKER_FORM_VALIDATOR,
	({ field, value }: { field: keyof TPaymentData | keyof TContactsData; value: string }) => {
		events.emit(EVENT.LOGGER, { message: 'EVENT.CHECK_VALID_FORM' });
		app.presenters.order.model[field] = value;
		switch (field) {
			case 'payment':
			case 'address':
				events.emit(EVENT.CHECK_VALID_FORM_PAYMENT);
				break;
			case 'phone':
			case 'email':
				events.emit(EVENT.CHECK_VALID_FORM_CONTACTS);
				break;
		}
	}
);

events.on(EVENT.FORM_PAYMENT_ERRORS, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.FORM_PAYMENT_ERRORS' });
	if (app.statusValidationFormPayment)
		app.components.payment.render({
			valid: app.statusValidationFormPayment,
			errors: app.errors,
			next: EVENT.RENDER_ORDER_CONTACTS,
		});
	else
		app.components.payment.render({
			valid: app.statusValidationFormPayment,
			errors: app.errors,
			next: EVENT.RENDER_ORDER_PAYMENT,
		});
});

events.on(EVENT.FORM_CONTACTS_ERRORS, () => {
	events.emit(EVENT.LOGGER, { message: 'EVENT.FORM_CONTACTS_ERRORS' });
	if (app.statusValidationFormContacts) {
		app.components.contacts.render({
			valid: app.statusValidationFormContacts,
			errors: app.errors,
			next: EVENT.API_ORDER_POST,
		});
	} else
		app.components.contacts.render({
			valid: app.statusValidationFormContacts,
			errors: app.errors,
			next: EVENT.RENDER_ORDER_CONTACTS,
		});
});

events.on(EVENT.LOGGER, ({ message }: { message: string }) => {
	console.log(message);
});

events.emit(EVENT.API_CATALOG_GET_ALL, {});

import { BasketShortUI } from '../../basket/view/short/BasketShortUI';
import { BasketFullUI } from '../../basket/view/full/BasketFullUI';
import { ModalUI } from '../../shared/modal/ModalUI';
import { ContactsUI } from '../../order/views/contacts/ContactsUI';
import { PaymentUI } from '../../order/views/payment/PaymentUI';
import { PageUI } from '../../page/PageUI';
import { SuccessUI } from '../../order/views/success/SuccessUI';

/**
 * Типизация объекта UI компонентов для приложения.
 *
 * @property page Компонент страницы.
 * @property basketShort Компонент виджета корзины в шапке страницы.
 * @property basketFull Компонент модального окна корзины.
 * @property payment Компонент модального окна оплаты.
 * @property contacts Компонент модального окна контактов.
 * @property modal Компонент модального окна.
 * @property success Компонент модального окна завершения формирования заказа.
 * @description Типизация объекта UI компонентов для приложения.
 */
export type TComponents = {
	page: PageUI;
	basketShort: BasketShortUI;
	basketFull: BasketFullUI;
	payment: PaymentUI;
	contacts: ContactsUI;
	modal: ModalUI;
	success: SuccessUI;
};

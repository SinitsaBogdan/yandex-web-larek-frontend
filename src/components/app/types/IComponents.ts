import { BasketShortUI } from '../../basket/view/BasketShortUI';
import { BasketUI } from '../../basket/view/BasketUI';
import { ModalUI } from '../../modal/ModalUI';
import { ContactsUI } from '../../order/views/ContactsUI';
import { PaymentUI } from '../../order/views/PaymentUI';
import { PageUI } from '../../page/PageUI';
import { SuccessUI } from '../../success/views/SuccessUI';

export type IComponents = {
	page: PageUI;
	basketShort: BasketShortUI;
	basketFull: BasketUI;
	payment: PaymentUI;
	contacts: ContactsUI;
	modal: ModalUI;
	success: SuccessUI;
};

import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { FormUI } from '../../form/FormUI';
import { IPaymentSettings } from '../types/IPaymentSettings';
import { IOrderType } from '../types/IOrderType';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class PaymentUI extends FormUI<IOrderType> {
	private readonly settings: IPaymentSettings;
	private _online: HTMLButtonElement;
	private _receipt: HTMLButtonElement;

	constructor(protected container: HTMLFormElement, events: IEvents, settings: IPaymentSettings) {
		super(container, events);
		this.settings = settings;

		this._online = ensureElement(settings.selectorOnline, container) as HTMLButtonElement;
		this._receipt = ensureElement(settings.selectorReceit, container) as HTMLButtonElement;

		this._online.addEventListener('click', () => {
			events.emit(EVENT.BROCKER_FORM_VALIDATOR, { field: 'payment', value: 'online' });
			this.togglePaymentType(this._online);
		});

		this._receipt.addEventListener('click', () => {
			events.emit(EVENT.BROCKER_FORM_VALIDATOR, { field: 'payment', value: 'receipt' });
			this.togglePaymentType(this._receipt);
		});
	}

	private togglePaymentType(button: HTMLButtonElement) {
		if (button === this._online) {
			this._online.classList.add(this.settings.classNameActive);
			this._receipt.classList.remove(this.settings.classNameActive);
		} else {
			this._online.classList.remove(this.settings.classNameActive);
			this._receipt.classList.add(this.settings.classNameActive);
		}
	}
}

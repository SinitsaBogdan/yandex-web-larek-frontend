import { IEvents } from '../../../../utils/base/Events';
import { ensureElement } from '../../../../utils/utils';
import { FormUI } from '../../../shared/form/FormUI';
import { TPaymentSettings } from './TPaymentSettings';
import { TOrderType } from '../../types/TOrderType';
import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';
import { PaymentTypesEnums } from '../../enums/PaymentTypesEnums';

/**
 * Класс пользовательского интерфейса данных о платеже расширяет пользовательский интерфейс `FormUI<TOrderType>`
 * и отвечает за управление пользовательским интерфейсом формы платежа.
 *
 * У него есть два частных свойства: `_online` и `_receipt`,
 * которые являются элементами HTML-кнопок для онлайн-платежей и оплаты по квитанции соответственно.

 * Конструктор:
 * Инициализирует пользовательский интерфейс платежной формы с контейнером, событиями и настройками.
 * Он настраивает прослушиватели событий для кнопок онлайн и получения и переключает тип платежа при нажатии на кнопку.
 *
 * @function togglePaymentType: Переключает активный тип платежа, добавляя или удаляя активный класс из кнопок онлайн и получения в зависимости от нажатой кнопки.
 */
export class PaymentUI extends FormUI<TOrderType> {
	/**
	 * Свойство `settings` содержит настройки для отображения формы оплаты.
	 */
	private readonly settings: TPaymentSettings;

	/**
	 * Свойство `_online` представляет собой HTML-элемент кнопки с типом оплаты `онлайн`.
	 */
	private _online: HTMLButtonElement;

	/**
	 * Свойство `_receipt` представляет собой HTML-элемент кнопки с типом оплаты `при получении`.
	 */
	private _receipt: HTMLButtonElement;

	/**
	 * @param container - контейнер, в котором будет отображаться форма оплаты
	 * @param events - экземпляр класса IEvents, через который происходит коммуникация между компонентами
	 * @param settings - настройки для отображения формы оплаты
	 */
	constructor(protected container: HTMLFormElement, events: IEvents, settings: TPaymentSettings) {
		super(container, events);
		this.settings = settings;

		this._online = ensureElement(settings.selectorOnline, container) as HTMLButtonElement;
		this._receipt = ensureElement(settings.selectorReceit, container) as HTMLButtonElement;

		this._online.addEventListener('click', () => {
			events.emit(EVENT.BROCKER_FORM_VALIDATOR, { field: 'payment', value: PaymentTypesEnums.ONLINE });
			this.togglePaymentType(this._online);
		});

		this._receipt.addEventListener('click', () => {
			events.emit(EVENT.BROCKER_FORM_VALIDATOR, { field: 'payment', value: PaymentTypesEnums.RECEIPT });
			this.togglePaymentType(this._receipt);
		});
	}

	/**
	 * Меняет активный тип оплаты. Если `button` - это `online`, то добавляет класс `active` online-элементу и удаляет его у receipt-элемента.
	 * Иначе - удаляет класс `active` у online-элемента и добавляет его у receipt-элемента.
	 * @param button - кнопка, которая была нажата
	 */
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

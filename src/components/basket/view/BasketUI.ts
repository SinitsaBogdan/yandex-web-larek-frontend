import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { createElement, ensureElement } from '../../../utils/utils';
import { IBasketSettings } from '../types/IBasketSettings';
import { IBasketView } from '../types/IBasketView';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class BasketUI extends Component<IBasketView> {
	private readonly settings: IBasketSettings;
	private _items: HTMLElement;
	private _button: HTMLButtonElement;
	private _total: HTMLSpanElement;

	constructor(protected container: HTMLElement, events: IEvents, settings: IBasketSettings) {
		super(container);
		this.settings = settings;

		this._items = ensureElement(settings.selectorList, container) as HTMLElement;
		this._button = ensureElement(settings.selectorButton, container) as HTMLButtonElement;
		this._total = ensureElement(settings.selectorPrice, container) as HTMLSpanElement;

		this._button.addEventListener('click', () => events.emit(EVENT.RENDER_ORDER_PAYMENT));
	}

	set total(value: number) {
		this.setText(this._total, `${value} синапсов`);
	}

	set items(value: HTMLElement[]) {
		if (value.length) {
			this._items.replaceChildren(...value);
		} else {
			this._items.replaceChildren(
				createElement<HTMLParagraphElement>('p', {
					textContent: 'Корзина пуста',
				})
			);
		}
	}

	set isActivButton(value: boolean) {
		this._button.disabled = !value;
	}
}

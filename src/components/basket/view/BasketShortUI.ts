import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { BasketShortView } from '../types/BasketShortView';
import { IBasketShortSettings } from '../types/IBasketShortSettings';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class BasketShortUI extends Component<BasketShortView> {
	private readonly settings: IBasketShortSettings;
	private _count: HTMLSpanElement;

	constructor(protected container: HTMLElement, events: IEvents, settings: IBasketShortSettings) {
		super(container);
		this.settings = settings;

		this._count = ensureElement(this.settings.selectorCounter, container) as HTMLSpanElement;

		this.container.addEventListener('click', () => events.emit(EVENT.RENDER_BASKET_FULL));
	}

	public set count(value: number) {
		this.setText(this._count, value);
	}
}

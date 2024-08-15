import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { ISuccessSettings } from '../types/ISuccessSettings';
import { ISuccessView } from '../types/ISuccessView';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

export class SuccessUI extends Component<ISuccessView> {
	private readonly settings: ISuccessSettings;
	private _title: HTMLElement;
	private _descriptions: HTMLElement;
	private _close: HTMLButtonElement;

	constructor(protected container: HTMLFormElement, events: IEvents, settings: ISuccessSettings) {
		super(container);
		this.settings = settings;

		this._title = ensureElement(this.settings.selectorTitle, container) as HTMLElement;
		this._descriptions = ensureElement(this.settings.selectorDescription, container) as HTMLElement;
		this._close = ensureElement(this.settings.selectorBtnClose, container) as HTMLButtonElement;

		this._close.addEventListener('click', () => events.emit(EVENT.MODAL_CLOSE));
	}

	public set title(value: string) {
		this.setText(this._title, value);
	}

	set descriptions(value: string) {
		this.setText(this._descriptions, value);
	}

	public set close(value: string) {
		this.setText(this._close, value);
	}
}

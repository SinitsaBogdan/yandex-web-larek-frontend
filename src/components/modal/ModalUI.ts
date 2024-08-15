import { Component } from '../../utils/base/Component';
import { IEvents } from '../../utils/base/Events';
import { ensureElement } from '../../utils/utils';
import { IModalSettings } from './types/IModalSettings';
import { IModalView } from './types/IModalView';
import { EventsEnum as EVENT } from '../../utils/enums/EventsEnum';

export class ModalUI extends Component<IModalView> {
	private readonly settings: IModalSettings;
	protected _close: HTMLButtonElement;
	protected _content: HTMLElement;

	constructor(protected container: HTMLElement, protected events: IEvents, settings: IModalSettings) {
		super(container);
		this.settings = settings;

		this._close = ensureElement<HTMLButtonElement>(settings.selectorClose, container);
		this._content = ensureElement<HTMLElement>(settings.selectorContent, container);

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') events.emit(EVENT.MODAL_CLOSE);
		});
		this._close.addEventListener('click', () => events.emit(EVENT.MODAL_CLOSE));
		this.container.addEventListener('click', (event) => {
			const withinBoundaries = event.composedPath().includes(this._content);
			if (!withinBoundaries) events.emit(EVENT.MODAL_CLOSE);
		});
	}

	set content(value: HTMLElement) {
		this._content.replaceChildren(value);
	}

	open(): void {
		this.container.classList.add(this.settings.classActive);
	}

	close(): void {
		this.content = null;
		this.container.classList.remove(this.settings.classActive);
	}

	render(data: IModalView): HTMLElement {
		super.render(data);
		this.open();
		return this.container;
	}
}

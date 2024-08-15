import { Component } from '../../utils/base/Component';
import { IEvents } from '../../utils/base/Events';
import { ensureElement } from '../../utils/utils';

export type PageView = {
	locked: boolean;
};

export type IPageSettings = {
	selectorWrapper: string;
	classNameWrapperLocked: string;
};

export class PageUI extends Component<PageView> {
	protected _wrapper: HTMLElement;
	protected settings: IPageSettings;

	constructor(container: HTMLElement, protected events: IEvents, settings: IPageSettings) {
		super(container);
		this.settings = settings;
		this._wrapper = ensureElement<HTMLElement>(settings.selectorWrapper);
	}

	set locked(value: boolean) {
		this._wrapper.classList.toggle(this.settings.classNameWrapperLocked, value);
	}
}

import { Component } from '../../utils/base/Component';
import { IEvents } from '../../utils/base/Events';
import { ensureElement } from '../../utils/utils';
import { IFormView } from './types/IFormView';
import { EventsEnum as EVENT } from '../../utils/enums/EventsEnum';

export abstract class FormUI<T> extends Component<IFormView> {
	protected _submit: HTMLButtonElement;
	protected _errors: HTMLElement;
	protected _next: string;

	constructor(protected container: HTMLFormElement, protected events: IEvents) {
		super(container);
		this._submit = ensureElement<HTMLButtonElement>('button[type=submit]', this.container);
		this._errors = ensureElement<HTMLElement>('.form__errors', this.container);

		this.container.addEventListener('input', (e: Event) => {
			const target = e.target as HTMLInputElement;
			const field = target.name as keyof T;
			const value = target.value;
			this.onInputChange(field, value);
		});

		this.container.addEventListener('submit', (e: Event) => {
			e.preventDefault();
			this.events.emit(this._next);
		});
	}

	set valid(value: boolean) {
		this._submit.disabled = !value;
	}

	set next(value: string) {
		this._next = value;
	}

	set errors(value: string) {
		this.setText(this._errors, value);
	}

	protected onInputChange(field: keyof T, value: string) {
		this.events.emit(EVENT.BROCKER_FORM_VALIDATOR, {
			field: field.toString(),
			value: value,
		});
	}

	render(state: Partial<T> & IFormView): HTMLFormElement {
		const { valid, errors, ...inputs } = state;
		super.render({ valid, errors });
		Object.assign(this, inputs);
		return this.container;
	}
}

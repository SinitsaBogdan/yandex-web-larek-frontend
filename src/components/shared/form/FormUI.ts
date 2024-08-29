import { Component } from '../../../utils/base/Component';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { TFormView } from './types/TFormView';
import { EventsEnum as EVENT } from '../../../utils/enums/EventsEnum';

/**
 * Класс `FormUI` - это абстрактный класс, расширяющий класс `Component`.
 * Он представляет собой компонент пользовательского интерфейса `form`, который можно использовать для отображения форм и управления ими.
 * Класс имеет три защищенных свойства: `_submit`, `_errors` и `_next`, которые представляют кнопку отправки, элемент ошибки и следующее событие соответственно.
 *
 * Конструктор: инициализирует компонент пользовательского интерфейса формы с помощью элемента контейнера и объекта events. Он настраивает прослушиватели событий для ввода и отправки событий.
 *
 * valid: Устанавливает отключенное состояние кнопки отправки на основе указанного значения.
 * next: Задает следующее событие, которое будет отправлено при отправке формы.
 * errors: Задает текстовое содержимое элемента error.
 * onInputChange: Отправляет событие для проверки формы при изменении поля ввода.
 * render: Отображает компонент пользовательского интерфейса формы в указанном состоянии и возвращает элемент контейнера.
 */
export abstract class FormUI<T> extends Component<TFormView> {
	/**
	 * Компонент кнопки отправки формы.
	 */
	protected _submit: HTMLButtonElement;

	/**
	 * Компонент элемента ошибки.
	 */
	protected _errors: HTMLElement;

	/**
	 * Объект следующего события.
	 */
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
		this.setDisabled(this._submit, !value);
	}

	set next(value: string) {
		this._next = value;
	}

	set errors(value: string) {
		this.setText(this._errors, value);
	}

	/**
	 * Отправляет событие для проверки формы при изменении поля ввода.
	 */
	protected onInputChange(field: keyof T, value: string) {
		this.events.emit(EVENT.BROCKER_FORM_VALIDATOR, {
			field: field.toString(),
			value: value,
		});
	}

	/**
	 * Рендерит компонент пользовательского интерфейса формы в указанном состоянии и возвращает элемент контейнера.
	 */
	render(state: Partial<T> & TFormView): HTMLFormElement {
		const { valid, errors, ...inputs } = state;
		super.render({ valid, errors });
		Object.assign(this, inputs);
		return this.container;
	}
}

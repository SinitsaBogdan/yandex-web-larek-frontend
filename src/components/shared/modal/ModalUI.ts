import { EventsEnum as EVENT } from './../../../utils/enums/EventsEnum';
import { TModalSettings } from './types/TModalSettings';
import { TModalView } from './types/TModalView';
import { IEvents } from '../../../utils/base/Events';
import { ensureElement } from '../../../utils/utils';
import { Component } from '../../../utils/base/Component';

/**
 * `ModalUI` расширяет класс `Component` и представляет пользовательский интерфейс (UI) для modal.
 *
 * Конструктор:
 * Инициализирует экземпляр ModalUI.
 * Он настраивает необходимые прослушиватели событий для закрытия модала (при нажатии клавиши Escape, при щелчке за пределами модала и при нажатии кнопки закрытия).
 *
 * @function open добавляет класс CSS в контейнер модального элемента, указывая, что модальный элемент активен и должен отображаться.
 * @function close Удаляет класс CSS из контейнера модального элемента, эффективно скрывая модальный элемент. Кроме того, он очищает содержимое модального элемента.
 * @function render Этот метод используется для рендеринга модального элемента. Он вызывает метод render родительского класса с предоставленными данными, открывает модальный модуль и возвращает контейнер.
 */
export class ModalUI extends Component<TModalView> {
	/**
	 * Параметр `settings` задает настройки для модального элемента.
	 * @param {TModalSettings} settings
	 */
	private readonly settings: TModalSettings;

	/**
	 * Поле `_close` содержит элемент HTML-кнопки для закрытия модального элемента.
	 */
	protected _close: HTMLButtonElement;

	/**
	 * Поле `_content` содержит элемент HTML для отображения содержимого модального элемента.
	 */
	protected _content: HTMLElement;

	_handleEscape = (evt: KeyboardEvent) => {
		if (evt.key === 'Escape') {
			this.close();
		}
	};

	constructor(protected container: HTMLElement, protected events: IEvents, settings: TModalSettings) {
		super(container);
		this.settings = settings;

		this._close = ensureElement<HTMLButtonElement>(settings.selectorClose, container);
		this._content = ensureElement<HTMLElement>(settings.selectorContent, container);

		this._close.addEventListener('click', () => events.emit(EVENT.MODAL_CLOSE));
		this.container.addEventListener('click', (event) => {
			const withinBoundaries = event.composedPath().includes(this._content);
			if (!withinBoundaries) events.emit(EVENT.MODAL_CLOSE);
		});
	}

	set content(value: HTMLElement) {
		this._content.replaceChildren(value);
	}

	/**
	 * Метод open добавляет класс CSS в контейнер модального элемента,
	 * указывая, что модальный элемент активен и должен отображаться.
	 */
	open(): void {
		document.addEventListener('keydown', this._handleEscape);
		this.toggleClass(this.container, this.settings.classActive, true);
	}

	/**
	 * Метод close очищает содержимое модального элемента и удаляет класс CSS,
	 * указывающий на активность модального элемента.
	 */
	close(): void {
		document.addEventListener('keydown', this._handleEscape);
		this.toggleClass(this.container, this.settings.classActive, false);
		this.content = null;
	}

	/**
	 * Метод render реализует рендеринг модального элемента.
	 */
	render(data: TModalView): HTMLElement {
		super.render(data);
		this.open();
		return this.container;
	}
}

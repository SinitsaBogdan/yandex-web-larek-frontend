import { Component } from '../../utils/base/Component';
import { IEvents } from '../../utils/base/Events';
import { ensureElement } from '../../utils/utils';
import { TPageSettings } from './types/TPageSettings';
import { TPageView } from './types/TPageView';

/**
 * Класс пользовательского интерфейса страницы расширяет класс `Component` и используется для управления пользовательским интерфейсом страницы.
 * У него есть два защищенных свойства: `_wrapper` (HTMLЭлемент) и `settings` (объект `TPageSettings`).
 *
 * Конструктор:
 * Инициализирует экземпляр `PageUI` с помощью элемента `container`, объекта events и объекта `settings`.
 * Он устанавливает для свойства `_wrapper` значение html элемента, соответствующего `selectorWrapper` в настройках.
 * setter locked: Переключает класс `classNameWrapperLocked` для элемента `_wrapper` на основе предоставленного логического значения.
 */
export class PageUI extends Component<TPageView> {
	/**
	 * Свойство `_wrapper` представляет собой HTML-элемент, из которого будет создан DOM-элемент страницы.
	 */
	protected _wrapper: HTMLElement;

	/**
	 * Объект `TPageSettings` содержит селекторы для настроек страницы.
	 */
	protected settings: TPageSettings;

	/**
	 * Конструктор.
	 * Инициализирует экземпляр `PageUI` с помощью элемента `container`, объекта events и объекта `settings`.
	 * Он устанавливает для свойства `_wrapper` значение html элемента, соответствующего `selectorWrapper` в настройках.
	 * @param container - HTML-элемент, из которого будет создан DOM-элемент страницы.
	 * @param events - объект событий, через который UI-компонент будет отправлять события.
	 * @param settings - объект настроек, содержащий селектор обертки (`selectorWrapper`) и класс для блокировки (`classNameWrapperLocked`).
	 */
	constructor(container: HTMLElement, protected events: IEvents, settings: TPageSettings) {
		super(container);
		this.settings = settings;
		this._wrapper = ensureElement<HTMLElement>(settings.selectorWrapper);
	}

	/**
	 * Setter для свойства `locked`.
	 * Переключает класс `classNameWrapperLocked` для элемента `_wrapper` на основе предоставленного логического значения.
	 * @param value - логическое значение, которое будет установлено для свойства
	 */
	set locked(value: boolean) {
		this.toggleClass(this._wrapper, this.settings.classNameWrapperLocked, value);
	}
}

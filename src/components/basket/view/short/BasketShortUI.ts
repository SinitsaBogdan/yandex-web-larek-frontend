import { Component } from '../../../../utils/base/Component';
import { IEvents } from '../../../../utils/base/Events';
import { ensureElement } from '../../../../utils/utils';
import { TBasketShortView } from './types/TBasketShortView';
import { TBasketShortSettings } from './types/TBasketShortSettings';
import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';

/**
 * Класс пользовательского интерфейса `BasketShort` расширяет класс `Component`
 * и используется для управления пользовательским интерфейсом в режиме просмотра корзины short.
 *
 * У него есть два частных свойства: `settings` и `_count`, а также конструктор,
 * который инициализирует компонент и настраивает прослушиватель событий.
 *
 * Конструктор:
 * Инициализирует компонент контейнером, событиями и настройками.
 * Он также настраивает прослушиватель событий в контейнере, который выдает событие при нажатии.
 *
 * set count: Устанавливает текстовое содержимое элемента `_count` равным указанному значению.
 */
export class BasketShortUI extends Component<TBasketShortView> {

    /**
     * Свойство `settings` содержит настройки компонента.
     */
	private readonly settings: TBasketShortSettings;

    /**
     * Свойство `_count` представляет собой HTML-элемент, который является счетчиком в корзине.
     */
	private _count: HTMLSpanElement;

	constructor(protected container: HTMLElement, events: IEvents, settings: TBasketShortSettings) {
		super(container);
		this.settings = settings;

		this._count = ensureElement(this.settings.selectorCounter, container) as HTMLSpanElement;

		this.container.addEventListener('click', () => events.emit(EVENT.RENDER_BASKET_FULL));
	}

	public set count(value: number) {
		this.setText(this._count, value);
	}
}

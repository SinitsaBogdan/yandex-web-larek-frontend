import { Component } from '../../../../utils/base/Component';
import { IEvents } from '../../../../utils/base/Events';
import { createElement, ensureElement } from '../../../../utils/utils';
import { TBasketFullSettings } from './types/TBasketFullSettings';
import { TBasketFullView } from './types/TBasketFullView';
import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';

/**
 * Класс BasketFullUI расширяет класс Component и используется для управления пользовательским интерфейсом корзины или шоппинг-трека.
 * У него есть три частных свойства: `_items`, `_button` и `_total`, которые представляют собой контейнер для элементов корзины,
 * кнопку для отображения оплаты заказа и элемент общей цены соответственно.

 * Конструктор: Инициализирует класс с помощью элемента `container`, объекта `events` и объекта `settings`.
 * Он устанавливает свойства `_items`, `_button` и `_total` и добавляет к кнопке прослушиватель событий,
 * который генерирует событие `RENDER_ORDER_PAYMENT` при нажатии.
 *
 * set total: Устанавливает текстовое содержимое элемента `_total` равным указанному значению, отформатированному в виде строки.
 * set items: Устанавливает содержимое контейнера `_items` в соответствии с предоставленным массивом HTML-элементов. Если массив пуст, отображается элемент `paragraph` с текстом "Корзина пуста".
 * set isActivButton: включает или отключает элемент `_button` на основе предоставленного логического значения.
 */

export class BasketFullUI extends Component<TBasketFullView> {
	private readonly settings: TBasketFullSettings;
	private _items: HTMLElement;
	private _button: HTMLButtonElement;
	private _total: HTMLSpanElement;

	constructor(protected container: HTMLElement, events: IEvents, settings: TBasketFullSettings) {
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
		this.setDisabled(this._button, !value);
	}
}

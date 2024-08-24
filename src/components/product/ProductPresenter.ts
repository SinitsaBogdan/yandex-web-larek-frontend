import { IProductApi } from './types/IProductApi';
import { IProductPresenter } from './types/IProductPresenter';
import { ProductModel } from './ProductModel';
import { IEvents } from '../../utils/base/Events';
import { TProductType } from './types/TProductType';

/**
 * Класс `ProductPresenter` - это универсальный класс, который принимает два параметра типа T и M.
 * Он реализует интерфейс `IProductPresenter` и отвечает за управление коллекцией элементов типа M.
 *
 * Конструктор: инициализирует презентатор экземпляром `Events` и необязательным экземпляром `IProductApi<T>`.
 *
 * @function createModel Создает новый экземпляр `ProductModel` из элемента типа T и возвращает его как тип M.
 * @function addItem Добавляет новый элемент типа T в коллекцию `presenter`, создавая новый экземпляр модели с помощью `createModel`.
 * @function getItem Извлекает элемент типа M из коллекции presenter по его идентификатору.
 * @function getAllItems Возвращает массив всех элементов типа M в коллекции презентатора.
 */
export class ProductPresenter<T, M> implements IProductPresenter<T, M> {
	/**
	 * Объукт API для работы с продуктами.
	 */
	api?: IProductApi<T>;

	/**
	 * Объект событий, который будет передан в родительский конструктор.
	 */
	events: IEvents;

	/**
	 * Коллекция элементов ( товаров ) типа M.
	 */
	private _items: Map<string, M> = new Map();

	/**
	 * @param events - Объект событий, который будет передан в родительский конструктор.
	 * @param api - Необязательный объект, который будет передан в родительский конструктор.
	 *
	 */
	constructor(events: IEvents, api?: IProductApi<T>) {
		this.events = events;
		this.api = api;
	}

	/**
	 * Создает новый экземпляр `ProductModel` из элемента типа T и возвращает его как тип M.
	 * @param item - Элемент типа T, который будет передан в конструктор `ProductModel`.
	 * @returns - Новый экземпляр `ProductModel` типа M.
	 */
	createModel(item: T): M {
		return new ProductModel(item, this.events) as M;
	}

	/**
	 * Добавляет новый элемент типа T в коллекцию `presenter`, создавая новый экземпляр модели с помощью `createModel`.
	 * @param item - Элемент типа T, который будет добавлен в коллекцию.
	 */
	addItem(item: T): void {
		this._items.set((item as TProductType).id, this.createModel(item));
	}

	/**
	 * Извлекает элемент типа M из коллекции presenter по его идентификатору.
	 * @param id - Идентификатор элемента, который необходимо извлечь.
	 * @returns - Элемент типа M, который был извлечен из коллекции.
	 */
	getItem(id: string): M {
		return this._items.get(id) as M;
	}

	/**
	 * Возвращает массив всех элементов типа M в коллекции презентатора.
	 * @returns - Массив всех элементов типа M.
	 */
	getAllItems(): M[] {
		return Array.from(this._items.values());
	}
}

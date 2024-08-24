/**
 * Интерфейс модели даннх о заказе.
 * @function addItem Добавляет элемент типа T в заказ. Параметр type T является параметром общего типа, что означает, что при реализации этого интерфейса его можно заменить на любой тип.
 * @function deleteItem Удаляет элемент типа T из заказа.
 * @function clear Удаляет все элементы из заказа.
 */
export interface IOrderModel<T> {
	addItem(item: T): void;
	deleteItem(item: T): void;
	clear(): void;
}

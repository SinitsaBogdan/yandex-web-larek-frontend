/**
 * Представление корзины в приложении.
 * С принимаемым типом данных T
 */
export type TBasketType<T> = {
	products: T[];
};

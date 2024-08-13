import { Component } from '../../utils/Component';

/**
 * Интерфейс представления каталога на странице
 * @property { ICatalogModel } model
 */
export interface ICatalogUI<ICatalogModel> extends Component<HTMLElement> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { ICatalogModel }
	 */
	_model: ICatalogModel;

	/**
	 * Контейнер под товары
	 * @type { HTMLElement }
	 */
	_list: HTMLElement;
}

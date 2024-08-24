/**
 * Класс Applications Model является универсальным классом,
 * который позволяет определять типы презентаторов и компонентов, которые будут использоваться приложении.
 *
 * Класс имеет два закрытых поля: `_presenters` и `_components`.
 * В этих полях хранятся экземпляры презентаторов и компонентов, которые будут использоваться в приложении.
 * В классе есть конструктор, который принимает два параметра: `presenters` и `components`.
 *
 * В классе также есть два метода `getter` и `setter` для полей `_presenters` и `_components`.
 * Методы `getter` позволяют извлекать текущие значения полей, в то время как методы `setter` позволяют обновлять значения полей.
 *
 * Таким образом, этот класс предоставляет способ управления презентаторами и компонентами,
 * используемыми в вашем приложении, а также позволяет вам легко получать к ним доступ и обновлять их.
 */
export class ApplicationsModel<P, C> {
	/**
	 * Коллекция презентаторов.
	 */
	private _presenters: P;

	/**
	 * Коллекция компонентов.
	 */
	private _components: C;

	constructor(presenters: P, components: C) {
		this._presenters = presenters;
		this._components = components;
	}

	public get presenters(): P {
		return this._presenters;
	}

	public set presenters(value: P) {
		this._presenters = value;
	}

	public get components(): C {
		return this._components;
	}

	public set components(value: C) {
		this._components = value;
	}
}

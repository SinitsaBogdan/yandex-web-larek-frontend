export class ApplicationsModel<P, C> {
	private _presenters: P;
	private _components: C;

	constructor(presenters: P, components?: C) {
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

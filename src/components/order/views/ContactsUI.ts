import { IEvents } from '../../../utils/base/Events';
import { FormUI } from '../../form/FormUI';
import { IOrderType } from '../types/IOrderType';

export class ContactsUI extends FormUI<IOrderType> {
	constructor(protected container: HTMLFormElement, protected events: IEvents) {
		super(container, events);
	}
}

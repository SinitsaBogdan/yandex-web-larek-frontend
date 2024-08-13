import { ICompletingModel, ICompletingUI } from "../../types/completing/CompletingType";
import { Component } from "../../utils/Component";
import { ensureElement } from "../../utils/utils";
import { IEvents } from "../base/events";

interface ICompletingActions {
    onClick: () => void;
}

type CompletingSetings = {
    img: string,
    title: string,
    descriptions: string,
    close: string,
    actions?: ICompletingActions
    events?: IEvents
}

export class CompletingUI extends Component<HTMLElement> implements ICompletingUI<ICompletingModel>  {
    _model: ICompletingModel;
    _img?: HTMLElement;
    _title: HTMLElement;
    _descriptions: HTMLElement;
    _close?: HTMLElement;
    
    constructor(model: ICompletingModel, protected events: IEvents, container: HTMLElement, settings: CompletingSetings) {
        super(container);
        this._model = model;
        this._img = ensureElement<HTMLElement>(settings.img, this.container);
        this._title = ensureElement<HTMLElement>(settings.title, this.container);
        this._descriptions = ensureElement<HTMLElement>(settings.descriptions, this.container);
        this._close = ensureElement<HTMLElement>(settings.close, this.container);

        if (settings?.actions?.onClick) {
            this._close.addEventListener('click', settings.actions.onClick);
        }
    }
}
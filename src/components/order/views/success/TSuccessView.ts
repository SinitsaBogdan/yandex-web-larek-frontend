/**
 * Тип данных представляющий объект с настройками для UI компонента `SuccessUI`.
 * @typedef TSuccessView
 * @property {string} title
 * @property {string} descriptions
 * @property {string} close
 * @description Тип данных представляющий объект с настройками для UI компонента `SuccessUI`.
 */
export type TSuccessView = {
	title?: string;
	descriptions: string;
	close?: string;
};

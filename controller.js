import View from './view.js';
import Model from './model.js';

export default class Controller {
	/**
	 * @param  {!Model} model A Model instance
	 * @param  {!View} view A View instance
	 */
	constructor(model, view) {
		this.model = model;
		this.view = view;

        view.bindAppendNumber( (...args) => {
			this.appendNumber(...args);
		});
        //view.bindAppendNumber(this.appendNumber.bind(this));
	}



	/**
	 * Append an number 
	 *
	 * @param {!string} number Number clicked
	 */
	appendNumber(number) {
		console.log(`Control: ${number} must be added`);
		this.model.appendNumber(number, (currentOperand) => {
			console.log(`Control: the view must be updated with ${currentOperand}`);
			this.view.updateCurrentOperand(currentOperand);
		});
	}

	

}
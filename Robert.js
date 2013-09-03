function Robert() {
	ClassUtil.inherit(Robert, this, Widget);
	this._super("Robert");

	// Manipulate HTML located in variable "this.widget" as needed here, before display.

	// This attaches the HTML to the current insert location
	this.attach();
}

// Write class methods like this
Robert.prototype.methodSample = function() {

};

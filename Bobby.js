function Bobby() {
	ClassUtil.inherit(Bobby, this, Widget);
	this._super("Bobby");

	// Manipulate HTML located in variable "this.widget" as needed here, before display.

	// This attaches the HTML to the current insert location
	this.attach();
}

// Write class methods like this
Bobby.prototype.methodSample = function() {

};

function Test2() {
	ClassUtil.inherit(Test2, this, Widget);
	this._super("Test2");

	// Manipulate HTML located in variable "this.widget" as needed here, before display.

	// This attaches the HTML to the current insert location
	this.attach();
}

// Write class methods like this
Test2.prototype.methodSample = function() {

};

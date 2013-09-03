function Test1() {
	ClassUtil.inherit(Test1, this, Widget);
	this._super("Test1");

	// Manipulate HTML located in variable "this.widget" as needed here, before display.

	// This attaches the HTML to the current insert location
	this.attach();
}

// Write class methods like this
Test1.prototype.methodSample = function() {

};

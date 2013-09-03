function Example() {
	ClassUtil.inherit(Example, this, Widget);
	this._super("Example");

	// Manipulate HTML located in variable "this.widget" as needed here, before display.

	// This attaches the HTML to the current insert location
	this.attach();
}

// Write class methods like this
Example.prototype.methodSample = function() {

};

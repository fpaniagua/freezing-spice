function DeleteMe() {
	ClassUtil.inherit(DeleteMe, this, Widget);
	this._super("DeleteMe");

	// Manipulate HTML located in variable "this.widget" as needed here, before display.

	// This attaches the HTML to the current insert location
	this.attach();
}

// Write class methods like this
DeleteMe.prototype.methodSample = function() {

};

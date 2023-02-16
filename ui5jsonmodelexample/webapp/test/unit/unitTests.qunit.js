/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsrinivasfeb9/ui5jsonmodelexample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

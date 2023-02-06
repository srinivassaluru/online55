/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsaphr/leaveapprove/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

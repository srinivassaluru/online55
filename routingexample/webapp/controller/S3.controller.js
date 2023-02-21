sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.srinivas.routingexample.controller.S3", {
            onInit: function () {

            },
            handleHome: function(){
                var routerobj = this.getOwnerComponent().getRouter();

                // use navto method ,                 // pass the name of the route


                routerobj.navTo("RouteS1");
            }
        });
    });

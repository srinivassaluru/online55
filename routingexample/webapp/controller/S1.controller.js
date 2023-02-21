sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.srinivas.routingexample.controller.S1", {
            onInit: function () {

            },
            handleNavigationToS2: function(){
                // get the router 
                var routerobj = this.getOwnerComponent().getRouter();

                // use navto method ,                 // pass the name of the route


                routerobj.navTo("S2Route");


            }
        });
    });

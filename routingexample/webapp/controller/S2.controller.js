sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.srinivas.routingexample.controller.S2", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("S2Route").attachPatternMatched(this.readMyValues, this);
            },

            readMyValues: function(oEvent){
                 var readParametersFromS1 = oEvent.getParameter("arguments");
                 console.log(readParametersFromS1);

            },
            handleNavigateToS3: function(){
                   // get the router 
                   var routerobj = this.getOwnerComponent().getRouter();

                   // use navto method ,                 // pass the name of the route
   
   
                   routerobj.navTo("s3Route");
   
            }
        });
    });

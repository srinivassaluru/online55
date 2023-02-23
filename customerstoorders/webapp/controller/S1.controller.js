sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ui5.srinivas.customerstoorders.controller.S1", {
            onInit: function () {
              var localModel = new JSONModel();
              localModel.setProperty("/customersCount", 0);
              this.getView().setModel(localModel, "localModel");
            },
            handleListUpdate: function(oEvent){
                var total = oEvent.getParameter("total");
                var localModel = this.getView().getModel("localModel");
                localModel.setProperty("/customersCount", total);                
            },
            handleCustomerSelect: function(oEvent){
                var selectedItem = oEvent.getParameter("listItem");
                var selectedItemContext = selectedItem.getBindingContext().getPath();
                var routerobj = this.getOwnerComponent().getRouter();
                routerobj.navTo("orderDetails",{
                    customerContext: selectedItemContext.substr(1)
                });

            }
        });
    });

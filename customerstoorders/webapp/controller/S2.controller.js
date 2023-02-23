sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ui5.srinivas.customerstoorders.controller.S2", {
            onInit: function () {
                var routerobj = this.getOwnerComponent().getRouter();
                routerobj.getRoute("orderDetails").attachPatternMatched(this.readMyValues, this);
            },
            readMyValues: function(oEvent){
                var readParametersFromS1 = oEvent.getParameter("arguments");
                console.log(readParametersFromS1);
                this.displayOrders("/"+readParametersFromS1.customerContext); // path = "//Customers('SAVEA')"
           },

           displayOrders: function(sPath){
              // Display Table Data at run time -> /Customers('SAVEA') ? expand = orders
              var tableObj = this.getView().byId("orderTable");
              var oModel = this.getView().getModel();
            //   oModel.read()
              // Approach1 
            //   tableObj.bindAggregation("items", {
            //         path:sPath,
            //         parameters : {expand: "Orders"},
            //         template: new sap.m.ColumnListItem({
            //             cells:[
            //                 new sap.m.Text({
            //                     text:"{OrderID}"
            //                 }),
            //                 new sap.m.Text({
            //                     text:"{EmployeeID}"
            //                 }),
            //                 new sap.m.Text({
            //                     text:"{OrderDate}"
            //                 }),
            //                 new sap.m.Text({
            //                     text:"{RequiredDate}"
            //                 }),
            //                 new sap.m.Text({
            //                     text:"{ShipName}"
            //                 }),
            //                 new sap.m.Text({
            //                     text:"{ShipAddress}"
            //                 }),

            //             ]
            //         })
            //   });

           }

        });
    });

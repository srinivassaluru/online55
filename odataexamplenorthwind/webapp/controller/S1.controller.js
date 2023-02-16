sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter', 
    'sap/ui/model/FilterOperator',  // imported json model class
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,  Filter, FilterOperator, JSONModel) {
        "use strict";

        return Controller.extend("com.srinivas.sd.odataexamplenorthwind.controller.S1", {
            onInit: function () {
                this.getView().setBusy(true);
                var jsonModel = new JSONModel();
                // alert(actualCount);
                this.getView().setModel(jsonModel,"localModel");
            },
            handleProductNameSearch: function(oEvent){
                var query = oEvent.getParameter("query");
                // alert(query);
                
                var aFilter = new Filter({
                    path: "ProductName",
                    operator: FilterOperator.Contains,
                    value1: query
                  });
                
                var leaveList = this.getView().byId("productList"); // <List mode="SingleSelectMaster" selectionChange="handleList" items="{localModel>/leaves}" id="leaveList">
                var itemsObj = leaveList.getBinding("items");
                itemsObj.filter([aFilter]);
            },

            handleIconTabSelect: function(oEvent){
                var sKey = oEvent.getParameter("key");
                // alert(sKey);
                if(sKey === "suppliers"){

                    var aFilter = new Filter({
                        path: "SupplierID",
                        operator: FilterOperator.Contains,
                        value1: this._supplierID
                      });
                    
                    var leaveList = this.getView().byId("supplierTable"); // <List mode="SingleSelectMaster" selectionChange="handleList" items="{localModel>/leaves}" id="leaveList">
                    var itemsObj = leaveList.getBinding("items");
                    // itemsObj.filter([aFilter]);

                }
            },
            handleProductListSelection: function(oEvent){
                var sSelectedItem = oEvent.getParameter("listItem"); // Selected Item
                // Approach 1 - Manually 
                // var sProductId = sSelectedItem.getTitle(); // ProductName 
                // var sProductId = sSelectedItem.getAttribute();
                // var sProductId = sSelectedItem.getAttributes()[0].getText();
                //Approach 2 - Read All parameter from Model based 
                var sObject = this.getView().getModel("odataModelNorthwind").getProperty(sSelectedItem.getBindingContextPath())
                // alert(sObject.ProductID);
                this._supplierID  = sObject.SupplierID;
            },

            handleListUpdateFinished: function(oEvent){
                this.getView().setBusy(false);
                var actualCount = oEvent.getParameter("total");
                var jsonModel = this.getView().getModel("localModel");
                jsonModel.setProperty("/listProductCount", actualCount);
               

            },
            handleTableUpdateFinished: function(oEvent){
                this.getView().setBusy(false);
                var actualCount = oEvent.getParameter("total");
                var jsonModel = this.getView().getModel("localModel");
                jsonModel.setProperty("/tableSupplierCount", actualCount);
               

            }
        });
    });

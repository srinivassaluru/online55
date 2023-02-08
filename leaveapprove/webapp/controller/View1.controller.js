sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel",
    'sap/ui/model/Filter', 
    'sap/ui/model/FilterOperator'  // imported json model class
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ODataModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.sap.hr.leaveapprove.controller.View1", {
            onInit: function () {
                var leavesData = [
                    {
                        "name": "Susheel",
                        "leaveType": "SickLeave",
                        "leaveDays": 5
                    },
                    {
                        "name": "Sarath",
                        "leaveType": "EarnedLeave",
                        "leaveDays": 7
                    },
                    {
                        "name": "Venu",
                        "leaveType": "CasualLeave",
                        "leaveDays": 9
                    },
                    {
                        "name": "Lohith",
                        "leaveType": "PersonalLeave",
                        "leaveDays": 1
                    }];

                // console.log(leavesData);

                // var jsonModel = new sap.ui.model.json.JSONModel(); // legacy approach 

                var jsonModel = new JSONModel(); 


                jsonModel.setData({
                    "leaves": leavesData,
                    "leaveTypes": [
                        {
                            "leaveType": "SickLeave",
                            "leaveCode": "0001"
                        },
                        {
                            "leaveType": "EarnedLeave",
                            "leaveCode": "0002"
                        },
                        {
                            "leaveType": "CasualLeave",
                            "leaveCode": "0003"
                        }
                    ]
                });

                var viewObj = this.getView();

                // viewObj.setModel(jsonModel); // Default Model 

                viewObj.setModel(jsonModel, "localModel"); // Named Model 

            },
            handleList: function (oControlEvent) { // pass as an argument to read the same control object to capture 
                // alert("dsadasd");
                var approveBtnSource = this.getView().byId("approveBtn"); // Approve Btn Object 

                approveBtnSource.setEnabled(true);

                var rejectBtnSource = this.getView().byId("rejectBtn"); // Approve Btn Object 

                rejectBtnSource.setEnabled(true);

                var selectedItem = oControlEvent.getParameter("listItem"); // Returned Standard List Item 

                console.log(selectedItem.getTitle());



                // var x = ["Susheel", 28, "M", 5.7];

                // console.log(x[6]);

                // for (var i in x) {
                //     console.log("In Side For loop");
                //     console.log(x[i]);
                // }

                // var y = {
                //     "name": "Susheel",
                //     "Age": 28,
                //     "Gender": "M",
                //     "Height": 5.7
                // };

                // console.log(y.name);

                // for (var i in x) {
                //     console.log("In Side For loop for object");
                //     console.log(x[i]);
                // }

                // var studentsData = [
                //     {
                //         "name": "Susheel",
                //         "Age": 28,
                //         "Gender": "M",
                //         "Height": 5.7
                //     },
                //     {
                //         "name": "Susheel",
                //         "Age": 28,
                //         "Gender": "M",
                //         "Height": 5.7
                //     },
                //     {
                //         "name": "Susheel",
                //         "Age": 28,
                //         "Gender": "M",
                //         "Height": 5.7
                //     },
                //     {
                //         "name": "Susheel",
                //         "Age": 28,
                //         "Gender": "M",
                //         "Height": 5.7
                //     }
                // ];
                // console.log(studentsData);
            },

            handleNabButton: function () {
                alert("Navigating");
            },
            // Selection Change COde for Drop Down 
            handleLeaveTypeChange: function(oContrlEvent){
             
                var selectedItem = oContrlEvent.getParameter("selectedItem"); //  <core:Item text="{localModel>leaveType}" />
                var leaveType = selectedItem.getText(); // {localModel>leaveType}
               // alert(leaveType);

                var aFilter = new Filter({
                    path: "leaveType",
                    operator: FilterOperator.EQ,
                    value1: leaveType
                  });
                
                var leaveList = this.getView().byId("leaveList"); // <List mode="SingleSelectMaster" selectionChange="handleList" items="{localModel>/leaves}" id="leaveList">
                var itemsObj = leaveList.getBinding("items");
                itemsObj.filter([aFilter]);


            },
            //Button for refresh the leves list 
            handleListRefresh: function(){

                var leaveList = this.getView().byId("leaveList"); // <List mode="SingleSelectMaster" selectionChange="handleList" items="{localModel>/leaves}" id="leaveList">
                var itemsObj = leaveList.getBinding("items");
                itemsObj.filter([]); // previous state of list 

                // Get the dropdown object 
                var leaveTypeSelect = this.getView().byId("leaveTypeSelect");
                leaveTypeSelect.setSelectedKey("");
            },

            // handleSearch

            handleSearch: function(oEvent){
                var query = oEvent.getParameter("query");
                // alert(query);
                
                var aFilter = new Filter({
                    path: "name",
                    operator: FilterOperator.Contains,
                    value1: query
                  });
                
                var leaveList = this.getView().byId("leaveList"); // <List mode="SingleSelectMaster" selectionChange="handleList" items="{localModel>/leaves}" id="leaveList">
                var itemsObj = leaveList.getBinding("items");
                itemsObj.filter([aFilter]);
            }
        });
    });

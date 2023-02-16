sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.srinivas.feb9.ui5jsonmodelexample.controller.View1", {
            onAfterRendering: function(){
                console.log("After");
            },
            onInit: function () { // During the Initilization of the Application
                // console.log("INit");

                // var empData = {
                //         "employeesData":[
                //             {
                //                 "empName":"Sarath",
                //                 "empId":1000,
                //                 "departName":"CSE",
                //                 "empSalary":12344
                //             },
                //             {
                //                 "empName":"Suheel",
                //                 "empId":1001,
                //                 "departName":"ECE",
                //                 "empSalary":12344
                //             },
                //             {
                //                 "empName":"Lohith",
                //                 "empId":1001,
                //                 "departName":"EEE",
                //                 "empSalary":12344
                //             },
                //             {
                //                 "empName":"VENU",
                //                 "empId":1004,
                //                 "departName":"CSE",
                //                 "empSalary":12344
                //             },
                //             {
                //                 "empName":"Sarath",
                //                 "empId":1000,
                //                 "departName":"CSE",
                //                 "empSalary":12344
                //             }
                //         ]
                // };

                // // Step2 InitlizeJSONModel, setData to Model
                // var jsonModel = new JSONModel();
                // jsonModel.setData(empData); // { "" : [] ,  "": [] }

                // //Step3 -> setModel to View 
                // // var view = this.getView();
                // // view.setModel(jsonModel);

                // // this.getView().setModel(jsonModel); defaultModel

                // this.getView().setModel(jsonModel, "dummyDataModel");




            },
            onBeforeRendering: function(){
                console.log("Before");
            },
            onExit: function(){
                console.log("Exit");
            }
        });
    });

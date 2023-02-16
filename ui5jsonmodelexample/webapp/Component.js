/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/srinivas/feb9/ui5jsonmodelexample/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.srinivas.feb9.ui5jsonmodelexample.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // this.loadJsonDataGlobally();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },

            loadJsonDataGlobally: function(){

                var empData = {
                        "employeesData":[
                            {
                                "empName":"Sarath",
                                "empId":1000,
                                "departName":"CSE",
                                "empSalary":12344
                            },
                            {
                                "empName":"Suheel",
                                "empId":1001,
                                "departName":"ECE",
                                "empSalary":12344
                            },
                            {
                                "empName":"Lohith",
                                "empId":1001,
                                "departName":"EEE",
                                "empSalary":12344
                            },
                            {
                                "empName":"VENU",
                                "empId":1004,
                                "departName":"CSE",
                                "empSalary":12344
                            },
                            {
                                "empName":"Sarath",
                                "empId":1000,
                                "departName":"CSE",
                                "empSalary":12344
                            }
                        ]
                };

                // Step2 InitlizeJSONModel, setData to Model
                var jsonModel = new JSONModel();
                jsonModel.setData(empData); // { "" : [] ,  "": [] }

                //Step3 -> setModel to View 
                // var view = this.getView();
                // view.setModel(jsonModel);

                // this.getView().setModel(jsonModel); defaultModel

                this.setModel(jsonModel, "dummyDataModel");
            }
        });
    }
);
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.hr.leaveapprove.controller.View1", {
            onInit: function () {
                var leavesData = [{
                    "name":"Susheel",
                    "leaveType":"SickLeave",
                    "leaveDays":5
                },
                {
                    "name":"Sarath",
                    "leaveType":"EarnedLeave",
                    "leaveDays":7
                },
                {
                    "name":"Venu",
                    "leaveType":"CasualLeave",
                    "leaveDays":9
                },
                {
                    "name":"Lohith",
                    "leaveType":"PersonalLeave",
                    "leaveDays":1
                }];

                console.log(leavesData);

                var jsonModel = new sap.ui.model.json.JSONModel();

                jsonModel.setData(leavesData);

                var viewObj = this.getView();

                viewObj.setModel(jsonModel);
            },
            handleList: function () {
                // alert("dsadasd");
                var approveBtnSource = this.getView().byId("approveBtn"); // Approve Btn Object 

                approveBtnSource.setEnabled(true);

                var rejectBtnSource = this.getView().byId("rejectBtn"); // Approve Btn Object 

                rejectBtnSource.setEnabled(true);

                var x = ["Susheel", 28, "M", 5.7];

                console.log(x[6]);

                for (var i in x) {
                    console.log("In Side For loop");
                    console.log(x[i]);
                }

                var y = {
                    "name": "Susheel",
                    "Age": 28,
                    "Gender": "M",
                    "Height": 5.7
                };

                console.log(y.name);

                for (var i in x) {
                    console.log("In Side For loop for object");
                    console.log(x[i]);
                }

                var studentsData = [
                    {
                        "name": "Susheel",
                        "Age": 28,
                        "Gender": "M",
                        "Height": 5.7
                    },
                    {
                        "name": "Susheel",
                        "Age": 28,
                        "Gender": "M",
                        "Height": 5.7
                    },
                    {
                        "name": "Susheel",
                        "Age": 28,
                        "Gender": "M",
                        "Height": 5.7
                    },
                    {
                        "name": "Susheel",
                        "Age": 28,
                        "Gender": "M",
                        "Height": 5.7
                    }
                ];
                console.log(studentsData);
            }
        });
    });

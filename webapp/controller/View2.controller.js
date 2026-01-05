sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.zsapui5.controller.View2", {
       onNavBack: function () {
      //this.getOwnerComponent().getRouter().navTo("RouteView1");     //navTo takes only the routename
      history.go(-1);               //better way for a nav back scenario
    }
    });
});
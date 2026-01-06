sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.clientname.zsapui5.controller.View1", {

    onInit(){
      this.initialWelcomeTxt = this.getView().byId("idWelcomTxt").getText();   //controller variable
    },

    onNavToView2: function () {
      this.getOwnerComponent().getRouter().navTo("RouteView2");     //navTo takes only the routename
    },
    onPressSubmit: function(){
      var name = this.getView().byId("idInpName").getValue();   //get the input value
      var welcomeMsg = name + "-" + this.initialWelcomeTxt  //get the text ui element
      
      //now set the concantenated message back to the ui element
      this.getView().byId("idWelcomTxt").setText(welcomeMsg);
    }
  });
});

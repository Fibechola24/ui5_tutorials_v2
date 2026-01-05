sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.clientname.zsapui5.controller.View1", {
    onNavToView2: function () {
      this.getOwnerComponent().getRouter().navTo("RouteView2");     //navTo takes only the routename
    }
  });
});

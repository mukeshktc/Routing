sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"kmn/rt/model/models"
], function(Controller, model) {
	"use strict";

	return Controller.extend("kmn.rt.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kmn.rt.view.App
		 */
			onInit: function() {
					/*var oModel = model.createFruitModel();
					this.getView().setModel(oModel);*/
					// var oApp = this.getView().byId("myApp");
					// var oView1 = new sap.ui.view({
					// 	id:"idView1",
					// 	viewName:"kmn.rt.view.View1",
					// 	type:"XML"
					// });
					// var oView2 = new sap.ui.view({
					// 	id:"idView2",
					// 	viewName:"kmn.rt.view.View2",
					// 	type:"XML"
					// });
					// var oEmpty = new sap.ui.view({
					// 	id:"idEmpty",
					// 	viewName:"kmn.rt.view.Empty",
					// 	type:"XML"
					// });
					// oApp.addMasterPage(oView1);
					// oApp.addDetailPage(oView2);
					// oApp.addDetailPage(oEmpty);
					// oApp.setInitialDetail("idEmpty");
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kmn.rt.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kmn.rt.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kmn.rt.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});
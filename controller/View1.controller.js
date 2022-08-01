sap.ui.define([
	"kmn/rt/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("kmn.rt.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kmn.rt.view.View1
		 */
			onInit: function() {
				//this.oRouter=sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter  = this.getOwnerComponent().getRouter();
			},
			
			
			onSearch: function(oEvent){
				var sQuery =oEvent.getParameter("query");
				if(!sQuery){
					sQuery = oEvent.getParameter("newValue");
				}
				var oFilter1 = new Filter("name", FilterOperator.Contains, sQuery);
				var oFilter2 = new Filter("benefit", FilterOperator.Contains, sQuery);
				var mainFilter = new Filter({
					filters:[oFilter1, oFilter2],
					and:false
				});
				var aFilter = [mainFilter];
				var oList = this.getView().byId("myList");
				oList.getBinding("items").filter(aFilter);          
			},
			onPress: function(oEvent){
				//var oApp = this.getAppObject();
				var oItem = oEvent.getParameter("listItem");
				var sPath = oItem.getBindingContextPath();
				var sItemIndex = sPath.split("/")[sPath.split("/").length - 1];
				
				//var oView2 = oApp.getDetailPages()[0];
				//oView2.bindElement(sPath);
				// oApp.to("idView2");
				this.oRouter.navTo("detail",{
					fruitId: sItemIndex
				});
				console.log(sPath);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kmn.rt.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kmn.rt.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kmn.rt.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});
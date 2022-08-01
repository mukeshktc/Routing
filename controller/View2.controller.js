sap.ui.define([
	"kmn/rt/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("kmn.rt.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kmn.rt.view.View2
		 */
		onInit: function() {
			//this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.hercules, this);
		},
		hercules: function(oParams) {

			var sPath = oParams.getParameters().arguments.fruitId;
			//var oIndex = sPath;
			sPath = "/fruits/" + sPath;
			this.getView().bindElement(sPath);
			//sap.ui.getCore().byId("__xmlview1--myList").getItems()[oIndex].setSelected(true);
			//console.log(oParams);
		},
		onFilter: function() {
			//MessageToast.show("under construction");
			this.countryPopup = new sap.ui.xmlfragment("kmn.rt.fragments.Popup", this);
			this.getView().addDependent(this.countryPopup);
			this.countryPopup.bindAggregation("items", {
				path: "/countries",
				template: new sap.m.StandardListItem({
					title: "{name}",
					description: "{code}"
				})
			});
			this.countryPopup.open();
		},
		onCityConfirm: function(oEvent) {
			var oItem = oEvent.getParameter("selectedItem");
			sap.ui.getCore().byId(this.inputFieldIdOnWhichF4inTableWasPressed).setValue(oItem.getTitle());
		},
		onF4Help: function(oEvent) {
			//MessageToast.show("under construcion");
			this.inputFieldIdOnWhichF4inTableWasPressed = oEvent.getSource().getId();
			this.cityPopup = new sap.ui.xmlfragment("kmn.rt.fragments.Popup", this);
			this.getView().addDependent(this.cityPopup);
			this.cityPopup.bindAggregation("items", {
				path: "/cities",
				template: new sap.m.StandardListItem({
					title: "{city}",
					description: "{famousFor}"
				})
			});
			this.cityPopup.attachConfirm(this.onCityConfirm, this);
			this.cityPopup.open();
		},
		onTableClick: function(oEvent) {
				// var oApp = this.getAppObject();
				var oItem = oEvent.getParameter("listItem");
				var sPath = oItem.getBindingContextPath();
				var sTableIndex = sPath.split("/")[sPath.split("/").length - 1];
				// var oView3 = oApp.getDetailPages()[1];
				// oView3.bindElement(sPath);
				this.oRouter.navTo("view3", {
					suppId: sTableIndex
				});
			},
			onApprove: function(){
				MessageBox.confirm("Would you like to approve Sir?",{
					icon:MessageBox.Icon.SUCCESS,
					onClose: function(choice){
						if(choice==="OK"){
						MessageToast.show("Your Application has been approved!!");
					}
					else {
						MessageToast.show("Approval failed :(");
					}
					}
				});
			},
			onReject: function(){
				MessageBox.confirm("Are you sure to reject Sir?",{
					icon:MessageBox.Icon.WARNING,
					onClose: function(choice){
						if(choice==="OK"){
						MessageToast.show("Your Application has been rejected:(");
					}
					else {
						MessageToast.show("ERROR!!");
					}
					}
				});
			},
			onHover: function(){
				MessageToast.show("Hey you just Hovered Man");
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf kmn.rt.view.View2
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kmn.rt.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kmn.rt.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});
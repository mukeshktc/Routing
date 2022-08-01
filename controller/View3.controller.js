sap.ui.define([
	"kmn/rt/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("kmn.rt.controller.View3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kmn.rt.view.View3
		 */
		onInit: function() {
			this.Router = this.getOwnerComponent().getRouter();
			this.Router.attachRoutePatternMatched(this.supplierData, this);
		},
		supplierData: function(oParams) {
			var sPath = oParams.getParameters().arguments.suppId;
			sPath = "/suppliers/" + sPath;
			this.getView().bindElement(sPath);
		},
		oMap: null,

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kmn.rt.view.View3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kmn.rt.view.View3
		 */
		onAfterRendering: function() {
			if (this.oMap === null) {
				this.oMap = new google.maps.Map(document.getElementById("mukesh"), {
					zoom: 10,
					center: {
						lat: 14.18,
						lng: 77.76
					}
				});
			}
		},
		onMapSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			var oGeoCoder = new google.maps.Geocoder();
			var that = this;
			oGeoCoder.geocode({
					address: sQuery
				},

				function(results, status) {
					if (status === "OK") {
						var firstItem = results[0];
						var loc = {
							lat: firstItem.geometry.location.lat(),
							lng: firstItem.geometry.location.lng()
						};
						that.oMap.setCenter(loc);

						new google.maps.Marker({
							map: that.oMap,
							title: sQuery,
							position: loc
						});
					}
				}

			);

		}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kmn.rt.view.View3
		 */
		//	onExit: function() {
		//
		//	}

	});

});
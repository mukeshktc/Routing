sap.ui.define(
	["sap/ui/core/UIComponent"],

	function(UIComponent) {

		return UIComponent.extend("kmn.rt.Component", {
			
			metadata:{
				"manifest":"json"
			},
			init: function() {
				UIComponent.prototype.init.apply(this);
				var oRouter= this.getRouter();
				oRouter.initialize();
			},
			/*createContent: function() {
				var oAppView = new sap.ui.view("idApp", {
					viewName: "kmn.rt.view.App",
					type: "XML"
				});
				return oAppView;
			},*/
			destroy: {

			}
		});
	});
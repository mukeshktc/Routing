sap.ui.define(
	["sap/ui/core/mvc/Controller"],
		
			function(Controller){
					
					return Controller.extend("kmn.rt.controller.BaseController",{
						
						getAppObject: function(){
							return this.getView().getParent().getParent();
						}
					});
});
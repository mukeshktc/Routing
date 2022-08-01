sap.ui.define(
	[], 

			function(){
				sap.ui.core.Control.extend("kmn.rt.controls.maps",{
					
					metadata:{
						
					},
					init: function(){
						
					},
					renderer:function(oRm, oControl){
						oRm.write("<div id='mukesh' style='width:98%; height:650px; border:2px solid red'></div>");
					}
				});
});
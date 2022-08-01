sap.ui.define(
	[], 
			function(){
				sap.ui.core.Control.extend("kmn.rt.controls.CustomControl",{
					
					metadata:{
						properties:{
							"mario":"",
							"color":"",
							"zumba":""
						}
					},
					init: function(){
						
					},
					renderer:function(oRM, oControl){
						//oRM.write("<h1 style='color:" + oControl.getColor() +"'>"+ oControl.getMario() +"</h1>");
						oRM.write("<h1");
						oRM.addStyle("color", oControl.getColor());
						oRM.addStyle("border", oControl.getZumba());
						oRM.writeStyles();
						oRM.write(">" + oControl.getMario() + "</h1>");
						
					}
				});
});
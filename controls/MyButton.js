sap.ui.define(
	[], 
			function(){
					
					sap.m.Button.extend("kmn.rt.controls.MyButton",{
						
						metadata:{
							events:{
								"bobba":{}
							}
						},
						init:function(){
							
						},
						renderer:{},
						onmouseover: function(){
							this.fireBobba();
						}
						
					});
});
sap.ui.jsview("zui5_with_mvc.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_with_mvc.main
	*/ 
	getControllerName : function() {
		return "zui5_with_mvc.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_with_mvc.main
	*/ 
	createContent : function(oController) {
		var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed:true,
			width:'800px',
			columns:4,
			widths:['200px','200px','200px','200px']
		});
		var oBlueButton = new sap.ui.commons.Button({
			text:"Crystal Blue",
			id:"blue",
			press:function(oEvent){oController.buttonPressed(oEvent);}
		});
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
		oCell.addContent(oBlueButton);
		oRow.addCell(oCell);
		oLayout.addRow(oRow);
		//return oBlueButton;
		var oGoldButton = new sap.ui.commons.Button({
			text:"Gold Reflection",
			id:"gold",
			press:function(oEvent){oController.buttonPressed(oEvent);}
		});
		oCell.addContent(oGoldButton);
		oRow.addCell(oCell);
		//return oBlueButton;
		oLayout.addRow(oRow);
		return oLayout;
	}

});

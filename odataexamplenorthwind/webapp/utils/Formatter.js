sap.ui.define(function() {
	"use strict";

	var Formatter = {

		applyStateStatus :  function (sStatus) {
				if(sStatus > 50){
               return "Error";
            }else{
               return "Success";
            }
		},
      cascadeToUpper: function(sValue){
         return sValue.toUpperCase();
      }

      // ..
      // .
      // .
      // .
      // .
      // .
      // .
      // .
	};

	return Formatter;

},  /* bExport= */ true);

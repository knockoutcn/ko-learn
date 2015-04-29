$(function(){
	(function(){
		var viewModel = {
	        shouldShowMessage: ko.observable(true) 
	    };
	    //viewModel.shouldShowMessage(false); 
	    ko.applyBindings(viewModel,$('#id-visible')[0]);
	})();

	(function(){
		var viewModel = {
	        myMessage: ko.observable() 
	    };
	    viewModel.myMessage("Hello, world!"); 
	    ko.applyBindings(viewModel,$('#id-text')[0]);
	})();

	(function(){
		var viewModel = {
	        details: ko.observable() 
	    };
	    viewModel.details("<p>knockout中文站的地址是 <a href='http://knockoutcn.github.io' target='blank'>here</a>.</p>"); 
	    ko.applyBindings(viewModel,$('#id-html')[0]);
	})();

	(function(){
		var viewModel = {
	        currentProfit: ko.observable(150000) // Positive value, so initially we don't apply the "profitWarning" class
	    };
	    viewModel.currentProfit(-50); 
	    ko.applyBindings(viewModel,$('#id-css')[0]);
	})();

	(function(){
		var viewModel = {
	        currentProfit: ko.observable(150000) // Positive value, so initially we don't apply the "profitWarning" class
	    };
	    viewModel.currentProfit(-50); 
	    ko.applyBindings(viewModel,$('#id-style')[0]);
	})();
	
	(function(){
		var viewModel = {
	        url: ko.observable("http://knockoutcn.github.io"),
	        details: ko.observable("knockout 中文站"),
	        target :  ko.observable("blank")
	    };
	    ko.applyBindings(viewModel,$('#id-attr')[0]);
	})();

})
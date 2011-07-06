
fcViews.basicList = ListView;

function ListView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicList');
	var opt = t.opt;
	var renderBasic = t.renderBasic;



	function render(date, delta) {
		var start = cloneDate(date);
		var end = addMonths(cloneDate(start), 4);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		// if (!weekends) {
		// 	skipWeekend(visStart);
		// 	skipWeekend(visEnd, -1, true);
		// }
		t.title = 'List';
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(50, 50, 7, true);
	}


}

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
		if (delta) {
			addDays(date, delta);
		}
		t.title = formatDate(date, opt('titleFormat'));
		t.start = cloneDate(date, true);
		t.end = addMonths(cloneDate(t.start), 5);
		t.visStart = cloneDate(t.start);
		t.visEnd = cloneDate(t.end);
		renderBasic(5, 5, 7, true);
	}


}
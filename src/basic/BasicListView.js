
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
			if (!opt('weekends')) {
				skipWeekend(date, delta < 0 ? -1 : 1);
			}
		}
		t.title = formatDate(date, opt('titleFormat'));
		var start = cloneDate(date, true);
		var end = addMonths(cloneDate(start), 5);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var firstDay = opt('firstDay');
		renderBasic(5, 5, 1, true);
	}


}
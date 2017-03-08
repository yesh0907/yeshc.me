$(document).ready(function() {
	var date = new Date();
	$('.date').text(date.getFullYear());

	var options = [
	{selector: '.my-pic', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '.header', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '#about', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '#projects', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '#contact', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} }
	];
	Materialize.scrollFire(options);

	$('.nav-links').click(function(e) {
		if (this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			})
		}
	});
});
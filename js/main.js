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

	$('#send').click(function(e) {
		e.preventDefault();

		$.ajax({
			url: 'php/mail.php',
			method: 'POST',
			data: { name: $('#name').val(), subject: $('#subject').val(), email: $('#email').val(), message: $('#message').val() },
			success: function(data) {
				data = JSON.parse(data);

				if (data['error'] === 'false') {
					Materialize.toast('Email Successfully Sent!', 4000);
				}
				else {
					Materialize.toast('Failed to send email. Try again later', 4000);
				}
			},
			error: function(error) {
				console.log(error);
			}
		});

		$('#name').val('');
		$('#subject').val('');
		$('#email').val('');
		$('#message').val('');
	});
});
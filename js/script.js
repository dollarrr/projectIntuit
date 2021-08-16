$(document).ready(function(){

	$('#val1').text(JSON.parse(localStorage.getItem('val1')));
	$('#val2').text(JSON.parse(localStorage.getItem('val2')));

	$('#btn1').click(function(event){
		event.preventDefault();
			let likes_count = 0;
		 	likes_count = parseInt($('#val1').text());
		 	likes_count = JSON.parse(localStorage.getItem('val1'));
		likes_count += 1;
		localStorage.setItem('val1', JSON.stringify(likes_count));
		$('#val1').text(likes_count);
	});
	$('#btn2').click(function(event){
		event.preventDefault();
			let likes_count = 0;
		 	likes_count = parseInt($('#val2').text());
		 	likes_count = JSON.parse(localStorage.getItem('val2'));
		likes_count += 1;
		localStorage.setItem('val2', JSON.stringify(likes_count));
		$('#val2').text(likes_count);
	});
	$('figure').mouseover(function(){
		$(this).find('img').css('transform','scale(1.025,1.025)');
	})
	$('figure').mouseleave(function(){
		$(this).find('img').css('transform','scale(1,1)');
	})
	$(window).scroll(function(){
		let scroll_position = 0;
		scroll_position = $(this).scrollTop();
		// $('#show').text(scroll_position);

		if(scroll_position >= 330){
			$('.social-icons').css('position', 'fixed');
			$('.social-icons').css('top', '3vh');
			$('#back').show();
			
		}else{
			$('#back').hide();
			$('.social-icons').css('position', 'absolute');
			$('.social-icons').css('top', '50vh');
		}
	});
	$('#back').hide();
	$(window).scroll(function(){
		let scroll_position = 0;
		scroll_position = $(this).scrollTop();
		$('#show').text(scroll_position);

		if(scroll_position >= 330){
			$('#back').fadeIn();
			
		}else{
			$('#back').fadeOut();
		}
	});

	$('#back').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	

	$('#hidden_content').hide();
	$('#btn-show').click(function(){
		let content = $(this).text();
		if (content == 'Show Text') {
			$('#hidden_content').show();
			$(this).text('Hide Text');
		}else{
			$('#hidden_content').hide();
			$(this).text('Show Text');
		}	

	});
$('.dropdown').on({
		mouseover: function(){
			$(this).find('.dropdown-menu').slideDown(500);
		},
		mouseleave: function(){
			$(this).find('.dropdown-menu').slideUp(500);
		}
	});
	
	$('.nav-stacked > li:eq(0) > a').click(function(){
		$('#display').css('position', 'absolute');
		$('#display').css('top', '0');
		$('#display').text(`Yoko's kitchen is a Japanese restuarant located in London. they have mouth watering Japanese dishes on their menu. They offer world class servixes to their customers and aim for excellence.`);
		$('.nav-stacked > :not(li:eq(0))').removeClass("active");
		$('.nav-stacked > li:eq(0)').addClass("active");

	});
	$('.nav-stacked > li:eq(1) > a').click(function(){
		$('#display').css('position', 'absolute');
		$('#display').css('top', '7vh');
		$('#display').text(` They offer world class servixes to their customers and aim for excellence.`);
		$('.nav-stacked > :not(li:eq(1))').removeClass("active");
		$('.nav-stacked > li:eq(1)').addClass("active");
	});
	$('.nav-stacked > li:eq(2) > a').click(function(){
		$('#display').css('position', 'absolute');
		$('#display').css('top', '15vh');
		$('#display').text(`This is the best place to taste your chinese dish wateva.`);
		$('.nav-stacked > :not(li:eq(2))').removeClass("active");
		$('.nav-stacked > li:eq(2)').addClass("active");
	});
	$('.nav-stacked > li:eq(3) > a').click(function(){
		$('#display').css('position', 'absolute');
		$('#display').css('top', '23vh');
		$('#display').text(`Yoko's kitchen is a Japanese restuarant located in London. they have mouth watering Japanese dishes on their menu. They offer world class servixes to their customers and aim for excellence.`);
		$('.nav-stacked > :not(li:eq(3))').removeClass("active");
		$('.nav-stacked > li:eq(3)').addClass("active");
	});
	$('.nav-stacked > li:eq(4) > a').click(function(){
		$('#display').css('position', 'absolute');
		$('#display').css('top', '31vh');
		$('#display').text(`Yoko's kitchen is a Japanese restuarant located in London.`);
		$('.nav-stacked > :not(li:eq(4))').removeClass("active");
		$('.nav-stacked > li:eq(4)').addClass("active");
	});

	// $('.item').slide(function(){
	// 	let slide_fade = 0;
	// 	slide_fade = $(this).slideLeft();
	// 	$('.item').fadeOut();

	// });

	let nigeria = ['Ogun', 'Abuja', 'Edo', 'Ekiti', 'Kogi'];
	let usa = ['Texas', 'Los Angeles', 'New York', 'Boston', 'San Frasisco'];
	let sa = ['Cape Town', 'Johannesburg', 'Pretoria', 'Limpopo', 'Northern Cape'];
	let england = ['London', 'Manchester', 'Southampton', 'Northampton', 'Portsmourth'];
	let spain = ['Madrid', 'Espanyol', 'Betis', 'Barcelona', 'Getafe'];

	$('#country').change(function(){
		let country = "";
		country = $(this).val();
		console.log(country);
		if(country == 'nigeria'){

	}else if(country == 'sa'){
		for(val in sa){
			$('#state > option:eq(' +val +')').replaceWith('<option value='+ sa[val]+'>'+sa[val]+ '</option>');
		}
	}
	else if(country == 'usa'){
		for(val in usa){
			$('#state > option:eq(' +val +')').replaceWith('<option value='+ usa[val]+'>'+usa[val]+ '</option>');
		}
	}
	else if(country == 'england'){
		for(val in england){
			$('#state > option:eq(' +val +')').replaceWith('<option value='+ england[val]+'>'+england[val]+ '</option>');
		}
	}
	else if(country == 'spain'){
		for(val in spain){
			$('#state > option:eq(' +val +')').replaceWith('<option value='+ spain[val]+'>'+spain[val]+ '</option>');
		}
	}
	});

	$('.alert').hide();
	$('#email').keyup(function(){
		if ($('#email').val()!== '' && $('#password').val()!== '' && $('#country').val()!== '' && $('#state').val()!== '') {
		$('form button[type="submit"]').removeAttr('disabled');
	}else{
		$('form button[type="submit"]').removeAttr('disabled', 'disabled');
	}
	});

		$('#password').keyup(function(){
		if ($('#email').val()!== '' && $('#password').val()!== '' && $('#country').val()!== '' && $('#state').val()!== '') {
		$('form button[type="submit"]').removeAttr('disabled');
	}else{
		$('form button[type="submit"]').removeAttr('disabled', 'disabled');
	}
	});

		$(':submit').click(function(event){
			event.preventDefault();
			if ($('#email').val().length >=10 && $('#password').val().length >=8) {
				$('.alert').show().text('Form Successfully Submited').removeClass('alert-danger').addClass('alert-success');
			}else{
				$('.alert').show().text('Inputs are not properly made').removeClass('alert-success').addClass('alert-danger');
			}
		});
		//$('#password_text').hide();
	$('#password').keyup(function(){
		if ($('#password').val().length < 8) {
			$('#password_text').text('weak password').removeClass('text-success').addClass('text-danger');
		}else{
			$('#password_text').text('Strong password').removeClass('text-danger').addClass('text-success');
		}
	})
	 $('#password').keyup(function(){
	if ($('#password').val().length < 8) {			
			$('form > div:eq(1)').removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#password_feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove');
		}else{
			$('form > div:eq(1)').removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#password_feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok');
		}
	})

	 $('#setphoto').hide();

	 $('#getphoto').change(function(event){
	 	event.preventDefault();
	 	readimg(this);
	 });

	 function readimg(file){
	 	if(file.files&&file.files[0]) {
	 		var reader=new FileReader();
	 		reader.onload=function(e){
	 			$('#setphoto').show().attr('src',e.target.result);
	 		}
	 		reader.readAsDataURL(file.files[0]);
	 	}
	 }
	 var maxlen = 150;
	 $('textarea').keyup(function(){
	 	textarea_len = $('textarea').val().length;
	 	charremain = maxlen - textarea_len;
	 	$('#textarea_text').text(charremain + 'character remaining');
	 })


});
//slider
			$('.ba-slider').cycle({
				prev: '.go-left',
				next: '.go-right',
				slides: '> .slide',
				fx: 'scrollHorz',
				speed: '700',
				timeout: '2000'
			});

//maps
var	map;
function initialize() {
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(49.588616, 34.551474)
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var image = '../img/marker.png';
	var myLatLng = new google.maps.LatLng(49.587232, 34.551431);
	var someMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
}
google.maps.event.addDomListener(window, 'load', initialize);

//accordeon
$(document).ready(function($) {
    
  		var allPanels = $('.accordeon-list > dd').hide();
    
  		$('.accordeon-list > dt').click(function() {
    		$this = $(this);
    	$target =  $this.next();
    	if(!$target.hasClass('active')){
        	allPanels.removeClass('active').slideUp();
        	$target.addClass('active').slideDown();
        	$('.accordeon-list > dt').removeClass('active');
        	$this.addClass('active');
      	}
      
    	return false;
  		});
});

//search
$(document).ready(function($) { 
		$('.search-button i').click(function() {
			if ($('.search-input').val() !== '') {
				$('#search').submit();
			} else {
				$('#search').toggleClass('show');
			};
		});
});
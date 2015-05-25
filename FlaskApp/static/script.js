<<<<<<< HEAD
$(document).ready(function(){
	
});
google.maps.event.addDomListener(window, 'load', getLocation);

function getLocation() {
	console.log("trying to get location");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initializeMap);
	} else {
		document.write("Geolocation is not supported by this browser.");
	}
}

function initializeMap(position) {
	console.log(position);
	var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	var mapOptions = {
		center: myLatlng,
		zoom: 16
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: '../static/myLocation.jpg'
	});

	console.log(myLatlng);
	postPosition(position);
}

function postPosition(position) {
	var csrftoken = $('meta[name=csrf-token]').attr('content')

	$.ajaxSetup({

	    beforeSend: function(xhr, settings) {
	    	

	        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
	            xhr.setRequestHeader("applicationtype/json", csrftoken)
	        }
	    }
	})

	var jsonString = JSON.stringify({lat:position.coords.latitude,lng:position.coords.longitude});
	console.log(jsonString);
	console.log($.parseJSON(jsonString));


	$.post({{url_for('food'), jsonString, function()  {



	  console.log( "success" );
	},"json")
	  .done(function() {
	    console.log( "second success" );
	    console.log("response")
	  })
	  .fail(function() {
	    console.log( "error" );
	  })
	  .always(function() {
	    console.log( "finished" );

	});
}

// function showPosition(position) {
// 	x.innerHTML = "Latitude: " + position.coords.latitude + 
// 	"<br>Longitude: " + position.coords.longitude; 
// }

// 	function showPosition(position)
// 		{
// 		lat=position.coords.latitude;
// 		lon=position.coords.longitude;
// 		latlon=new google.maps.LatLng(lat, lon)
// 		mapholder=document.getElementById('mapholder')
// 		mapholder.style.height='250px';
// 		mapholder.style.width='100%';

// 		var myOptions={
// 		center:latlon,zoom:14,
// 		mapTypeId:google.maps.MapTypeId.ROADMAP,
// 		mapTypeControl:false,
// 		navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
// 		};
// 		var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
// 		var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
// 		}

// 	function showError(error)
// 		{
// 		switch(error.code) 
// 			{
// 			case error.PERMISSION_DENIED:
// 				x.innerHTML="User denied the request for Geolocation."
// 				break;
// 			case error.POSITION_UNAVAILABLE:
// 				x.innerHTML="Location information is unavailable."
// 				break;
// 			case error.TIMEOUT:
// 				x.innerHTML="The request to get user location timed out."
// 				break;
// 			case error.UNKNOWN_ERROR:
// 				x.innerHTML="An unknown error occurred."
// 				break;
// 			}
// 		}
=======
alert("hello")
>>>>>>> c00819a8423b7a38ddfa355c97dacf44bf2631c0

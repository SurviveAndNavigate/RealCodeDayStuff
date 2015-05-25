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
      icon: 'myLocation.png'
  });
}

function postLocation() {
	$.ajax("")
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
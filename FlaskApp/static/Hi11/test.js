$(document).ready(function(){
	var map;
	var mapOptions;
});
var map;
var mapOptions;
google.maps.event.addDomListener(window, 'load', getLocation);
var latitude ;
var longitude;
function getLocation() {

	console.log("trying to get location");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initializeMap);

	} else {
		document.write("Geolocation is not supported by this browser.");
	}
}

function initializeMap(position) {
	var newpos;
	var newlat;
	console.log(position);
	var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	 latitude = new google.maps.LatLng(position.coords.latitude)
     longitude =new google.maps.LatLng(position.coords.longitude)
	 mapOptions = {
		center: myLatlng,
		zoom: 16
	};

	 map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	 marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: '../static/myLocation.jpg'
	});



	console.log(myLatlng);

	postPosition(position);




}
function postPosition(position) {
$.ajax({
    type: "POST",
    url: "food",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({lat:position.coords.latitude,lng:position.coords.longitude}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){
			for(var i in data) {
				var lat = i;
				var long = data[i];
				var latlong = new google.maps.LatLng(lat,long)
			var marker = new google.maps.Marker({
					position: latlong,
					map: map,
					
			});
}


	console.log(data);

},
    failure: function(errMsg) {
        alert(errMsg);
    }

})

};

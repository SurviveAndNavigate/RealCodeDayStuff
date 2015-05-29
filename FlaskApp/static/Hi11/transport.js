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
    url: "transport",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({lat:position.coords.latitude,lng:position.coords.longitude}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){

			for(var i in data[0]) {

				for(var g in data[0][i]) {

				var lat = data[0][i][0];
				var long = data[0][i][1];


				var latlong = new google.maps.LatLng(lat,long)
			var marker = new google.maps.Marker({
					position: latlong,
					map: map,
					title : i

			})};
}
for(var q in data[1]) {

	for(var m in data[1][q]) {
		var latitude = data[1][q][1]
		console.log(latitude)
		var longitude = data[1][q][0]
		var latslongs = new google.maps.LatLng(latitude,longitude)
		var markerz = new google.maps.Marker({
			position : latslongs,
			map  : map,
			icon :'../static/bustop.png',
			title : q

		})
	};
}



	console.log(data);

},
    failure: function(errMsg) {
        alert(errMsg);
    }

})

};

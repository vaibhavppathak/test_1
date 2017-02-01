function initMap() {
        var uluru = {lat: 28.5166814, lng: 77.2576994};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
      // 28.5166814,77.2576994
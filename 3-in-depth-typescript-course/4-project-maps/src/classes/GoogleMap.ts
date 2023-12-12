export interface Mappable {
  location: {
    lat: number,
    lng: number,
  };
  markerContent(): string,
}

export class GoogleMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    const mapDiv = document.getElementById(mapDivId);
    if (mapDiv !== null) {
      this.googleMap = new google.maps.Map(mapDiv, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 15,
        }
      });
    }
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });
    
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener('click', function() {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
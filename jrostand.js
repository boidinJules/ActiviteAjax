function initMap() {
    const myLatLng = { lat: 48.95842318055254, lng: 2.5470810423980086 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatLng,
    });
    setMarkers(map);
  }
    const jsrostandMarkers = [
      ["Marker 1", 48.95930033308523, 2.5477890651742516, 4],
      ["Marker 2", 48.95901659236071, 2.544364368005043, 5],
      ["Marker 3", 48.96083250510581, 2.5428194730675138, 3],
      ["Marker 4", 48.96334006261106, 2.5503223316267305, 2],
      ["Marker 5", 48.96146800531762, 2.553135524155863, 1],
      ["Marker 6", 48.95997156116078, 2.548567662388221, 6]
  ];

  function setMarkers(map) {
  
    for (let i = 0; i < jsrostandMarkers.length; i++) {
      const beach = jsrostandMarkers[i];
  

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      title: "Hello World!",
    });
  }
}
  window.initMap = initMap;
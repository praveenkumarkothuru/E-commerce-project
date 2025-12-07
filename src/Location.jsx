import React, { useEffect, useState, useRef } from "react";

function Location() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [address, setAddress] = useState("");

  // ⭐ Load Google Maps Script (correct URL)
  const loadGoogleScript = () => {
    const existingScript = document.getElementById("googleMaps");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "googleMaps";

      // ❗ Correct Google Maps JavaScript API URL
      script.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.4778776455!2d78.07836908213812!3d17.412733229106756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1764952202069!5m2!1sen!2sin
`;

      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }
  };

  // ⭐ Initialize Map
  const initializeMap = () => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 17.6868, lng: 83.2185 },
      zoom: 14,
    });

    markerRef.current = new window.google.maps.Marker({
      position: { lat: 17.6868, lng: 83.2185 },
      map,
      draggable: true,
    });

    // Click → move marker
    map.addListener("click", (event) => {
      const { latLng } = event;
      markerRef.current.setPosition(latLng);
      getAddress(latLng.lat(), latLng.lng());
    });

    // Drag → update address
    markerRef.current.addListener("dragend", () => {
      const pos = markerRef.current.getPosition();
      getAddress(pos.lat(), pos.lng());
    });
  };

  // ⭐ Convert coordinates → Address
  const getAddress = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address);
      }
    });
  };

  useEffect(() => {
    loadGoogleScript();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📍 Select Delivery Location</h2>

      {/* Address Input */}
      <label style={{ fontWeight: "bold" }}>Your Address</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Select on map or type manually"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {/* MAP */}
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "400px",
          background: "#ddd",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      ></div>

      {/* SAVE BUTTON */}
      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "green",
          color: "white",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
        }}
        onClick={() => alert("Selected Address: " + address)}
      >
        Save Location
      </button>
    </div>
  );
}

export default Location;

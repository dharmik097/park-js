function saveData() {
  console.log("Function saveData() called");

  // Retrieve form data using jQuery
  var fieldColor = $("#inputColor").val();
  var fieldSection = $("#inputSection").val();
  var fieldNumber = $("#inputNumber").val();

  console.log(fieldColor, fieldSection, fieldNumber);

  // Validate input fields
  if (fieldColor == "..." || fieldSection == "" || fieldNumber == "") {
    alert("Invalid data!");
    return; // Abort function if invalid
  }

  // Get current location coordinates
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var fieldDate = new Date(); // Store the current date/time

        // Retrieve existing locations from localStorage or create a new array
        let locations =
          JSON.parse(localStorage.getItem("Park_Locations")) || [];

        // Push new location data into the array
        locations.push({
          date: fieldDate.toLocaleString(),
          color: fieldColor,
          section: fieldSection,
          number: fieldNumber,
          latitude: latitude,
          longitude: longitude,
        });

        // Save updated array back to localStorage
        localStorage.setItem("Park_Locations", JSON.stringify(locations));

        alert("Data saved with coordinates!");

        // Clear the form
        $("#inputColor").val("...");
        $("#inputSection").val("");
        $("#inputNumber").val("");
      },
      function (error) {
        // If location access is denied, save without coordinates
        var fieldDate = new Date();
        let locations =
          JSON.parse(localStorage.getItem("Park_Locations")) || [];

        locations.push({
          date: fieldDate.toLocaleString(),
          color: fieldColor,
          section: fieldSection,
          number: fieldNumber,
          latitude: null,
          longitude: null,
        });

        localStorage.setItem("Park_Locations", JSON.stringify(locations));
        alert("Data saved (without location access)!");

        // Clear the form
        $("#inputColor").val("...");
        $("#inputSection").val("");
        $("#inputNumber").val("");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showLastPlace() {
  console.log("showLastPlace() called");

  // Retrieve stored locations from localStorage
  let locations = JSON.parse(localStorage.getItem("Park_Locations")) || [];
  let dataDiv = document.getElementById("divData");

  if (locations.length === 0) {
    dataDiv.innerHTML = "<p>No parking locations saved yet.</p>";
    return;
  }

  // Get the last saved location
  let lastLocation = locations[locations.length - 1];

  let textData = `
        <div style="background-color: orange; padding: 20px; border-radius: 15px; margin: 20px 0;">
            <h3>Last Parked Location</h3>
            <p><strong>Saved on:</strong> ${lastLocation.date}</p>
            <p><strong>Color:</strong> ${lastLocation.color}</p>
            <p><strong>Section:</strong> ${lastLocation.section}</p>
            <p><strong>Number:</strong> ${lastLocation.number}</p>
            ${
              lastLocation.latitude
                ? `<p><strong>Coordinates:</strong> ${lastLocation.latitude.toFixed(
                    6
                  )}, ${lastLocation.longitude.toFixed(6)}</p>`
                : "<p><strong>Coordinates:</strong> Not available</p>"
            }
            ${
              lastLocation.latitude
                ? `<button onclick="showOnMap(${lastLocation.latitude}, ${lastLocation.longitude})" class="btn btn-success">View on Map</button>`
                : ""
            }
        </div>
    `;

  dataDiv.innerHTML = textData;
}

function showAllHistory() {
  console.log("showAllHistory() called");

  // Retrieve stored locations from localStorage
  let locations = JSON.parse(localStorage.getItem("Park_Locations")) || [];
  let historyDiv = document.getElementById("historyData");

  if (locations.length === 0) {
    historyDiv.innerHTML = "<p>No parking history found.</p>";
    return;
  }

  historyDiv.innerHTML = ""; // Clear previous content

  // Loop through saved locations and display them (newest first)
  locations.reverse().forEach((location, index) => {
    let originalIndex = locations.length - 1 - index;
    let textData = `
            <div style="border: 2px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 10px;">
                <p><strong>Saved on:</strong> ${location.date}</p>
                <p><strong>Color:</strong> ${location.color}</p>
                <p><strong>Section:</strong> ${location.section}</p>
                <p><strong>Number:</strong> ${location.number}</p>
                ${
                  location.latitude
                    ? `<p><strong>Coordinates:</strong> ${location.latitude.toFixed(
                        6
                      )}, ${location.longitude.toFixed(6)}</p>`
                    : "<p><strong>Coordinates:</strong> Not available</p>"
                }
                <button onclick="deleteLocation(${originalIndex})" class="btn btn-danger btn-sm">Delete</button>
                ${
                  location.latitude
                    ? `<button onclick="showOnMap(${location.latitude}, ${location.longitude})" class="btn btn-success btn-sm">View on Map</button>`
                    : ""
                }
            </div>
        `;
    historyDiv.innerHTML += textData;
  });
}

function deleteLocation(index) {
  let locations = JSON.parse(localStorage.getItem("Park_Locations")) || [];

  locations.splice(index, 1); // Remove selected location
  localStorage.setItem("Park_Locations", JSON.stringify(locations));

  showAllHistory(); // Refresh history list after deletion
  alert("Location deleted!");
}

function clearAllLocations() {
  if (confirm("Are you sure you want to delete all saved locations?")) {
    localStorage.removeItem("Park_Locations"); // Remove all stored locations
    document.getElementById("historyData").innerHTML =
      "<p>All locations have been cleared.</p>";
    alert("All saved locations have been deleted.");
  }
}

function showOnMap(lat, lng) {
  // Open Google Maps with the coordinates
  let mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
  window.open(mapUrl, "_blank");
}

// Legacy function for backward compatibility
function showData() {
  showLastPlace();
}

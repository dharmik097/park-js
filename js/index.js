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

    var fieldDate = new Date(); // Store the current date/time

    // Retrieve existing locations from localStorage or create a new array
    let locations = JSON.parse(localStorage.getItem("Park_Locations")) || [];
    
    // Push new location data into the array
    locations.push({
        date: fieldDate,
        color: fieldColor,
        section: fieldSection,
        number: fieldNumber
    });
    
    // Save updated array back to localStorage
    localStorage.setItem("Park_Locations", JSON.stringify(locations));
    
    alert("Data saved!");
}


function showData() {
    console.log("showData() called");
    
    // Retrieve stored locations from localStorage
    let locations = JSON.parse(localStorage.getItem("Park_Locations")) || [];
    let historyDiv = document.getElementById("divData");
    
    historyDiv.innerHTML = ""; // Clear previous content

    // Loop through saved locations and display them
    locations.forEach((location, index) => {
        let textData = `<p><strong>Saved on:</strong> ${location.date}</p>
                        <p><strong>Color:</strong> ${location.color}</p>
                        <p><strong>Section:</strong> ${location.section}</p>
                        <p><strong>Number:</strong> ${location.number}</p>
                        <button onclick="deleteLocation(${index})">Delete</button>
                        <hr>`;
        historyDiv.innerHTML += textData;
    });
}


function deleteLocation(index) {
    let locations = JSON.parse(localStorage.getItem("Park_Locations")) || [];
    
    locations.splice(index, 1); // Remove selected location
    localStorage.setItem("Park_Locations", JSON.stringify(locations));
    
    showData(); // Refresh history list after deletion
}


function clearAllLocations() {
    localStorage.removeItem("Park_Locations"); // Remove all stored locations
    document.getElementById("divData").innerHTML = ""; // Clear display
    alert("All saved locations have been deleted.");
}

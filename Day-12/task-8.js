fetch("https://invalidurl.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Fetch error:", error));

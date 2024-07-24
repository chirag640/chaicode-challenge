const fetchData = async () => {
    try {
        const response = await fetch("https://invalidurl.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error:", error);
    }
};

fetchData();

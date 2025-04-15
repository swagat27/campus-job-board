function filterJobs() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const selectedYear = document.getElementById("year-filter").value.toLowerCase();
    const selectedType = document.getElementById("type-filter").value.toLowerCase();
    const selectedDuration = document.getElementById("duration-filter").value.toLowerCase();

    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(card => {
        const jobTitle = card.querySelector("h3").textContent.toLowerCase();
        const jobYear = card.getAttribute("data-year").toLowerCase();
        const jobType = card.getAttribute("data-type").toLowerCase();
        const jobDuration = card.getAttribute("data-duration").toLowerCase();

        // Filter based on search bar, year, job type, and duration
        if (
            (jobTitle.includes(searchValue) || searchValue === '') &&
            (jobYear.includes(selectedYear) || selectedYear === '') &&
            (jobType.includes(selectedType) || selectedType === '') &&
            (jobDuration.includes(selectedDuration) || selectedDuration === '')
        ) {
            card.style.display = "block"; // Show the job card
        } else {
            card.style.display = "none"; // Hide the job card
        }
    });
}

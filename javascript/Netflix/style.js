const posters = document.querySelectorAll('.row__posters img');

posters.forEach((poster) => {
    poster.addEventListener('mouseover', () => {
        // Show details (e.g., overlay description)
    });

    poster.addEventListener('mouseleave', () => {
        // Hide details
    });
});

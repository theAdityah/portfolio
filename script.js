document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.closest('.about-category');
        const content = category.querySelector('.content');
        const details = category.querySelector('.details');
        const thumbsUpButton = details.querySelector('.thumbs-up');

        // Replace content with details
        content.style.display = 'none'; // Hide current content
        details.style.display = 'block'; // Show details
        this.style.display = 'none'; // Hide the "More Details" button
        thumbsUpButton.style.display = 'inline'; // Show thumbs up button
    });
});

document.querySelectorAll('.thumbs-up').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.closest('.about-category');
        const content = category.querySelector('.content');
        const details = category.querySelector('.details');
        const toggleButton = category.querySelector('.toggle-details');

        // Revert back to original content
        content.style.display = 'block'; // Show original content
        details.style.display = 'none'; // Hide details
        this.style.display = 'none'; // Hide thumbs up button
        toggleButton.style.display = 'inline'; // Show "More Details" button again
    });
});

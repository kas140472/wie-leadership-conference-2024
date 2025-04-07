/**
 * Toggle visibility between two related divs
 * This function handles the show/hide functionality for expandable content sections
 * 
 * @param {HTMLElement} currentButton - The button element that was clicked
 * @param {string} id - The ID of the target div to show
 */
function showDiv(currentButton, id) {
    // Find the parent div of the clicked button (the container that needs to be hidden)
    var parentDiv = currentButton.parentNode;
    
    // Hide the parent div by setting its display style to 'none'
    parentDiv.style.display = 'none';
    
    // Find the target div that needs to be shown (using the provided id)
    var selectedDiv = document.getElementById(id);
    
    // Display the target div by setting its display style to 'block'
    selectedDiv.style.display = 'block';
}

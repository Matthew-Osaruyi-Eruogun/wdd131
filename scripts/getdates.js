const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
if (yearSpan) {
    yearSpan.textContent = currentYear;
}

// Set the last modified date in the footer
const modifiedParagraph = document.getElementById("lastModified");
if (modifiedParagraph) {
    modifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}


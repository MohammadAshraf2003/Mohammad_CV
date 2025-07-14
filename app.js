// Get modal elements
const modalOverlay = document.querySelector(".modal-overlay");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-btn");

// Define content for each skill
const modalContents = {
    "html-modal": `
        <ul>
            <li>Semantic HTML5 Markup</li>
            <li>Form Creation & Validation</li>
            <li>Tables and List Structures</li>
            <li>Multimedia Embedding (&lt;audio&gt;, &lt;video&gt;, &lt;canvas&gt;)</li>
        </ul>
    `,
    "css-modal": `
        <ul>
            <li>Responsive Design (Media Queries)</li>
            <li>CSS Box Model (Margin, Padding, Borders)</li>
            <li>Positioning (Static, Relative, Absolute, Fixed, Sticky)</li>
            <li>Layout Techniques (Flexbox, Grid, Inline, Block)</li>
            <li>CSS Transitions & Animations</li>
            <li>Pseudo-classes & Pseudo-elements (:hover, :active, ::before, ::after)</li>
            <li>Custom Properties (CSS Variables)</li>
        </ul>
    `,
    "javascript-modal": `
        <ul>
            <li>Core ES6+ Syntax (let, const, arrow functions, template literals)</li>
            <li>DOM Manipulation (querySelector, getElementById, classList)</li>
            <li>Event Handling (addEventListener, event delegation)</li>
            <li>Data Structures (Arrays, Objects, Iteration Methods)</li>
            <li>Control Structures (Conditionals, Loops)</li>
            <li>Basic Error Handling (try…catch)</li>
            <li>Timers (setTimeout, setInterval)</li>
        </ul>
    `
};

// Get all buttons that open the modal
const modalBtns = document.querySelectorAll(".modal-btn");

// Add event listener to each button
modalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const content = modalContents[this.id]; // Get content based on id
        modalContent.innerHTML = content; // Update modal content with HTML
        modalOverlay.classList.add("open-modal"); // Open modal
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("open-modal");
});

// Close modal when clicking outside the modal container
modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open-modal");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Add a click event listener to each link
  navLinks.forEach((link) =>
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the target section ID from the link's href attribute
      const targetSectionId = this.getAttribute("href");

      // Get the target section element
      const targetSection = document.querySelector(targetSectionId);

      // Smoothly scroll to the target section
      targetSection.scrollIntoView({ behavior: "smooth" });
    })
  );
});

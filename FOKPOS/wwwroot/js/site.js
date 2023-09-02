
    $(document).ready(function() {
  // Get references to the sidebar and sidebar items
  const firstSidebar = $("#sidebar");
  const sidebarItems = firstSidebar.find(".list-unstyled.components > li > a");

    // Add click event handler to sidebar items
    sidebarItems.click(function(event) {
        event.preventDefault(); // Prevent default link behavior
    const targetSidebar = $("#sidebar2");

    // Toggle the visibility of the second sidebar
    targetSidebar.toggleClass("active");

    // Close the second sidebar if it's already open and a different item is clicked
    if (targetSidebar.hasClass("active") && !$(this).hasClass("active")) {
        targetSidebar.removeClass("active");
    }

    // Remove the "active" class from other sidebar items and add it to the clicked item
    sidebarItems.removeClass("active");
    $(this).addClass("active");
  });
});


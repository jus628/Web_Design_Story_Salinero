window.addEventListener("wheel", function(event) {
  event.preventDefault();

  window.scrollBy({
    top: event.deltaY * 0.10,
  });

}, { passive: false });
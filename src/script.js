const el = document.querySelector("section h3");

rxjs.fromEvent(el, "mousemove").subscribe(e => {
  el.textContent = e.clientX;
  console.log(e);
});

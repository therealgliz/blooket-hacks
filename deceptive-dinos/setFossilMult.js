(async ()=>{
  let i = document.createElement("iframe");
  let prompt = i.contentWindow.bind(window);
  let alert = i.contentWindow.bind(window)
})();

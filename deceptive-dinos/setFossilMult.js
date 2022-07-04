(async ()=>{
  let i = document.createElement("iframe");
  let prompt = i.contentWindow.bind(window);
  let alert = i.contentWindow.bind(window)
  try {
    Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.setState({
      fossilMult: 1e9
    })
  } catch (e) {
    if (confirm("An error occured. Would you like to join the discord server?")) {
    }
})();

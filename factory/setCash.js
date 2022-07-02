(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();

    function reactHandler() {
        return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
    };

    if (document.location.pathname != "/cafe") {
        alert("You must be in a cafe game!");
    } else {
        reactHandler().stateNode.state.foods.forEach(e => e.stock = 99999);
        reactHandler().stateNode.forceUpdate();

        alert('Added infinite food level!');
    };
})();
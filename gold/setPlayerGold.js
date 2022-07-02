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

    if (window.location.pathname != '/play/gold') {
        alert('You must be in a gold quest game!');
    } else {
        let e = reactHandler(),
            player = prompt("Player name to set gold"),
            amount = Number(parseFloat(prompt("Amount to set gold to")));
        e.memoizedProps.firebase.setVal({
            id: e.memoizedProps.client.hostId,
            path: "c/" + e.memoizedProps.client.name,
            val: {
                b: e.memoizedProps.client.blook,
                g: e.stateNode.state.gold,
                tat: player + ":swap:" + amount
            }
        })
        alert('Set gold for player:' + player + ' to ' + amount);
    };
})();
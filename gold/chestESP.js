(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            if (window.location.pathname != '/play/gold') {
                alert('You must be in a gold quest game!');
            } else {
                alert('Chest ESP enabled');

                interval = setInterval(() => {
                    if (window.location.pathname != '/play/gold') return clearInterval(interval);

                    data = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state;

                    if (data?.stage == 'prize') {
                        boxes = data.choices;
                        choiceDiv = document.querySelector("div[class*='arts__regularBody']")?.children[1];
                        if (!choiceDiv) return clearInterval(interval)
                        if (!document.querySelector("p[class*='chest-esp']")) boxes.forEach((box, i) => {
                            textElement = document.createElement('p');
                            textElement.className = "chest-esp";
                            textElement.innerText = box.text;
                            textElement.style = `text-align: center;
                                font-size: 30px;
                                color: white;
                                font-family:Titan One;
                                sans-serif;
                                -webkit-user-select:none;
                                -moz-user-select:none;
                                -ms-user-select:none;
                                user-select:none;
                                border-color: black;
                                margin-top: 200px;`
                            try { choiceDiv.children[i].appendChild(textElement); } catch (e) {
                                if (confirm('An error occured, would you like to report this in the support discord server?')) {
                                    window.open('https://glizzers.xyz/discord');
                                };
                            };
                        });

                        else boxes.forEach((box, i) => {
                            if (choiceDiv.children.length == 3 && choiceDiv.children[i].children[1].innerText != box.text) choiceDiv.children[i].children[1].innerText = box.text;
                        });
                    };

                    if (window.location.pathname != '/play/gold') clearInterval(interval)

                }, 0);
            };
})();


function footer() {
    let element = document.createElement('div');

    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Made by gliz <br> My <a style="color: #0000ff;" href="https://twitter.com/glizuwu" target="_blank">twitter</a></p>`;
    document.body.appendChild(element);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
};

footer();

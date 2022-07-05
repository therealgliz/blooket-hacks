(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (window.location.pathname != '/play/racing') {
                alert('You must be in a racing game!');
            } else {
                reactHandler().stateNode.setState({ progress: reactHandler().stateNode.state.goalAmount });
                setTimeout(() => {
                    try {
                        Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedState.question.correctAnswers[0])[0].click();
                    } catch {
                        try {
                            Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedProps.client.question.correctAnswers[0])[0].click();
                        } catch { };
                    };
                }, 100);
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

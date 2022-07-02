(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
})();
(() => {
    let style = document.createElement('style');
    style.innerHTML = (`details > summary {
    cursor: pointer;
    transition: 0.15s;
    list-style: none;
}
details > summary:hover {
    color: hsl(0, 0%, 50%)
}
details > summary::-webkit-details-marker {
    display: none;
}
details summary ~ * {
    animation: sweep .5s ease-in-out;
}

@keyframes sweep {
    0%    {opacity: 0; transform: translateY(-10px)}
    100%  {opacity: 1; transform: translateY(0)}
}
.cheat {
    border: none;
    background: hsl(0, 0%, 20%);
    padding: 5px;
    margin: 3px;
    width: 60%;
    color: hsl(0, 0%, 100%);
    transition: 0.2s;
    border-radius: 5px;
    cursor: pointer;
}
.cheat:hover {
    background: hsl(0, 0%, 30%);
}`);

    const GUI = document.createElement('div');
    GUI.appendChild(style);
    GUI.style.width = '400px';
    //GUI.style.height = '500px';
    GUI.style.background = 'hsl(0, 0%, 10%)';
    GUI.style.borderRadius = '10px';
    GUI.style.position = 'absolute';
    GUI.style.textAlign = 'center';
    GUI.style.fontFamily = 'Nunito';
    GUI.style.color = 'white';
    GUI.style.overflow = 'hidden';
    GUI.style.top = '50px';
    GUI.style.left = '50px';

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    GUI.onmousedown = ((e = window.event) => {
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
            GUI.style.top = (GUI.offsetTop - pos2) + "px";
            GUI.style.left = (GUI.offsetLeft - pos1) + "px";
        });
    });

    let header = document.createElement('div');
    GUI.appendChild(header);
    header.style.width = '100%';
    header.style.height = '35px';
    header.style.paddingTop = '2px';
    header.style.fontSize = '1.5rem';
    header.style.textAlign = 'center'
    header.innerHTML = `Blooket Cheats <span style="font-size: 0.75rem">v4.10.22</span>`;

    let loop;

    let close = document.createElement('button');
    header.appendChild(close);
    close.style.background = 'red';
    close.style.height = '45px';
    close.style.width = '45px';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.position = 'absolute';
    close.style.top = '-10px';
    close.style.right = '-10px';
    close.style.fontSize = '1.5rem';
    close.style.borderRadius = '10px';
    close.style.fontFamily = 'Nunito';
    close.style.fontWeight = 'bolder';
    close.style.paddingTop = '10px';
    close.style.paddingRight = '15px';
    close.innerText = 'X';
    close.onclick = () => {
        GUI.remove();
        clearInterval(loop);
        removeEventListener('keypress', toggleHidden)
    }

    let minimize = document.createElement('button');
    header.appendChild(minimize);
    minimize.style.background = '#444444';
    minimize.style.height = '45px';
    minimize.style.width = '45px';
    minimize.style.border = 'none';
    minimize.style.cursor = 'pointer';
    minimize.style.position = 'absolute';
    minimize.style.top = '-10px';
    minimize.style.left = '-10px';
    minimize.style.fontSize = '1.5rem';
    minimize.style.borderRadius = '10px';
    minimize.style.fontFamily = 'Nunito';
    minimize.style.fontWeight = 'bolder';
    minimize.style.paddingTop = '10px';
    minimize.style.paddingLeft = '15px';
    minimize.innerText = '-';
    minimize.onclick = () => {
        bodyDiv.hidden = !bodyDiv.hidden;
    }
    let bodyDiv = document.createElement('div');
    let body = document.createElement('div');
    bodyDiv.appendChild(body);
    GUI.appendChild(bodyDiv);

    body.innerHTML = (`<span id="curPageEl">${getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected'}</span><br><span>(Press E to hide)</span><br>`);
    body.style.display = 'block';
    body.style.margin = '10px';
    //body.style.background = 'white';
    body.style.minHeight = '70px';

    let activeCheats = document.createElement('span');
    body.appendChild(activeCheats);

    document.body.append(GUI);

    let footer = document.createElement('div');
    bodyDiv.appendChild(footer);
    footer.style.fontSize = '0.9rem';
    footer.style.paddingBottom = '5px';
    footer.innerHTML = (`<span>GUI by OneMinesraft2#5394<br>Cheats by <a style="color: lightblue" href="https://twitter.com/glizuwu">gliz</a></span>`);

    var getValues = () => new Promise((e, t) => {
        try {
            let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
            e({
                blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
            })
        } catch {
            t("Could not fetch auth details")
        }
    })
    var encodeValues = async (e, t) => {
        let d = window.crypto.getRandomValues(new Uint8Array(12));
        return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: d
        }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
            name: "AES-GCM"
        }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
    };

    function reactHandler() {
        return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
    }

    let autoAnswer, highlightAnswers, choiceESP, autoPassword, chestESP;

    let cheats = {
        global: {
            'Get Daily Rewards': () => {
                fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                    getValues().then(async e => {
                        fetch("https://api.blooket.com/api/users/add-rewards", {
                            method: "put",
                            credentials: "include",
                            headers: {
                                "content-type": "application/json",
                                "X-Blooket-Build": e.blooketBuild
                            },
                            body: await encodeValues({
                                name: x.name,
                                addedTokens: 250,
                                addedXp: 300
                            }, e.secret)
                        });
                        fetch("https://api.blooket.com/api/users/add-rewards", {
                            method: "put",
                            credentials: "include",
                            headers: {
                                "content-type": "application/json",
                                "X-Blooket-Build": e.blooketBuild
                            },
                            body: await encodeValues({
                                name: x.name,
                                addedTokens: 250,
                                addedXp: 300
                            }, e.secret)
                        }).then(() => alert('Added daily rewawrds!')).catch(() => alert('There was an error when adding rewards!'));;
                    }).catch(() => alert('There was an error encoding requests!'));
                }).catch(() => alert('There was an error getting username!'));
            },
            'Spoof Blooks': () => {
                if (!window.location.pathname.split('/').includes('lobby')) return alert('You must be in a game lobby! (e.g. https://www.blooket.com/play/lobby)');
                reactHandler().stateNode.setState({ lockedBlooks: [], takenBlooks: [] });
            },
            'Toggle Auto Answer': () => { autoAnswer = !autoAnswer },
            'Toggle Highlight Answers': () => { highlightAnswers = !highlightAnswers },
            'Spam Open Boxes': () => {
                let box = prompt(`Which box do you want to open? (e.g. Space)`);
                let boxes = {
                    safari: 25,
                    aquatic: 20,
                    bot: 20,
                    space: 20,
                    breakfast: 15,
                    medieval: 15,
                    wonderland: 15
                }
                if (!Object.keys(boxes).includes(box.toLowerCase())) return alert('I could not find that box!');
                let amount = prompt('How many boxes do you want to open?');
                fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                    if (x.tokens < boxes[box.toLowerCase()] * amount) amount = Math.floor(x.tokens / boxes[box.toLowerCase()]);
                    if (!amount) return alert('You do not have enough tokens!');
                    let wait = ms => new Promise(r => setTimeout(r, ms));
                    getValues().then(async e => {
                        let error = false,
                            blooks = [];
                        for (let i = 0; i < amount; i++) {
                            fetch("https://api.blooket.com/api/users/unlockblook", {
                                method: "put",
                                credentials: "include",
                                headers: {
                                    "content-type": "application/json",
                                    "X-Blooket-Build": e.blooketBuild
                                },
                                body: await encodeValues({
                                    name: x.name,
                                    box: box.charAt(0).toUpperCase() + box.slice(1).toLowerCase()
                                }, e.secret)
                            }).then(async x => {
                                let blook = await x.json();
                                blooks.push(blook.unlockedBlook);
                                alert(`${blook.unlockedBlook} (${i + 1}/${amount})`);
                            }).catch(() => { error = true });
                            await wait(750);
                            if (error) break;
                        }
                        let count = {};
                        blooks.forEach(blook => { count[blook] = (count[blook] || 0) + 1 });
                        alert(`Results:\n` + Object.entries(count).map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
                    }).catch(() => alert('There was an error encoding requests!'));
                }).catch(() => alert('There was an error getting username!'));
            },
            'Auto Sell Dupes': () => {
                fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                    let blooks = Object.entries(x.unlocks).map(x => [x[0], x[1] - 1]).filter(x => x[1] > 0);
                    let wait = ms => new Promise(r => setTimeout(r, ms));
                    getValues().then(async e => {
                        let error = false;
                        alert('Selling duplicate blooks, please wait');
                        for (let [blook, numSold] of blooks) {
                            fetch("https://api.blooket.com/api/users/sellblook", {
                                method: "put",
                                credentials: "include",
                                headers: {
                                    "content-type": "application/json",
                                    "X-Blooket-Build": e.blooketBuild
                                },
                                body: await encodeValues({
                                    name: x.name,
                                    blook,
                                    numSold
                                }, e.secret)
                            }).catch(() => { error = true });
                            await wait(750);
                            if (error) break;
                        }
                        alert(`Results:\n` + blooks.map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
                    }).catch(() => alert('There was an error encoding requests!'));
                }).catch(() => alert('There was an error getting user data!'));
            }
        },
        cafe: {
            'Infinite Food': () => {
                if (document.location.pathname != "/cafe") return alert("This cheat doesn't work in the shop!");
                reactHandler().stateNode.state.foods.forEach(e => e.stock = 99999);
                reactHandler().stateNode.forceUpdate();
            },
            'Max Levels': () => {
                if (document.location.pathname != "/cafe/shop") return alert("This cheat only works in the shop!");
                Object.keys(reactHandler().stateNode.state.items).forEach(x => reactHandler().stateNode.state.items[x] = 5);
                reactHandler().stateNode.forceUpdate();
            },
            'Set Cash': () => {
                reactHandler().stateNode.setState({ cafeCash: Number(parseFloat(prompt('How much cash would you like?'))) });
            },
            'Reset Abilities': () => {
                Object.keys(reactHandler().stateNode.state.abilities).forEach(x => reactHandler().stateNode.state.abilities[x] = 5);
                reactHandler().stateNode.forceUpdate();
            }
        },
        kingdom: {
            'Choice ESP': () => { choiceESP = !choiceESP },
            'Max Stats': () => {
                reactHandler().stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
            },
            'Disable Toucan': () => {
                reactHandler().stateNode.taxCounter = Number.MAX_VALUE;
            },
            'Set Guests': () => {
                let guestScore = Number(parseFloat(prompt('How many guests do you want?')));
                reactHandler().stateNode.setState({ guestScore });
            },
            'Skip Guest': () => {
                reactHandler().stateNode.nextGuest();
            }
        },
        crypto: {
            'Auto Hack': () => { autoPassword = !autoPassword },
            'Set Crypto': () => {
                let amount = Number(parseFloat(prompt('How much crypto do you want?')));
                reactHandler().stateNode.setState({ crypto2: amount, crypto: amount });
            },
            'Custom Password': () => {
                let password = Number(parseFloat(prompt('What do you want to set your password to?')));
                reactHandler().stateNode.setState({ password });
            },
            'Remove Hack': () => {
                reactHandler().stateNode.setState({ hack: '' })
            },
            'Reset Player\'s Crypto': () => {
                let target = prompt("Name of player");
                let e = reactHandler();
                !target || e.memoizedProps.firebase.getDatabaseVal(e.memoizedProps.client.hostId, "c", (...o) => {
                    let data = Object.keys(o[0]);
                    if (data.some(e => e == target)) data.forEach(player => {
                        if (player == target) {
                            e.memoizedProps.firebase.setVal({
                                id: e.memoizedProps.client.hostId,
                                path: "c/" + e.memoizedProps.client.name,
                                val: {
                                    p: e.stateNode.state.password,
                                    b: e.memoizedProps.client.blook,
                                    cr: e.stateNode.state.crypto,
                                    tat: player + ":" + (o[0][player].cr || 0)
                                }
                            }); alert('Reset player\'s crypto')
                        };
                    });
                    else alert("Player does not exist");
                })
            }
        },
        factory: {
            'All Mega Bot': () => {
                let blooks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].fill({ name: "Mega Bot", color: "#d71f27", class: "🤖", rarity: "Legendary", cash: [80000, 430000, 4200000, 62000000, 1000000000], time: [5, 5, 3, 3, 3], price: [7000000, 120000000, 1900000000, 35000000000], active: false, level: 4, bonus: 5.5 })
                reactHandler().stateNode.setState({ blooks });
            },
            'Remove Glitches': () => {
                reactHandler().stateNode.setState({
                    glitch: "",
                    bites: 0,
                    ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    hazards: ["", "", "", "", ""],
                    lol: false,
                    joke: false,
                    slow: false,
                    dance: false,
                    popUpAmount: 0,
                });
            },
            'Max Blooks': () => {
                reactHandler().stateNode.state.blooks.forEach(blook => { blook.level = 4 });
            },
            'Set Cash': () => {
                let cash = Number(parseFloat(prompt('How much cash do you want?')));
                reactHandler().stateNode.setState({ cash });
            },
        },
        fishing: {
            'Set Weight': () => {
                let weight = Number(parseFloat(prompt('How much weight do you want?')));
                reactHandler().stateNode.setState({ weight2: weight, weight });
            },
            'Set Lure': () => {
                let lure = Number(parseFloat(prompt('What do you want to set your lure to? (1 - 5)'))) - 1;
                reactHandler().stateNode.setState({ lure: lure < 0 ? 0 : lure > 4 ? 4 : lure });
            }
        },
        gold: {
            'Set Gold': () => {
                let gold = Number(parseFloat(prompt('How much gold do you want?')));
                reactHandler().stateNode.setState({ gold2: gold, gold });
            },
            'Chest ESP': () => { chestESP = !chestESP },
            "Set Player's Gold": () => {
                let e = reactHandler(),
                    player = prompt("Player to set gold"),
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
            }
        },
        racing: {
            'Instant Win': () => {
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
            }
        },
        defense: {
            'Clear Enemies': () => {
                reactHandler().stateNode.enemies = [];
            },
            'Max Towers': () => {
                reactHandler().stateNode.towers.forEach(tower => {
                    tower.damage = 99999999;
                    tower.range = 99999999;
                    tower.fullCd = 0;
                });
            },
            'Remove Ducks': () => {
                data = reactHandler().stateNode;
                data.ducks.forEach(x => { data.tiles[x.y][x.x] = 0; });
                data.ducks.length = 0;
            },
            'Place Towers Anywhere': () => {
                reactHandler().stateNode.tiles = reactHandler().stateNode.tiles.map(x => x.map(e => e == 2 ? 0 : e));
            },
            'Set Damage': () => {
                let dmg = Number(parseFloat(prompt('How much damage do you want?')));
                reactHandler().stateNode.dmg = dmg;
            },
            'Set Round': () => {
                let round = Number(parseFloat(prompt('What round do you want to set it to?')));
                reactHandler().stateNode.setState({ round });
            },
            'Set Tokens': () => {
                let tokens = Number(parseFloat(prompt('How many tokens do you want?')));
                reactHandler().stateNode.setState({ tokens });
            }
        },
        doom: {
            'Set Coins': () => {
                try {
                    reactHandler().stateNode.props.setTowerCoins(Number(parseFloat(prompt('How many coins do you want?'))));
                } catch { }
            },
            'Lower Enemy Stats': () => {
                let data = reactHandler().stateNode.state;
                if (data.phase != 'select') return alert('You must be on the attribute selection page!');
                reactHandler().stateNode.setState({ enemyCard: { ...data.enemyCard, strength: 0, charisma: 0, wisdom: 0 } })
            },
            'Max Player Stats': () => {
                let data = reactHandler().stateNode.state;
                if (data.phase != 'select') return alert('You must be on the attribute selection page!');
                reactHandler().stateNode.setState({ myCard: { ...data.myCard, strength: 20, charisma: 20, wisdom: 20 } })
            },
            'Heal Player': () => {
                reactHandler().stateNode.setState({ myLife: 100 });
            }
        },
        rush: {
            'Set Defense': () => {
                let e = reactHandler();
                e.stateNode.props.firebase.setVal({
                    id: e.stateNode.props.client.hostId,
                    path: 'c/' + e.stateNode.props.client.name + '/d',
                    val: Number(parseFloat(prompt('How much defense do you want?')))
                });
            },
            'Set Blooks': () => {
                let e = reactHandler();
                e.stateNode.props.firebase.setVal({
                    id: e.stateNode.props.client.hostId,
                    path: 'c/' + e.stateNode.props.client.name + '/bs',
                    val: Number(parseFloat(prompt('How many blooks do you want?')))
                });
            }
        }
    };

    let global = document.createElement('details');
    global.innerHTML = (`<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>`);
    for (var i = 0; i < Object.keys(cheats.global).length; i++) {
        let cheat = createButton(Object.keys(cheats.global)[i]);
        cheat.onclick = cheats.global[Object.keys(cheats.global)[i]];
        global.appendChild(cheat);
    }
    global.open = true;
    global.style.paddingBottom = '10px';
    body.appendChild(global);

    let cheatDiv = document.createElement('div');
    body.appendChild(cheatDiv);

    loop = setInterval(() => {
        if (curPage != getSite()) {
            curPage = getSite();
            curPageEl.innerText = getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected'
            Array.from(cheatDiv.children).forEach(x => x.remove());
            if (curPage && cheats[curPage]) Object.keys(cheats[curPage]).forEach(cheat => {
                let button = createButton(cheat);
                button.onclick = cheats[curPage][cheat];
                cheatDiv.appendChild(button);
                cheatDiv.appendChild(document.createElement('br'));
            })
        };
        let activeCheatsText = (`Auto Answer: ${autoAnswer ? 'Enabled' : 'Disabled'}\nHighlight Answers: ${highlightAnswers ? 'Enabled' : 'Disabled'}${curPage == 'kingdom' ? `\nChoice ESP: ${choiceESP ? 'Enabled' : 'Disabled'}` : curPage == 'crypto' ? `\nAuto Hack: ${autoPassword ? 'Enabled' : 'Disabled'}` : curPage == 'gold' ? `\nChest ESP: ${chestESP ? 'Enabled' : 'Disabled'}` : ''}`);
        activeCheats.innerText != activeCheatsText && (activeCheats.innerText = activeCheatsText);
        if (autoAnswer) {
            try {
                Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedState.question.correctAnswers[0])[0].click();
            } catch {
                try {
                    Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedProps.client.question.correctAnswers[0])[0].click();
                } catch { };
            };
        };
        if (highlightAnswers) {
            try {
                Array.from(document.querySelector('div[class*="answersHolder"').children).forEach(x => {
                    if (reactHandler().memoizedState.question.correctAnswers.includes(x.innerText) || reactHandler().memoizedProps.client.question.correctAnswers.includes(x.innerText)) x.firstChild.style = 'background-color: rgb(0, 207, 119);';
                    else x.firstChild.style = 'background-color: rgb(225, 40, 33);';
                });
            } catch { }
        };
        if (curPage == 'kingdom') {
            Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove())
            if (choiceESP) {
                try {
                    let elements = {
                        materials: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('tree'))),
                        people: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('users') && e.parentElement.className.includes('statContainer'))),
                        happiness: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('grin'))),
                        gold: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('coins')))
                    }
                    let data = reactHandler().stateNode.state.guest;
                    Object.entries(data.yes).forEach(x => {
                        if (x[0] == 'msg') return;
                        let element = document.createElement('div');
                        element.className = 'choiceESP';
                        element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                        element.innerText = String(x[1])
                        elements[x[0]].appendChild(element);
                    })
                    Object.entries(data.no).forEach(x => {
                        if (x[0] == 'msg') return;
                        let element = document.createElement('div');
                        element.className = 'choiceESP';
                        element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                        element.innerText = String(x[1])
                        elements[x[0]].appendChild(element);
                    })
                } catch (e) { }
            };
        }
        if (curPage == 'crypto' && autoPassword) {
            let { stage, correctPassword } = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state;
            if (stage == "hack") Array.from(document.querySelectorAll('div')).filter(x => x.innerHTML == correctPassword)[0].click();
        };
        if (curPage == 'gold' && chestESP) {
            try {
                if (reactHandler().stateNode.state.stage == 'prize') {
                    let { choices } = reactHandler().stateNode.state;
                    let div = document.querySelector("div[class*='regularBody']").children[1];
                    if (div) {
                        if (!document.querySelectorAll(".chest-esp").length) choices.forEach((box, i) => {
                            textElement = document.createElement('p');
                            textElement.className = "chest-esp";
                            textElement.innerText = box.text;
                            textElement.style = `text-align: center;
                    font-size: 30px;
                    color: white;
                    font-family:Titan One;
                    sans-serif;
                    border-color: black;
                    margin-top: 200px;`
                            try { div.children[i].appendChild(textElement); } catch (e) { console.log(e) }
                        });
                        else choices.forEach((box, i) => {
                            if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) div.children[i].children[1].innerText = box.text;
                        })
                    }
                }
            } catch (e) { console.log(e) }
        };
    });

    let curPage = getSite();
    if (curPage && cheats[curPage]) Object.keys(cheats[curPage]).forEach(cheat => {
        let button = createButton(cheat);
        button.onclick = cheats[curPage][cheat];
        cheatDiv.appendChild(button);
        cheatDiv.appendChild(document.createElement('br'));
    })

    function createButton(cheat) {
        let button = document.createElement('button');
        button.classList.add('cheat');
        button.innerText = cheat;
        return button
    }
    function getSite(capitalize) {
        switch (window.location.pathname.split('/')[2]) {
            case 'rush': return capitalize ? 'Blook Rush' : 'rush';
            case 'gold': return capitalize ? 'Gold Quest' : 'gold';
            case 'fishing': return capitalize ? 'Fishing Frenzy' : 'fishing';
            case 'hack': return capitalize ? 'Crypto Hack' : 'crypto';
            case 'battle-royale': return capitalize ? 'Battle Royale' : 'royale';
            case 'factory': return capitalize ? 'Factory' : 'factory';
            case 'racing': return capitalize ? 'Racing' : 'racing';
            case 'classic': return capitalize ? 'Classic' : 'classic';
            default: switch (window.location.pathname.split('/')[1]) {
                case 'defense': return capitalize ? 'Tower Defense' : 'defense';
                case 'cafe': return capitalize ? 'Café' : 'cafe';
                case 'tower': return capitalize ? 'Tower of Doom' : 'doom';
                case 'kingdom': return capitalize ? 'Crazy Kingdom' : 'kingdom';
                default: return false;
            }
        };
    };
    function toggleHidden(e) {
        e.code == 'KeyE' && (GUI.hidden = !GUI.hidden)
    };
    addEventListener('keypress', toggleHidden);
})()
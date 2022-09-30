(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
    const blooks = [
        "Elf",
        "Witch",
        "Wizard",
        "Fairy",
        "Slime Monster",
        "Jester",
        "Dragon",
        "Unicorn",
        "Queen",
        "King",
        "Agent Owl",
        "Master Elf",
        "Phantom King",
        "Snow Globe",
        "Holiday Gift",
        "Hot Chocolate",
        "Holiday Wreath",
        "Gingerbread Man",
        "Gingerbread House",
        "Snowman",
        "Santa Claus",
        "Frost Wreath",
        "Tropical Globe",
        "Two of Spades",
        "Eat Me",
        "Drink Me",
        "Alice",
        "Queen of Hearts",
        "Dormouse",
        "White Rabbit",
        "Cheshire Cat",
        "Caterpillar",
        "Mad Hatter",
        "King of Hearts",
        "Toast",
        "Cereal",
        "Yogurt",
        "Breakfast Combo",
        "Orange Juice",
        "Milk",
        "Waffle",
        "Pancakes",
        "French Toast",
        "Pizza",
        "Sandwich",
        "Pumpkin",
        "Swamp Monster",
        "Frankenstein",
        "Vampire",
        "Zombie",
        "Mummy",
        "Werewolf",
        "Ghost",
        "Haunted Pumpkin",
        "Spooky Pumpkin",
        "Spooky Mummy",
        "Spooky Ghost",
        "Earth",
        "Meteor",
        "Stars",
        "Alien",
        "Planet",
        "UFO",
        "Spaceship",
        "Astronaut",
        "Red Astronaut",
        "Blue Astronaut",
        "Green Astronaut",
        "Pink Astronaut",
        "Orange Astronaut",
        "Yellow Astronaut",
        "Black Astronaut",
        "Purple Astronaut",
        "Brown Astronaut",
        "Cyan Astronaut",
        "Lime Astronaut",
        "Tim the Alien",
        "Rainbow Astronaut",
        "Lil Bot",
        "Lovely Bot",
        "Angry Bot",
        "Happy Bot",
        "Watson",
        "Buddy Bot",
        "Brainy Bot",
        "Mega Bot",
        "Old Boot",
        "Jellyfish",
        "Clownfish",
        "Frog",
        "Crab",
        "Pufferfish",
        "Blobfish",
        "Octopus",
        "Narwhal",
        "Baby Shark",
        "Megalodon",
        "Rainbow Jellyfish",
        "Blizzard Clownfish",
        "Lovely Frog",
        "Lucky Frog",
        "Spring Frog",
        "Poison Dart Frog",
        "Lemon Crab",
        "Pirate Pufferfish",
        "Donut Blobfish",
        "Crimson Octopus",
        "Rainbow Narwhal",
        "Panda",
        "Sloth",
        "Tenrec",
        "Flamingo",
        "Zebra",
        "Elephant",
        "Lemur",
        "Peacock",
        "Chameleon",
        "Lion",
        "Rainbow Panda",
        "White Peacock",
        "Tiger Zebra",
        "Amber",
        "Dino Egg",
        "Dino Fossil",
        "Stegosaurus",
        "Velociraptor",
        "Brontosaurus",
        "Triceratops",
        "Tyrannosaurus Rex",
        "Ice Bat",
        "Ice Bug",
        "Ice Elemental",
        "Rock Monster",
        "Dink",
        "Donk",
        "Bush Monster",
        "Yeti",
        "Ice Slime",
        "Frozen Fossil",
        "Ice Crab"
    ];
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (document.location.pathname != "/play/lobby") {
                alert("You must be in the lobby!");
            } else {
                reactHandler().stateNode.state.unlocks = blooks
                reactHandler().stateNode.forceUpdate();
                alert('Spoofed');
            }
})();

function footer() {
    let element = document.createElement('div');

    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Made by Overtime <br> My <a style="color: #0000ff;" href="https://twitch.tv/overtimepog" target="_blank">twitch</a></p>`;
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
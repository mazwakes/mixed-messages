//outputting a random number between 0 and 5
let randomNumber = (num) => Math.floor(Math.random() * num);

// outputing a random positive noun
let positiveNoun = () => {
  let positiveNouns = [
    "Queen",
    "Baby Girl",
    "Hero",
    "Champion",
    "Star",
    "Angel",
    "Warrior",
    "Princess",
    "Victor",
    "Dreamer",
    "Sunshine",
    "Goddess",
    "Miss. Inspiration",
  ];
  return positiveNouns[randomNumber(positiveNouns.length)];
};

// outputting a random positive message
let positiveMessage = () => {
  let positiveMessages = [
    "You are the best!",
    "You are capable of amazing things!",
    "Believe in yourself and you will be unstoppable.",
    "Your potential is limitless.",
    "Every day is a new opportunity to be happy.",
    "You are enough just as you are.",
    "Your hard work is paying off.",
    "You are making a difference in the world.",
    "Stay positive, good things will happen.",
    "You have the power to create change.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
  ];
  return positiveMessages[randomNumber(positiveMessages.length)];
};

// outputting a random nice addage
let niceAddage = () => {
  let niceAddages = [
    "every cloud has a silver lining.",
    "after the storm comes the calm.",
    "stars can't shine without darkness.",
    "the darkest hour is just before the dawn.",
    "in the end, everything will be okay. If it's not okay, it's not the end.",
    "smooth seas do not make skillful sailors.",
    "hardships often prepare ordinary people for an extraordinary destiny.",
    "when life gives you lemons, make lemonade.",
    "adversity is the mother of progress.",
    "it's always darkest before the dawn",
    "you are braver than you believe, stronger than you seem, and smarter than you think.",
  ];
  return niceAddages[randomNumber(niceAddages.length)];
};

//printing out the message
console.log(
  `Hey ${positiveNoun()}! ${positiveMessage()} Didn't anyone tell you, ${niceAddage()}`
);

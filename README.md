# React_memory-card
### Memory card game built using React.js.

This is a memory game where the goal is to click on every card only once each round, until you manage to 
click all 10 displayed.  
I built this game using functional components and <code>state</code> and <code>effect</code> hooks. There are three
states in total, for storing changing data: 
- <code>cards</code> : array of shuffled cards,
- <code>clickedCards</code> : array of clicked card ID's,
- <code>highScore</code> : number value holding the current high score  

<code>useEffect</code> hook with a <code>[clickedCards]</code> dependancy array means it will trigger its content every
time we add a card to the array, so the <code>shuffleCards()</code> function and checking for winner logic is in there.

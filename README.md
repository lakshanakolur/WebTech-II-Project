# WebTech-II-Project

A fun and interactive Hindi-to-English translation game for kids and adults alike. 

The game essentially bubbles up Hindi words and the player has to input the appropriate English translation of that word before the bubbles reaches the top of the screen and pops. 

The game has 2 modes :
Test mode – 3 words
Full Game Mode – 10 words

## Features 

### AJAX

The front-end uses HTML, CSS and JavaScript.

Asynchronous XHR requests are sent for interaction with backend, they are sent when a new word has to be retrieved and when the suitability of the translation has to be determined. 

### Flask

To implement APIs for interaction between front end and server. 

### MongoDB

To implement the database. 
Contains the Hindi word, English word, type of word, difficulty level associated with each word.

### Adaptive Difficulty (Smart Component)
The difficulty of subsequent questions asked is contingent on how aptly the current word is translated. 
Better the current answer, harder the next question!

### Semantic Similarity (Smart Component) 

One word may have multiple ‘correct’ translations, one more so than the others.
For example, the hindi word ‘khush’, could be translated to happy or joyful. 

<img width="500" alt="Screenshot 2019-12-10 at 9 06 02 PM" src="https://user-images.githubusercontent.com/33753405/70543902-2e58c980-1b91-11ea-893a-2a739f8aa56d.png">
- 
<img width="500" alt="Screenshot 2019-12-10 at 9 05 17 PM" src="https://user-images.githubusercontent.com/33753405/70544398-061d9a80-1b92-11ea-920a-cd07eaed82cd.png">
-
<img width="500" alt="Screenshot 2019-12-10 at 9 05 00 PM" src="https://user-images.githubusercontent.com/33753405/70544409-09188b00-1b92-11ea-83bc-9129a7eebd08.png">




# Baseball vs. Football

## Background
My Baseball vs. Football game is inspired from the popular Plants vs. Zombies from PopCap Games. It is similar to other games of the 2D tower defense genre. The game will have a theme of baseball players versus football players. The user is able to place down their own towers on the game board and will be able to engage in combat with enemy characters. The goal of the game is to build the strongest team possible in order to overcome each round of incoming enemies. The player will have 5 lives, and every friendly tower will have X amount of health points. The enemies will travel across the game board towards the users team at different speeds. The enemies will have 15-20 health points and will cause damage when they strike a friendly tower, eventually defeating the tower if not stopped. If the enemy touches the home base, then a life will be subtracted. Once the user's lives reach zero, they will be defeated. After every successful round, the difficult will increase in the form of more enemies travelling at an increased speed. 

## Functionality & MVPs
In Baseball vs. Football, the user will be able to:
* Use their mouse to select baseball players and drop them on a position on the game board
* Determine their best strategy and react to the incoming enemies
* Monitor their lives remaining and their tower's remaining lives.
* Defeat teams of enemies in order to proceed to levels of greater difficulty. 

In addition, this project will include:
* Music and sound effects that are able to be muted 
* A point system and a count of remaining zombies. 
* Health displays for the user's friendly towers. 
* A menu to pause, exit, or restart the game
* A production README

## Wireframe
![Settings Window](https://raw.githubusercontent.com/mattpettenato/JavaScript_Project/main/Wireframe.png)
* Grids for player towers
* Lanes for enemies to travel towards towers
* User life counter
* Remaining enemies for current round
* Round number
* Links to LinkedIn and GitHub
* Mute button to mute game music
* Area for new towers to be selected from
* Controls for pause and restart game
* Small box for instructions on how to play

## Technologies, Libraries, APIs
* JavaScript to write main code for game
* Canvas API for rending the game on screen
* Webpack as JavaScript module bundler 
* Sprites to illustrate game towers, enemies, effects, and board

## Implementation Timeline
Friday Afternoon & Weekend
* Set up project
* Ensure all needed technology is working
* Ensure canvas can have elements appearing
* Create main board for gameplay

Monday
* Work on game logic for player towers and enemies
* Ensure that game towers function as intended
* Work on being able to drag towers from bottom bar to spot on grid

Tuesday
* Finish work with towers from previous day
* Work on ability to increase difficulty of game as rounds increase
* Add music function and ability to mute
* Work on Pause Restart function

Wednesday
* Work on spites and cleaning up UI
* Work on background
* Work on possible animations

Thursday Morning
* Add last touches
* Deploy to GitHub / Heroku
* Plan Presentation
* Finalaize Proposal Readme

## Bonus Features
* Add different tower classes for different abilities
* Add different types of enemies for different abilities
* Add scoring and points 
* Add money to purchase towers or abilites
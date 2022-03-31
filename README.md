# 2048 Game

## Table of contents

- [Summary](#summary)
- [Usage](#usage)
- [Built with](#built-with)
- [Live website](#live-website)



## Summary

This project is my implementation of "2048" - popular sliding tile puzzle game. The logic was built based on the Web Dev Simplified video [link to the YT channel](https://www.youtube.com/c/WebDevSimplified);


**Intial view:**

![initial view](/docs/general-view-1.png)


**Gameboard view:**

![gameboard view](/docs/general-view-2.png)



## Usage

**Game objective**

The aim of the game is to merge tiles with the same values, until you get 2048 number:

![winning board](/docs/winning-board.png)


**Customization**

The user can personalize the game by choosing the grid size and base number:

![settings board](/docs/settings-board.png)


or enable dark mode:

![dark mode layout settings board](/docs/dark-mode-settings-board.png)

![dark mode layout game board ](/docs/dark-mode-gameboard.png)


The winning number will differ when you change base number or grid size. For instance, when:
- the base number is 8 and
- grid size is 3x3,

the aim of the game is to get 1280 number:

![game board with different settings](/docs/basenumber10_gridsize3x3.png)


**Failure**

After every sliding move, the new tile is randomly inserted into remaining unoccupied fields. The game ends in a failure, when there is no more space to insert new tile:


![losing board](/docs/losing-board.png)



## Built with

- Semantic HTML5
- SCSS + Grid + Flexbox
- Mobile-first workflow
- BEM naming convention
- RWD
- Vanilla JS with Classes
- Parcel

## Live website

[Here you can test live website](https://przem-przem.github.io/2048/)

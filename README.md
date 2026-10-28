## Love Is Blind 

![pod_image](Pod.png)

A small dating game inspired by the TV show **Love Is Blind**, built with **vanilla JavaScript, HTML and CSS**.

The project was created primarily to practise **Object-Oriented Programming (OOP)** and JavaScript class architecture.

**[Live demo] (https://loveisblind-seven.vercel.app)**

## The Concept

You play the contestant. You enter the pod, meet a randomly chosen candidate, and answer questions to build a connection.

Your answers affect your relationship score:

- Gain points → strengthen the connection
- Lose points → weaken the connection
- Score too low → the candidate can leave the pod
- Build a strong connection → you might have a match

Some questions have a single answer, while others allow multiple choices.

## Architecture

| Class | Responsibility |
|---|---|
| `Game` | Controls the overall game flow |
| `Pod` | Manages the pod state and interactions |
| `Candidate` | Holds a candidate's data |
| `Question` | Base class for all questions |
| `ChoiceQuestion` | Single and multiple choice (extends `Question`) |
| `FreeTextQuestion` | Free-text questions (extends `Question`) |
| `Answer` | Answer logic and scoring |
| `MatchingModal` | Displays the match outcome |
| `Button`, `Input` | Reusable UI components |
| `InputsManager` | Centralises user input handling |
| `MessageManager` | Handles dialogue and messages |

## What I practised

- Designing a class hierarchy (inheritance, e.g. `Question` → `ChoiceQuestion` / `FreeTextQuestion`)
- Separating game logic from UI
- Building reusable components without a framework
- DOM manipulation and event handling in vanilla JS

## Tech stack

JavaScript (ES6+ classes) · HTML5 · CSS3
# LoveIsBlind
oop related project

---
sidebar_position: 3
sidebar_label: 'Kanji'
---

# Kanji

## Kesalahpahaman Tentang Kanji
### Kanji tidak susah
### Tentang On Yomi dan Kun Yomi
Menghafal On yomi dan Kun Yomi dari sebuah kanji tidak akan membuatmu bisa membaca bahasa Jepang
## Isolated Kanji Study
## Vocab Kanji Study
[Kosakata](kosakata.md)

## Writing Kanji
[Kanji Kentei Part 1](https://ankiweb.net/shared/info/759825185)
[Kanji Kentei Part 2](https://ankiweb.net/shared/info/1113953752)

CSS Untuk Deck Kanji Kentei 
Download Font Noto Sans Japanese 
[Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
```
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Noto+Serif+JP&display=swap");

html.win,
html.mac,
html.linux:not(.android) {
  --main-font: "Noto Serif JP", serif;
}

html.mobile {
  --main-font: "Noto Serif JP", serif;
}

.card.nightMode {
  --main-bg: #1c2127;
  --main-color: #dadada;
  --sub-color: #7d8590;
  --grey: rgba(128, 128, 128, 0.1);
  --accent: #2980f1;
  font-family: var(--main-font);
  background-color: var(--main-bg);
  color: var(--main-color);
  font-size: 20px;
  text-align: center;
}


.card.nightMode b,
.card.nightMode strong {
  color: #2980f1; /* Blue color for bold text */
}

#qa {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  min-height: calc(100vh - 40px);
}

@font-face {
  font-family: "Noto Serif JP";
  src: local("Noto Serif JP"), local("Noto Serif JP Regular"),
    url("_NotoSerifJP.otf");
}

/* ----- Front elements ----- */
#content {
  margin-top: 24px;
}

.sentence {
  font-size: 28px;
}

/* PC replay button */
.replay-button {
  margin-top: -5px;
}
.replay-button svg {
  width: 30px;
  height: auto;
}
.replay-button svg path {
  fill: var(--main-color);
  transition: 0.2s;
}
.replay-button svg circle {
  fill: var(--main-bg);
  display: none;
}
.replay-button:hover svg path {
  fill: var(--sub-color);
}

/* Grid */
#container {
  margin: auto;
  border-style: solid;
  border-color: #8c8c8c;
  background-color: rgba(255, 255, 255, 0);
}
.vert-line {
  position: absolute;
  border-style: none;
  border-right-style: dotted;
  border-color: #8c8c8c;
}
.hori-line {
  position: absolute;
  border-style: none;
  border-bottom-style: dotted;
  border-color: #8c8c8c;
}

/* ----- Back elements ----- */

/* Stroke diagram */
#diagram {
  line-height: 0;
}
#diagram > img {
  height: 140px;
  width: 140px;
  position: relative;
  z-index: 100;
}

/* Extra info */
#extra {
  opacity: 0;
}

#extra:hover {
  opacity: 1;
}

/* ---------- Misc ---------- */

/* Remove default margins */
* {
  margin: 0px;
  padding: 0px;
}

/* Images */
img {
  height: 200px;
  width: auto;
  border-radius: 8px;
}

/* Underline CSS */
u {
  text-decoration: none;
  color: var(--accent);
  font-weight: 400;
}

/* Line margins */
hr {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
```
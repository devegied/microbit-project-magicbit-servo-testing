# Testuojame servo variklius su Magic:Bit V3.0

## Naudojimas

1. micro:bit [makecode](https://makecode.microbit.org/) projekte paspauskite ant **Extensions** meniu esančio po dantračio piktogramą (dešiniame viršutiniame kampe)
2. Ieškokite teksto `https://github.com/emakefun/pxt-magicbit`
3. Surastą plėtinį paspaudus pele jis bus įtrauktas į projektą

## Servo variklių valdymo blokai

```package
magicbit=github:emakefun/pxt-magicbit
```
Pasukti pasirinkti variklio ašį į nurodytą kampą (laipsniais, nuo 0 iki 180)
```block
magicbit.Servo(magicbit.Servos.S1, kampas)
```
Pasukti pasirinkti variklio ašį nuo pradinio kampo iki galutinio kampo pasirinktu greičiu (nuo 1 iki 10)
```block
magicbit.Servospeed(magicbit.Servos.S1, pradinisKampas, galutinisKampas, greitis)
```

## Pateiktas pavyzdys

Pateiktame pavyzdyje prie S1 prijungtas variklis nustatomas į vidurinę poziciją (90 laipsnių)

Paspaudus mygtuką A variklio kampas sumažinamas vienu laipsniu

Paspaudus mygtuką B variklio kampas padidinamas vienu laipsniu

Paspaudus abu mygtukus (A+B) variklis nustatomas į pradinę poziciją (kampas 0) ir vidutiniu greičiu keičia poziciją iki galutinės (kampas 180), ir ją pasiekęs vėl iki pradinės  (kampas 0)


> Open this page at [https://devegied.github.io/microbit-project-magicbit-servo-testing/](https://devegied.github.io/microbit-project-magicbit-servo-testing/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/devegied/microbit-project-magicbit-servo-testing** and import

## Edit this project ![Build status badge](https://github.com/devegied/microbit-project-magicbit-servo-testing/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/devegied/microbit-project-magicbit-servo-testing** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/devegied/microbit-project-magicbit-servo-testing/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

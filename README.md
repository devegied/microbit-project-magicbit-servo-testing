# Testuojame servo variklius su Magic:Bit V3.0

## Magic:Bit V3.0 naudojimas MakeCode projektuose

1. micro:bit [MakeCode](https://makecode.microbit.org/) projekte paspausk ant **Extensions** meniu esančio po dantračio piktogramą (<i class="icon setting large"></i> dešiniame viršutiniame kampe)
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



## Išbandyk pats

Kad išbandytum šį projektą su MakeCode

* Atidaryk [https://makecode.microbit.org/](https://makecode.microbit.org/)
* paspausk ant **Import** tuomet ant **Import URL**
* įklijuok **https://github.com/devegied/microbit-project-magicbit-servo-testing** ir spausk **Import**

#### Metadata (used for search, rendering)

* for PXT/microbit
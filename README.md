# InputExamples

### Scopul exemplului

In mod normal, folosesti `@Input()` atunci cand ai relatie de `Parinte -> Copil`, si copilul este direct in parinte.

Exista si situatii cand ierarhia e mai mare, de exemplu `A -> B -> C -> D`, si tu vrei sa trimiti date din `A` in `D`. Cu metoda de mai sus ar trebuii practic sa pui cate un @Input() in toate componentele pana ajungi la componenta in care e si `D`.


```
  // a-component-template
  <b-component [value]="inputValue"></b-component>
  
    // b-component-template
  <c-component [value]="inputValue"></c-component> -> nu foloseste inputul, doar il paseaza mai departe
  
    // c-component-template
  <d-component [value]="inputValue"></d-component> -> nu foloseste inputul, doar il paseaza mai departe
```

### Solutii

1. Service

Exista o metoda folosita, unde te folosesti de un serviciu in care ai un EventEmitter(), pe care il folosesti in parinte sa emiti date, iar copilul asculta pentru ele. Metoda este ok, dar totusi esti limitat (adaugi functii in plus in .ts-ul parintelui / poate valorile pe care vrei sa le pasezi spre copil le ai din template - luate cu | async pipe, in cazul asta adaugi o subscriptie in plus in .ts ca sa ai access la date).

2. Directive

Asta e cea mai flexibila metoda pentru a pasa date. Ce o face atat de flexibila, e Dependency Injection system. Declari o directiva cu inputurile de care ai nevoie, o folosesti pe orice componenta, iar dupa aceea, directiva o injectezi acolo unde ai nevoie de date.

Datorita la Depenency Injection Tree, poti pasa date de oriunde din ierarhie, de pe orice ramura.

Singurul lucru la care trebuie sa ai grija la metoda asta, e acela ca daca folosesti `ChangeDetectionStrategy.OnPush` (si ai face bine sa folosesti asta) trebuie sa faci trigger la Change Detection manual. Motivul pentru asta este acela ca folosind directiva de la un alt nivel din ierarhie, directiva nu stie nimic de componenta care o va injecta, deci Angular nu poate sa faca trigger la change detection asa cum o face in mod normal atunci cand ai in cazul cand ai `Parinte -> Copil` si valoarea inputului se modifica in parinte.

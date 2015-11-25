# Trier et ordonner

## Objectif

Réaliser une fonction qui trie une tableau de personnes suivant leur âge, croissant.

Plus précisément cette fonction prend une entrée de la forme:
```
[
  {
    age: 9,
    name: 'boule'
  }, {
    age: 6,
    name: 'bill'
  }
]
```
Et renvoie :
```
[
  {
    age: 6,
    name: 'bill'
  },
    age: 9,
    name: 'boule'
  }
]
```

Si l'argument n'est pas un tableau ou est un tableau vide, retournez la valeur null.

## Test

Ecrivez l'implémentation de votre solution dans le fichier src/sortPeople.js, à l'intérieur de la fonction sortPeople

Dans le terminal, placez-vous à la racine du projet (dans le répertoire kata-sort) et lancer
```
$ jasmine
```

Tant que des erreurs sont affichées, votre implémentation est incomplète. Lorsque jasmine ne renvoie que des marqueurs verts, l'exercice est réussi.

# TODO

- Content Manager:
  - Map :
    - Final version using Google API.
- Error manager
- Documentation
- Test components

## Guide rapide (français)

L'intégralité du contenu du site est récupéré depuis le fichier `content.json`.

Une administration du contenu sera implémentée dans un second temps, mais il est déjà possible de modifier / ajouter / supprimer des éléments.

Ces éléments disposent toujours :

- D'un titre (attribut `title`);
- D'un type (attribut `type`);
- Du contenu à afficher.

Les types suivants sont implémentés :

- `text` : Un texte simple
- `list` : Une liste
- `map` : Affiche une carte (pour le moment, une simple image avec redirection vers Google Map au clic)
- `pictures` : Une liste d'images
- `footer` : Du contenu de bas de page

Des exemples de tous les types de contenu sont déjà présents dans le fichier.

### Ajouter des photos

Pour ajouter des photos, cherchez le bloc de type `pictures` qui vous intéresse et copier-collez un bloc du type

```
{
  "src": "exterieur01-red.jpg",
  "name": "Gite de face"
},
```

Copiez votre image dans le dossier *static/img* et modifiez le bloc que vous avez copié pour y mettre le nom de l'image (avec l'extension) ainsi que son nom.

### Ajouter / Modifier du texte

De la même façon, pour ajouter du texte, cherchez le bloc correspondant et ajoutez votre contenu dans le même format que celui déjà présent.

### Précautions à la modification du fichier de contenu

Pensez toujours à faire une copie du fichier de contenu avant de le modifier.

Si le fichier n'est plus valide et que vous souhaitez retrouver un exemple fonctionnel, rendez vous à l'adresse suivante :
https://github.com/ThomasFerro/GiteLesEtangsDeLaBarette/blob/master/static/content.json

Après une modification, rendez-vous sur https://jsonformatter.curiousconcept.com/ et collez le contenu du fichier pour vérifier que ce dernier est correct.

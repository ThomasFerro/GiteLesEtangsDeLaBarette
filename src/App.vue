<template>
  <div id="app">
    <header>
      TODO ICON
    </header>
    <section>
      <h1>
        Le gite en images
      </h1>
      <div class="content">
        <pictures-slider class="pictures-container" source="gite">
          TODO Photos gite
          ..
        </pictures-slider>
      </div>
    </section>
    <section>
      <h1>
        En quelques mots
      </h1>
      <div class="content">
        <p>
          Nous vous accueillons dans notre gite 4 étoiles de 4 personnes situé à Corbie dans la Vallée de Somme, nous sommes situés façe aux étangs de la Barette en pleine zone protégée classée Natura 2000.
        </p>
        <p>
          Vous y trouverez calme et tranquillité et en chaque saison vous pourrez assister à de magnifiques levers de soleil sur les étangs.
        </p>
        <p>
        <p>
          4 vélos sont mis à votre dispositon pour vous évader dans ce coin de nature.
        </p>
      </div>
    </section>
    <section>
      <h1>
        Les détails
      </h1>
      <div class="content">
        <p>
          Gîte 4 étoiles de 110m² pour 4 personnes*.
        </p>
        <p>
          Tarifs semaine : 470€
        </p>

        <p>
          Prix tout inclus (draps, linge de toilette, 4 vélos, ménage).
        </p>

        <p>
          Réservation par mail : <a href="mailto:gitelesetangsdelabarette@hotmail.fr">gitelesetangsdelabarette@hotmail.fr</a>
        </p>

        <p>
          Ou par téléphone au : +33 (0)3 60 28 13 83
        </p>

        <i>
          * Possibilité couchage d'appoint (clic-clac 2 personnes)
        </i>
      </div>
    </section>
    <section>
      <h1>
        Plan
      </h1>
      <div class="content">
        TODO Plan
      </div>
    </section>
    <section>
      <h1>
        Aux alentours
      </h1>
      <div class="content">
        <ul>
          <li>L'abbatiale Saint Pierre à Corbie</li>
          <li>Le belvédère Sainte Colette à Corbie</li>
          <li>Les étangs de la Barette à Corbie</li>
          <li>L'église de la Neuville</li>
          <li>Le musée des amis du Vieux Corbie</li>
          <li>Le chemin de halage à pied où à vélo</li>
          <li>Le musée et mémorial Australien à Villers-Bretonneux</li>
          <li>Le mémorial Australien de Le Hamel</li>
          <li>L'hôtel de ville de Corbie</li>
          <li>Les Puits tournants à Fréchencourt</li>
        </ul>
      </div>
    </section>
    <section>
      <h1>
        A visiter
      </h1>
      <div class="content">
        <ul>
          <li>Les monuments de la grande guerre (Circuit du souvenir)</li>
          <li>Le musée "Somme 1916" à Albert</li>
          <li>Le musée "Historial de la grande guerre" à Péronne</li>
          <li>La cathédrale d'Amiens</li>
          <li>Le parc ornithologique du Marquenterre</li>
          <li>Samara" le grand parc naturel de la préhistoire</li>
          <li>Les hortillonnages d'Amiens en barque où à pied</li>
          <li>La maison de l'oiseau à Cayeux sur Mer</li>
          <li>La Baie de Somme à cheval où à pied</li>
          <li>La basilique d'Albert</li>
        </ul>
      </div>
    </section>
    <section>
      <h1>
        Les lieux à visiter en photos
      </h1>
      <div class="content">
        <!-- <pictures-slider>
          TODO Photos lieux à visiter
        </pictures-slider> -->
      </div>
    </section>
    <footer>
      Pascal & Sandra LECLERCQ
      <br>
      Gite « Les étangs de la Barette »
      <br>
      15 Route de Vaux 80800 CORBIE
      <br>
      Tél : +33 (0)3 60 28 13 83 / Mail : gitelesetangsdelabarette@hotmail.fr
      <br>
      Ce site web utilise les technologies suivantes:
      <br>
      Vue.js Copyright © 2014-2017 Evan You
      <br>
      Sass Copyright (c) 2006-2016 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
      <br>
      Vue-Carousel Copyright (c) 2016 - SSENSE
    </footer>
  </div>
</template>

<script>
import PicturesSlider from '@/components/PicturesSlider';

export default {
  name: 'app',
  components: {
    PicturesSlider,
  },
};
</script>

<style lang="scss">
@import 'main';

$app-background-color: $light-white;
$app-font-color: $light-black;
$max-width-small: 800px;
$max-width-medium: 1240px;
$section-width-small: 360px;
$section-width-medium: 760px;
$section-width-large: 1160px;

html {
  background-color: $app-background-color;
  color: $app-font-color;
}

#app {
  display: flex;
  flex-direction: column;

  h1 {
    color: $main-color;
  }

  header, section, footer {
    margin: auto;
    width: $section-width-small;
  }

  @media (min-width: $max-width-small) {
    header, section, footer {
      width: $section-width-medium;
    }
  }

  @media (min-width: $max-width-medium) {
    header, section, footer {
      width: $section-width-large;
    }
  }
}
</style>

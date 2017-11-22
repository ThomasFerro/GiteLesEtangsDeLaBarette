<template>
  <div id="app">
    <header>
      <img :src="logoSrc" alt="Les Etangs de la Barette"></img>
    </header>
    <content-manager :content="content">
    </content-manager>
  </div>
</template>

<script>
import axios from 'axios';
import ContentManager from '@/components/ContentManager';
import PicturesContent from '@/components/PicturesContent';

export default {
  name: 'app',
  data() {
    return {
      content: [],
      logoSrc: '',
    };
  },
  created() {
    // Logo
    try {
      this.logoSrc = require('./assets/logo.png');
    } catch (e) { } // eslint-disable-line no-empty

    // Content
    // TODO : Error management
    axios.get('/static/content.json')
      .then((data) => {
        if (data && data.data) {
          this.content = data.data;
        }
      });
  },
  components: {
    ContentManager,
    PicturesContent,
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

  header {
    height: 150px;
    display: flex;
    justify-content: center;

    img {
      height: 100%;
    }
  }
}
</style>

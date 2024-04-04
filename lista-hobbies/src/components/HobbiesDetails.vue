<template>
  <div>
    <h1>{{ selectedHobby }}</h1>
    <p v-if="selectedHobby">
      {{ hobbyDescriptions[selectedHobby] }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HobbiesDetails',
  props: {
    selectedHobby: String,
  },
  data() {
    return {
      hobbyDescriptions: {
        Correr:
          'Correr é uma atividade física que envolve correr ou correr rapidamente, geralmente como um exercício ou esporte.',
        Ler: 'Ler é a ação de entender e interpretar os significados de um texto. É uma atividade intelectual que promove o aprendizado e a imaginação.',
        Pintar:
          'Pintar é a aplicação de tinta a uma superfície usando pincéis ou outras ferramentas, geralmente para criar arte ou decorar objetos.',
        Cozinhar:
          'Cozinhar é a preparação de alimentos por meio de técnicas culinárias, muitas vezes para consumo ou compartilhamento com outras pessoas.',
        Viajar:
          'Viajar é a atividade de se deslocar de um lugar para outro, geralmente por prazer, aventura ou para conhecer novos lugares e culturas.',
      },
    };
  },
};
</script>

<style scoped>
/* Adicione estilos conforme necessário */
</style>

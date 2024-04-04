<template>
  <div class="sidebar">
    <h1>Meus Hobbies</h1>
    <ul class="hobbies-list">
      <li v-for="(hobby, index) in hobbies" :key="index">
        <button @click="selectHobby(index)" class="hobby-button">
          {{ hobby }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',
  data() {
    return {
      hobbies: ['Correr', 'Ler', 'Pintar', 'Cozinhar', 'Viajar'],
    };
  },
  methods: {
    selectHobby(index) {
      console.log('Hobby selecionado:', this.hobbies[index]);
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f0f0f0;
  padding: 20px;
  width: 200px; /* Definindo a largura da barra lateral */
  height: 100vh;
  position: fixed; /* Para fixar a barra lateral */
  top: 0; /* Posicionando no topo da tela */
  left: 0; /* Posicionando no lado esquerdo da tela */
}

h1 {
  color: #333;
  font-size: 24px;
  text-align: center;
}

ul.hobbies-list {
  list-style: none; /* Removendo os bullets */
  padding: 0;
  margin-top: 10px;
}

li {
  margin-bottom: 10px;
}

.hobby-button {
  background-color: #ddd;
  border: none;
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.hobby-button:hover {
  background-color: #ccc;
}
</style>

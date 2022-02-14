<script setup>
import { ref } from 'vue';

const sidesOfDice = {
  1: "dice/1.png",
  2: "dice/2.png",
  3: "dice/3.png",
  4: "dice/4.png",
  5: "dice/5.png",
  6: "dice/6.png"
};

const diceImg = ref("dice/rolling1.png");
const history = ref([]);
const showHistory = ref(false);

function rollDice() {
  // Calculate random dice number and set animation gif
  let num = Math.floor(Math.random() * 6 + 1);
  diceImg.value = "dice/rolling.gif";

  // Wait 1s then set img to dice side
  setTimeout(() => {
    diceImg.value = sidesOfDice[num];
    history.value.push(num);
  }, 1000);
}

function toggleHistory() {
  showHistory.value = !showHistory.value;
}
</script>

<template>
  <h1>Dice Roller</h1>
  <img :src="diceImg" @click="rollDice" id="dice" class="center" width="250">

  <button @click="toggleHistory" class="center">{{ showHistory ? 'Hide' : 'Show' }} Roll History</button>
  <table v-if="showHistory">
    <tr>
      <th>Roll #</th>
      <th>Value</th>
    </tr>
    <tr v-for="(item, index) in history" :key="item">
      <td>{{ index + 1 }}</td>
      <td>{{ item }}</td>
    </tr>
  </table>
</template>

<style>
  h1 {
    font-family: sans-serif;
    text-align: center;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  #dice {
    cursor: pointer;
  }

  table, th, td {
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    border-collapse: collapse;
  }

  th {
    background-color: lightgray;
  }

  th, td {
    padding-left: 1em;
    padding-right: 1em;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) {
    #dice {
      width: 100%;
    }
  }
</style>

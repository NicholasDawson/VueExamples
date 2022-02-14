<script setup>
import { ref } from "vue";

const sidesOfDice = {
  1: "dice/1.png",
  2: "dice/2.png",
  3: "dice/3.png",
  4: "dice/4.png",
  5: "dice/5.png",
  6: "dice/6.png",
};

const diceImg = ref("dice/rolling1.png");
const rolling = ref(false);
const history = ref([]);
const sum = ref(0);
const showHistory = ref(false);

function rollDice() {
  if (rolling.value) {
    return
  }
  // Calculate random dice number and set animation gif
  rolling.value = true;
  let num = Math.floor(Math.random() * 6 + 1);
  diceImg.value = "dice/rolling.gif";

  // Wait 1s then set img to dice side
  setTimeout(() => {
    diceImg.value = sidesOfDice[num];
    history.value.push(num);
    sum.value += num;
    rolling.value = false;
  }, 1000);
}

function toggleHistory() {
  showHistory.value = !showHistory.value;
}
</script>

<template>
  <h1>Dice Roller</h1>
  <p>A simple dice rolling app with hand drawn graphics.</p>
  <p>By: Nick Dawson</p>
  <img :src="diceImg" @click="rollDice" id="dice" :class="[rolling ? 'c-not-allowed' : 'c-pointer']" width="250" class="center" />

  <button @click="toggleHistory" class="center">
    {{ showHistory ? "Hide" : "Show" }} Roll History
  </button>
  <table v-if="showHistory">
    <tr>
      <th>Roll #</th>
      <th>Value</th>
    </tr>
    <tr v-for="(item, index) in history" :key="item">
      <td>{{ index + 1 }}</td>
      <td>{{ item }}</td>
    </tr>
    <tr>
      <td>Average: {{ (sum / history.length).toFixed(2) }}</td>
    </tr>
  </table>
</template>

<style>
h1, p {
  font-family: sans-serif;
  text-align: center;
}

.center {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.c-pointer {
  cursor: pointer;
}

.c-not-allowed {
  cursor: not-allowed;
}



table,
th,
td {
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  border-collapse: collapse;
}

th {
  background-color: lightgray;
}

th,
td {
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

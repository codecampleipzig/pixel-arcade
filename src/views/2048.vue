<template>
  <div>
    <h1>2048</h1>
    <div class="field-grid">
      <div v-for="(number, index) in field" :key="index">
        {{ number || "" }}
      </div>
    </div>
  </div>
</template>

<script>
import { indicesOfFreeCells, squashRow } from "@/2048";

export default {
  data() {
    return {
      field: Array(16).fill(0)
    };
  },
  methods: {
    keyup(event) {
      console.log(event);
      if (event.key == "ArrowLeft") {
        this.moveLeft();
        this.generateRandom2();
      }
    },
    moveLeft() {
      console.log("left");
      const firstRow = [
        this.field[0],
        this.field[1],
        this.field[2],
        this.field[3]
      ];

      const newFirstRow = squashRow(firstRow);

      const newField = [...this.field];

      newField[0] = newFirstRow[0];
      newField[1] = newFirstRow[1];
      newField[2] = newFirstRow[2];
      newField[3] = newFirstRow[3];

      this.field = newField;
    },
    generateRandom2() {
      const freeCells = indicesOfFreeCells(this.field);

      if (freeCells.length > 0) {
        const freeCell =
          freeCells[Math.floor(Math.random() * freeCells.length)];

        const newField = [...this.field];
        newField[freeCell] = 2;
        this.field = newField;
        // const newField = this.field.map((number, index) => index == freeCell ? 2 : number);
      }
    },
    startGame() {
      this.generateRandom2();
      this.generateRandom2();
    }
  },
  created() {
    document.addEventListener("keyup", this.keyup);
    this.startGame();
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.keyup);
  }
};
</script>

<style scoped>
.field-grid {
  display: grid;
  grid-template-columns: repeat(4, 4rem);
  grid-template-rows: repeat(4, 4rem);
}

.field-grid > * {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}
</style>

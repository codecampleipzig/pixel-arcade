<template>
  <div>
    <h1>2048</h1>
    <div v-if="won">You Won!!!</div>
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
      field: []
    };
  },
  methods: {
    box(col, row) {
      return this.field[row * 4 + col];
    },
    keyup(event) {
      console.log(event);
      if (event.key == "ArrowLeft") {
        this.moveLeft();
        this.generateRandom2();
      } else if (event.key == "ArrowRight") {
        this.moveRight();
        this.generateRandom2();
      } else if (event.key == "ArrowUp") {
        this.moveUp();
        this.generateRandom2();
      } else if (event.key == "ArrowDown") {
        this.moveDown();
        this.generateRandom2();
      }
    },
    moveLeft() {
      const firstRow = [
        this.field[0],
        this.field[1],
        this.field[2],
        this.field[3]
      ];
      const secondRow = [
        this.field[4],
        this.field[5],
        this.field[6],
        this.field[7]
      ];
      const thirdRow = [
        this.field[8],
        this.field[9],
        this.field[10],
        this.field[11]
      ];
      const fourthRow = [
        this.field[12],
        this.field[13],
        this.field[14],
        this.field[15]
      ];

      const newFirstRow = squashRow(firstRow);
      const newSecondRow = squashRow(secondRow);
      const newThirdRow = squashRow(thirdRow);
      const newFourthRow = squashRow(fourthRow);

      // clone the field
      const newField = [...this.field];

      newField[0] = newFirstRow[0];
      newField[1] = newFirstRow[1];
      newField[2] = newFirstRow[2];
      newField[3] = newFirstRow[3];
      newField[4] = newSecondRow[0];
      newField[5] = newSecondRow[1];
      newField[6] = newSecondRow[2];
      newField[7] = newSecondRow[3];
      newField[8] = newThirdRow[0];
      newField[9] = newThirdRow[1];
      newField[10] = newThirdRow[2];
      newField[11] = newThirdRow[3];
      newField[12] = newFourthRow[0];
      newField[13] = newFourthRow[1];
      newField[14] = newFourthRow[2];
      newField[15] = newFourthRow[3];

      console.log(newField);
      this.field = newField;
    },
    moveRight() {
      const newField = [...this.field];

      for (let rowIndex = 0; rowIndex < 4; ++rowIndex) {
        const row = [
          this.field[rowIndex * 4 + 3],
          this.field[rowIndex * 4 + 2],
          this.field[rowIndex * 4 + 1],
          this.field[rowIndex * 4 + 0]
        ];

        const newRow = squashRow(row);

        newField[rowIndex * 4 + 3] = newRow[0];
        newField[rowIndex * 4 + 2] = newRow[1];
        newField[rowIndex * 4 + 1] = newRow[2];
        newField[rowIndex * 4 + 0] = newRow[3];
      }

      this.field = newField;
    },
    moveUp() {
      const newField = [...this.field];

      for (let rowIndex = 0; rowIndex < 4; ++rowIndex) {
        const row = [
          this.field[0 + rowIndex],
          this.field[4 + rowIndex],
          this.field[8 + rowIndex],
          this.field[12 + rowIndex]
        ];

        const newRow = squashRow(row);

        newField[0 + rowIndex] = newRow[0];
        newField[4 + rowIndex] = newRow[1];
        newField[8 + rowIndex] = newRow[2];
        newField[12 + rowIndex] = newRow[3];
      }
      this.field = newField;
    },
    moveDown() {
      const newField = [...this.field];

      for (let rowIndex = 0; rowIndex < 4; ++rowIndex) {
        const indices = [
          12 + rowIndex,
          8 + rowIndex,
          4 + rowIndex,
          0 + rowIndex
        ];

        const row = [
          this.field[indices[0]],
          this.field[indices[1]],
          this.field[indices[2]],
          this.field[indices[3]]
        ];

        const newRow = squashRow(row);

        newField[indices[0]] = newRow[0];
        newField[indices[1]] = newRow[1];
        newField[indices[2]] = newRow[2];
        newField[indices[3]] = newRow[3];
      }
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
      this.field = Array(16).fill(0);
      this.generateRandom2();
      this.generateRandom2();
    }
  },
  computed: {
    won() {
      return this.field.includes(2048);
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

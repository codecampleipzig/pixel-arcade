<template>
  <div>
    <h1>2048</h1>
    <div class="field-grid">
      <div v-for="(field, index) in field" :key="index">
        {{ field ? field : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import { squashRow } from "@/2048";

export default {
  data() {
    return {
      field: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    keyup(event) {
      if (event.key == "ArrowLeft") {
        this.moveLeft();
      }
    },
    generateRandom2() {
      if (this.field.every(number => number != 0)) return;

      const randomIndex = Math.floor(Math.random() * this.field.length);
      if (this.field[randomIndex] == 0) {
        this.field[randomIndex] = 2;
        this.field = this.field.concat();
      } else {
        this.generateRandom2();
      }
    },
    moveLeft() {
      for (let rowIndex = 0; rowIndex < 4; ++rowIndex) {
        const indices = [
          rowIndex * 4 + 0,
          rowIndex * 4 + 1,
          rowIndex * 4 + 2,
          rowIndex * 4 + 3
        ];

        const row = indices.map(index => this.field[index]);

        const newRow = squashRow(row);

        indices.forEach((index, i) => (this.field[index] = newRow[i]));
        this.field = this.field.concat();
      }

      this.generateRandom2();
    }
  },
  created() {
    document.addEventListener("keyup", this.keyup);
  },
  beforeDestory() {
    document.removeEventListener("keyup", this.keyup);
  }
};
</script>

<style scoped>
.field-grid {
  display: grid;
  grid-template-columns: repeat(4, 4rem);
  grid-auto-rows: 4rem;
}

.field-grid > * {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}
</style>

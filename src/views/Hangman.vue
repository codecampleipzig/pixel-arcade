<template>
  <div>
    <div v-if="won">
      <h2>
        Congrats! You survived
      </h2>
      <button @click="resetGame">Try again</button>
    </div>
    <div v-else-if="lost">
      <h2>Sorry, you are dead</h2>
      <p>The word was {{ word }}</p>
      <button @click="resetGame">Try again</button>
    </div>
    <div v-else class="game">
      <h1>Hangman</h1>
      <h1>{{ wrongGuesses.length }} / {{ maxNumWrongGuesses }}</h1>
      <h2>{{ revealedWord }}</h2>
      <div class="alphabet">
        <button
          v-for="letter in alphabet"
          :key="letter"
          @click="guess(letter)"
          :class="{
            disabled: guesses.includes(letter)
          }"
        >
          {{ letter }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const generateAlphabet = () => {
  const result = [];
  for (
    let letter = "A";
    letter <= "Z";
    letter = String.fromCharCode(letter.charCodeAt(0) + 1)
  ) {
    result.push(letter);
  }
  return result;
};

const randomWord = () => {
  const words = ["dispatch", "commit", "route", "state", "watch", "method"];
  return words[Math.floor(Math.random() * words.length)];
};

export default {
  name: "Hangman",
  data() {
    return {
      maxNumWrongGuesses: 7,
      word: "",
      guesses: [],
      alphabet: generateAlphabet()
    };
  },
  methods: {
    guess(letter) {
      if (this.guesses.includes(letter)) return;
      this.guesses.push(letter);
    },
    handleWin() {
      console.log("You won");
    },
    resetGame() {
      this.word = randomWord();
      this.guesses = [];
    }
  },
  computed: {
    wrongGuesses() {
      return this.guesses.filter(
        letter => !this.word.toUpperCase().includes(letter)
      );
    },
    revealedWord() {
      return this.word
        .split("")
        .map(letter =>
          this.guesses.includes(letter.toUpperCase()) ? letter : "_"
        )
        .join("");
    },
    won() {
      return this.word && this.revealedWord == this.word;
    },
    lost() {
      return this.wrongGuesses.length >= this.maxNumWrongGuesses;
    }
  },
  watch: {
    won(newValue) {
      if (newValue) {
        this.handleWin();
      }
    }
  },
  created() {
    this.resetGame();
  }
};
</script>

<style scoped>
.disabled {
  opacity: 0.5;
}
</style>

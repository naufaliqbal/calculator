<template>
  <div id="calculator-display">
    <p v-text="log"></p>
    <div>
      <span class="log" v-html="operation"></span>
      <span class="result" v-text="currentNumber"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("calculation", ["log", "currentNumber"]),
    ...mapState("calculation", ["operation"])
  }
};
</script>

<style>
</style>
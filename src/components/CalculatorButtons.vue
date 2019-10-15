<template>
  <div id="calculator-buttons">
    <div
      v-for="num in 10"
      :class="['number', `number-${num-1}`]"
      :key="num"
      v-text="num-1"
      @click.prevent="inputNumber(num-1)"
    ></div>
    <div
      v-for="key in operationButton"
      :key="key.operation"
      v-html="key.symbol"
      @click.prevent="operation(key.operation)"
      :class="['operator', key.text]"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("calculation", ["inputNumber", "operation"])
  },
  computed: mapState("buttons", ["operationButton"])
};
</script>
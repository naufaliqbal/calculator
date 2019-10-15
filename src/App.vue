<template>
  <div id="calculator">
    <octocat></octocat>
    <calculator-display></calculator-display>
    <hr />
    <calculator-buttons></calculator-buttons>
  </div>
</template>

<script>
import CalculatorDisplay from "components/CalculatorDisplay";
import CalculatorButtons from "components/CalculatorButtons";
import Octocat from "components/Octocat";

export default {
  name: "calculator",
  components: {
    CalculatorDisplay,
    CalculatorButtons,
    Octocat
  }
};
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
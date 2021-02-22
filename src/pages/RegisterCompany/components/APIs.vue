<template>
  <div class="title-container">
    <h2 class="title">API's</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <div class="column">
      <CheckboxIntern label="Classificador" />
      <CheckboxIntern label="FullOCR" />
      <CheckboxIntern label="BackGroundCheck" />
      <CheckboxIntern label="Face Match" />
    </div>
    <div class="column">
      <CheckboxIntern label="Análise de Crédito" />
      <CheckboxIntern label="SERPRO" />
      <CheckboxIntern label="Prova da Vida" />
      <CheckboxIntern label="Processo PF" />
    </div>
  </div>
</template>

<script>
import CheckboxIntern from "@/components/CheckboxIntern.vue";

export default {
  name: "APIs",
  components: {
    CheckboxIntern
  }
};
</script>

<style lang="scss">
.title-container {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
}

.title-container > .title {
  font-size: "Raleway";
  font-size: 18px;
  font-weight: normal;
  color: $color-grey-medium;
  text-transform: uppercase;
}

.title-container > .bar {
  margin-top: 10px;
  width: 40px;
  height: 3px;
  background: $color-green;
}

.row {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;

  & + .column {
    margin-left: 100px;
  }
}

.column > .checkbox-container + .checkbox-container {
  margin-top: 10px;
}
</style>

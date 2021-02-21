<template>
  <div class="title-container">
    <h2 class="title">DADOS</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <InputCard label="Nome" placeholder="Nome" />
    <InputCard label="CPF" placeholder="CPF" width="265px" />
    <SelectCard label="Status" :data="status" width="265px" />
  </div>
  <div class="row">
    <InputCard label="E-mail" placeholder="E-mail" />
    <InputCard label="Cargo" placeholder="Cargo" width="265px" />
    <InputCard label="Telefone" placeholder="" width="75px" />
    <InputCard label="" placeholder="" width="169px" />
  </div>
  <div class="row">
    <InputCard label="Número" placeholder="00" width="75px" />
    <InputCard label="Rua" placeholder="Rua" />
    <InputCard label="Complemento" placeholder="Complemento" width="265px" />
    <InputCard label="Bairro" placeholder="Bairro" width="265px" />
  </div>
  <div class="row">
    <InputCard label="Cidade" placeholder="Cidade" />
    <InputCard label="CEP" placeholder="CEP" width="265px" />
    <SelectCard label="Estado" :data="states" width="100px" />
    <SelectCard label="País" :data="countries" width="169px" />
  </div>
  <div class="row">
    <InputCard label="Senha" placeholder="Senha" width="265px" />
  </div>
</template>

<script>
import InputCard from "@/components/InputCard.vue";
import SelectCard from "@/components/SelectCard.vue";

import states from "@/assets/mocks/states.js";
import countries from "@/assets/mocks/countries.js";

const status = ["Ativo", "Inativo"];

export default {
  name: "Data",
  components: {
    InputCard,
    SelectCard
  },
  data() {
    return {
      status,
      states,
      countries
    };
  }
};
</script>

<style lang="scss">
.title-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
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

  & + .row {
    margin-top: 15px;
  }

  > .container + .container {
    margin-left: 20px;
  }
}
</style>

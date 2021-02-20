<template>
  <div class="title-container">
    <h2 class="title">GERAL</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <InputCard label="CNPJ" placeholder="CNPJ" width="265px" />
    <InputCard
      label="Inscrição estadual"
      placeholder="Inscrição estadual"
      width="265px"
    />
  </div>
  <div class="row">
    <InputCard label="Razão Social" placeholder="Razão Social" />
    <InputCard label="Nome fantasia" placeholder="Nome fantasia" />
  </div>
  <div class="row">
    <InputCard label="Número" placeholder="00" width="75px" />
    <InputCard label="Complemento" placeholder="Complemento" />
    <InputCard label="Bairro" placeholder="Bairro" width="265px" />
  </div>
  <div class="row">
    <InputCard label="Cidade" placeholder="Cidade" />
    <InputCard label="Estado" placeholder="UF" width="75px" />
    <InputCard label="País" placeholder="País" width="169px" />
  </div>
  <div class="row">
    <InputCard label="Telefone" placeholder="" width="75px" />
    <InputCard label="" placeholder="" width="169px" />
    <InputCard label="Celular" placeholder="" width="75px" />
    <InputCard label="" placeholder="" width="169px" />
    <InputCard label="E-mail" placeholder="" />
  </div>
</template>

<script>
import InputCard from "@/components/InputCard.vue";

export default {
  name: "General",
  components: {
    InputCard
  }
};
</script>

<style scoped lang="scss">
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
}
</style>

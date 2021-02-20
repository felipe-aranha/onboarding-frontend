<template>
  <h1 class="title">Cadastro - Empresas</h1>
  <LabelList :data="menus" :onChange="setMenu" labelColor="white" />
  <section name="register-form" class="card-container">
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
  </section>
  <section class="button-container" name="button-container">
    <button class="common-button filled-button">Salvar</button>
    <button class="common-button outline-button">Cancelar</button>
  </section>
</template>

<script>
import LabelList from "@/components/LabelList.vue";
import InputCard from "@/components/InputCard.vue";

const menus = [
  {
    name: "Geral",
    selected: true
  },
  {
    name: "Layout",
    selected: false
  },
  {
    name: "API`s",
    selected: false
  }
];

function setMenu(name) {
  const newMenus = this.menus.map(menu => {
    if (menu.name === name)
      return {
        name,
        selected: true
      };

    return {
      name: menu.name,
      selected: false
    };
  });

  this.menus = newMenus;
}

export default {
  name: "RegisterCompany",
  components: {
    LabelList,
    InputCard
  },
  methods: {
    setMenu
  },
  data: function() {
    return {
      menus
    };
  }
};
</script>

<style scoped lang="scss">
.content > .title {
  margin-bottom: 35px;
  font-size: 15px;
  font-family: "Raleway";
  color: white;
  font-weight: unset;
}

.card-container {
  margin-top: 25px;
  padding: 20px;
  width: calc(100% - 40px);
  height: 500px;
  background: white;
  border-radius: 15px;
}

.card-container > .title-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.card-container > .title-container > .title {
  font-size: "Raleway";
  font-size: 18px;
  font-weight: normal;
  color: $color-grey-medium;
  text-transform: uppercase;
}

.card-container > .title-container > .bar {
  margin-top: 10px;
  width: 40px;
  height: 3px;
  background: $color-green;
}

.card-container > .row {
  display: flex;

  & + .row {
    margin-top: 15px;
  }
}

.button-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
}

.button-container > .common-button {
  width: 95px;
  height: 35px;
  border-radius: 17.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway";
  font-weight: bold;
  font-size: 15px;

  & + .common-button {
    margin-left: 15px;
  }
}

.button-container > .filled-button {
  background: $color-dark-blue;
  color: white;
}

.button-container > .outline-button {
  background: transparent;
  color: $color-dark-blue;
  border: 2px solid $color-dark-blue;
}
</style>

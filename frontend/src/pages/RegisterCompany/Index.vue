<template>
  <h1 class="title">Cadastro - Empresas</h1>
  <LabelList :data="menus" :onChange="setMenu" labelColor="white" />
  <section name="register-form" class="card-container">
    <General v-if="isMenuSelected('Geral')" />
    <Layout v-if="isMenuSelected('Layout')" />
  </section>
  <section class="button-container" name="button-container">
    <button class="common-button filled-button">Salvar</button>
    <button class="common-button outline-button">Cancelar</button>
  </section>
</template>

<script>
import LabelList from "@/components/LabelList.vue";
import General from "./components/General.vue";
import Layout from "./components/Layout.vue";

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

function isMenuSelected(name) {
  const selected = this.menus.find(one => one.selected);

  return selected.name === name;
}

export default {
  name: "RegisterCompany",
  components: {
    LabelList,
    General,
    Layout
  },
  methods: {
    setMenu,
    isMenuSelected
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

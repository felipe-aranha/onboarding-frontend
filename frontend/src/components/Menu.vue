<template>
  <aside class="menu-container">
    <img
      v-if="!collapse"
      class="logo"
      src="@/assets/images/logo-onboarding-2.png"
    />
    <img
      v-if="collapse"
      class="logo-collapsed"
      src="@/assets/images/logo-collapsed.png"
    />
    <Perfil photo="" name="Daniel" />
    <nav class="navigation">
      <MenuItem
        name="dashboard"
        label="Dashboard"
        icon="scale.png"
        :selected="this.menuSelected === 'dashboard'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="documents"
        label="Documentos"
        icon="document.png"
        :selected="this.menuSelected === 'documents'"
        :onClick="onClickMenu"
        :childrens="documentsSubMenu"
        :onClickSubMenu="onClickSubMenu"
        :subMenuSelected="this.subMenuSelected"
      />
      <MenuItem
        name="register"
        label="Cadastros"
        icon="users.png"
        :selected="this.menuSelected === 'register'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="searchs"
        label="Consultas"
        icon="search-green.png"
        :selected="this.menuSelected === 'searchs'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="reports"
        label="Relatórios"
        icon="report.png"
        :selected="this.menuSelected === 'reports'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="gear"
        label="Configurações"
        icon="gear.png"
        :selected="this.menuSelected === 'gear'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="params"
        label="Parâmetros"
        icon="database.png"
        :selected="this.menuSelected === 'params'"
        :onClick="onClickMenu"
        :childrens="paramsSubMenu"
        :onClickSubMenu="onClickSubMenu"
        :subMenuSelected="this.subMenuSelected"
      />
      <MenuItem
        name="help"
        label="Ajuda"
        icon="help.png"
        :selected="this.menuSelected === 'help'"
        :onClick="onClickMenu"
      />
    </nav>
  </aside>
</template>

<script>
import Perfil from "@/components/Perfil";
import MenuItem from "@/components/MenuItem";

const documentsSubMenu = [
  {
    label: "Onboarding",
    to: "onboarding"
  },
  {
    label: "Detalhe Transação",
    to: "transaction/detail"
  },
  {
    label: "Regras Pendentes",
    to: "rules"
  }
];

const paramsSubMenu = [
  {
    label: "Classificador",
    to: "classifier"
  },
  {
    label: "FullOcr",
    to: "ocr"
  },
  {
    label: "BackGroundCheck",
    to: "backgroundcheck"
  },
  {
    label: "Análise de crédito",
    to: "credit/analyse"
  },
  {
    label: "Processo PF",
    to: "process/pf"
  },
  {
    label: "Datavalid",
    to: "datavalid"
  },
  {
    label: "Face Match",
    to: "facematch"
  },
  {
    label: "Prova de vida",
    to: "prooflife"
  }
];

function onClickMenu(event, childrens) {
  const target = event.target.classList.contains("item-container")
    ? event.target
    : event.target.parentElement;

  const { menu } = target.dataset;

  if (menu !== this.menuSelected) this.subMenuSelected = "";
  if (menu === this.menuSelected) this.menuSelected = "";
  else this.menuSelected = menu;

  if (!childrens) this.$router.push(menu);
}

function onClickSubMenu(event, childrens) {
  const target = event.target.classList.contains("item")
    ? event.target
    : event.target.parentElement;
  this.subMenuSelected = target.dataset.name;

  const submenu = childrens.find(one => one.label === target.dataset.name);
  this.$router.push(submenu.to);
}

export default {
  name: "Menu",
  components: {
    Perfil,
    MenuItem
  },
  methods: {
    onClickMenu,
    onClickSubMenu
  },
  data: function() {
    return {
      documentsSubMenu,
      paramsSubMenu,
      menuSelected: "dashboard",
      subMenuSelected: ""
    };
  },
  computed: {
    collapse() {
      return this.$store.state.menu.collapse;
    }
  }
};
</script>

<style lang="scss">
.menu-container {
  padding: 30px 0;
  height: calc(100% - 60px);
  background: $color-primary;
  overflow-y: scroll;

  > .logo {
    width: 158px;
    margin-left: 30px;
    object-fit: contain;
  }

  > .logo-collapsed {
    width: 100%;
    height: 58.38px;
    object-fit: contain;
  }

  > .navigation {
    margin-top: 30px;
  }
}

.menu-container::-webkit-scrollbar {
  width: 0;
}
</style>

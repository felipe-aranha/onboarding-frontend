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
        :selected="menuSelected === 'dashboard'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="documents"
        label="Documentos"
        icon="document.png"
        :selected="menuSelected === 'documents'"
        :onClick="onClickMenu"
        :childrens="documentsSubMenu"
        :onClickSubMenu="onClickSubMenu"
      />
      <MenuItem
        name="register"
        label="Cadastros"
        icon="users.png"
        :selected="menuSelected === 'register'"
        :onClick="onClickMenu"
        :childrens="registerSubMenu"
        :onClickSubMenu="onClickSubMenu"
      />
      <MenuItem
        name="searchs"
        label="Consultas"
        icon="search-green.png"
        :selected="menuSelected === 'searchs'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="reports"
        label="Relatórios"
        icon="report.png"
        :selected="menuSelected === 'reports'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="gear"
        label="Configurações"
        icon="gear.png"
        :selected="menuSelected === 'gear'"
        :onClick="onClickMenu"
      />
      <MenuItem
        name="params"
        label="Parâmetros"
        icon="database.png"
        :selected="menuSelected === 'params'"
        :onClick="onClickMenu"
        :childrens="paramsSubMenu"
        :onClickSubMenu="onClickSubMenu"
      />
      <MenuItem
        name="help"
        label="Ajuda"
        icon="help.png"
        :selected="menuSelected === 'help'"
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
    to: "/auth/onboarding"
  },
  {
    label: "Detalhe Transação",
    to: "/auth/transaction/detail"
  },
  {
    label: "Regras Pendentes",
    to: "/auth/rules"
  }
];

const registerSubMenu = [
  {
    label: "Empresa",
    to: "/auth/register/company"
  },
  {
    label: "Usuário",
    to: "/auth/register/user"
  }
];

const paramsSubMenu = [
  {
    label: "Classificador",
    to: "/auth/classifier"
  },
  {
    label: "FullOcr",
    to: "/auth/ocr"
  },
  {
    label: "BackGroundCheck",
    to: "/auth/backgroundcheck"
  },
  {
    label: "Análise de crédito",
    to: "/auth/credit/analyse"
  },
  {
    label: "Processo PF",
    to: "/auth/process/pf"
  },
  {
    label: "Datavalid",
    to: "/auth/datavalid"
  },
  {
    label: "Face Match",
    to: "/auth/facematch"
  },
  {
    label: "Prova de vida",
    to: "/auth/prooflife"
  }
];

function onClickMenu(event, childrens) {
  const target = event.target.classList.contains("item-container")
    ? event.target
    : event.target.parentElement;

  const { menu } = target.dataset;

  const menuSelected = this.$store.state.menu.menuSelected;

  if (menu !== menuSelected)
    this.$store.dispatch({ type: "menu/setSubMenu", payload: { subMenu: "" } });

  if (menu === menuSelected)
    this.$store.dispatch({ type: "menu/setMenu", payload: { menu: "" } });
  else this.$store.dispatch({ type: "menu/setMenu", payload: { menu } });

  if (!childrens) this.$router.push(`/auth/${menu}`);

  const collapse = this.$store.state.menu.collapse;
  if (childrens && collapse) this.$store.dispatch("menu/toggleMenu");
}

function onClickSubMenu(event, childrens) {
  const target = event.target.classList.contains("item")
    ? event.target
    : event.target.parentElement;

  this.$store.dispatch({
    type: "menu/setSubMenu",
    payload: { subMenu: target.dataset.name }
  });

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
      registerSubMenu
    };
  },
  computed: {
    collapse() {
      return this.$store.state.menu.collapse;
    },
    menuSelected() {
      return this.$store.state.menu.menuSelected;
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

<template>
  <aside class="menu-container">
    <img class="logo" src="@/assets/images/logo-onboarding-2.png" />
    <Perfil photo="" name="Daniel" />
    <nav class="navigation">
      <MenuItem to="/auth/dashboard" label="Dashboard" icon="scale.png" />
      <MenuItem to="/auth/documents" label="Documentos" icon="document.png" />
      <MenuItem to="/auth/register" label="Cadastros" icon="users.png" />
      <MenuItem to="/auth/searchs" label="Consultas" icon="search-green.png" />
      <MenuItem to="/auth/reports" label="Relatórios" icon="report.png" />
      <MenuItem to="/auth/gear" label="Configurações" icon="gear.png" />
      <MenuItem to="/auth/params" label="Parâmetros" icon="database.png" />
      <MenuItem to="/auth/help" label="Ajuda" icon="help.png" />
    </nav>
  </aside>
</template>

<script>
import Perfil from "@/components/Perfil";
import MenuItem from "@/components/MenuItem";

export default {
  name: "Menu",
  components: {
    Perfil,
    MenuItem
  }
};
</script>

<style lang="scss">
.menu-container {
  padding: 30px;
  height: calc(100% - 60px);
  background: $color-primary;

  > .logo {
    width: 158px;
    object-fit: contain;
  }

  > .navigation {
    margin-top: 30px;
  }
}
</style>

<template>
  <div v-if="!collapse" class="layout-container">
    <div class="header-area">
      <Header />
    </div>
    <div class="menu-area">
      <Menu />
    </div>
    <div class="workspace-area">
      <router-view></router-view>
    </div>
  </div>

  <div v-if="collapse" class="layout-container menu-small">
    <div class="header-area">
      <Header />
    </div>
    <div class="menu-area">
      <Menu />
    </div>
    <div class="workspace-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "InternLayout",
  components: {
    Header,
    Menu
  },
  computed: {
    collapse() {
      return this.$store.state.menu.collapse;
    }
  }
};
</script>

<style lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 292px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "menu header"
    "menu workspace";

  > .header-area {
    grid-area: header;
  }

  > .menu-area {
    grid-area: menu;
  }

  > .workspace-area {
    grid-area: workspace;
  }
}

.menu-small {
  grid-template-columns: 90px 1fr;
}
</style>

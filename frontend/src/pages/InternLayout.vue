<template>
  <div v-if="!collapse" class="layout-container">
    <div class="header-area">
      <Header />
    </div>
    <div class="menu-area">
      <Menu />
    </div>
    <div class="workspace-area">
      <main class="page-container">
        <div class="blue-board"></div>
        <div class="content">
          <router-view></router-view>
        </div>
      </main>
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
      <main class="page-container">
        <div class="blue-board"></div>
        <div class="content">
          <router-view></router-view>
        </div>
      </main>
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

  > .workspace-area > .page-container {
    width: calc(100% - 120px);
    position: relative;
    padding: 0 60px;
    padding-top: 15px;
    display: block;
    height: 100%;
    background: $color-bg-auth;
  }

  > .workspace-area > .page-container > .blue-board {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 220px;
    background: $color-dark-blue;
  }

  > .workspace-area > .page-container > .content {
    position: relative;
    z-index: 50;
  }
}

.menu-small {
  grid-template-columns: 90px 1fr;
}
</style>

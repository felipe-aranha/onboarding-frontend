<template>
  <section name="header" class="header-container">
    <button class="button-container" @click="toggleMenu">
      <img src="@/assets/icons/menu.svg" class="menu-sandwich" />
    </button>
    <div class="navigation-container">
      <button class="button-container">
        <img src="@/assets/icons/search.svg" class="icon" />
      </button>
      <div class="separator"></div>
      <NotifyIndicator :newNotification="false" />
      <button class="button-container" @click="logout">
        <img src="@/assets/icons/logout.svg" class="icon" />
      </button>
    </div>
  </section>
</template>

<script>
import NotifyIndicator from "@/components/NotifyIndicator";

import { mapActions } from "vuex";

function logout(event) {
  event.preventDefault();
  this.$router.push("/login");
}

export default {
  name: "Header",
  components: {
    NotifyIndicator
  },
  methods: {
    logout,
    ...mapActions({
      toggleMenu: "menu/toggleMenu"
    })
  }
};
</script>

<style lang="scss">
.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;

  > .button-container {
    background: transparent;

    > .menu-sandwich {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }

  > .navigation-container {
    display: flex;

    > .button-container {
      background: transparent;

      > .icon {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }

    > .separator {
      margin: 0 20px;
      width: 1px;
      height: 25px;
      background: $color-light-grey;
    }

    > .button-container + .button-container {
      margin-left: 20px;
    }
  }
}
</style>

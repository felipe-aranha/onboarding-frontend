<template>
  <div v-if="!collapse" class="perfil-container">
    <img v-if="!photo" class="photo" src="@/assets/images/perfil.png" />
    <img v-if="photo" class="photo" :src="photo" />
    <div class="column">
      <p class="greeting">Olá,</p>
      <p class="name">{{ name }}</p>
      <button class="button-container">
        <img class="icon" src="@/assets/icons/edit-perfil.png" />
      </button>
    </div>
  </div>
  <div v-if="collapse" class="fill-area"></div>
</template>

<script>
export default {
  name: "Perfil",
  props: {
    photo: String,
    name: String
  },
  computed: {
    collapse() {
      return this.$store.state.menu.collapse;
    }
  }
};
</script>

<style lang="scss">
.perfil-container {
  margin-top: 60px;
  margin-left: 30px;
  display: flex;
  align-items: center;

  > .photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    background: $color-secondary;
  }

  > .column {
    margin-left: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    > .greeting {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }

    > .name {
      font-size: 16px;
      color: white;
    }

    > .button-container {
      background: transparent;

      > .icon {
        margin-top: 10px;
        width: 22px;
        height: 22px;
        object-fit: contain;
      }
    }
  }
}

.fill-area {
  width: 100%;
  height: 78px;
}
</style>

<template>
  <button
    v-if="!selected && !childrens"
    class="item-container"
    @click="event => onClick(event, childrens)"
    :data-menu="name"
  >
    <img class="icon" :src="require(`@/assets/icons/${icon}`)" />
    <p v-if="!collapse" class="label">{{ label }}</p>
  </button>

  <button
    v-if="selected && !childrens"
    class="item-container selected"
    @click="event => onClick(event, childrens)"
    :data-menu="name"
  >
    <div class="badge"></div>
    <img class="icon" :src="require(`@/assets/icons/${icon}`)" />
    <p v-if="!collapse" class="label">{{ label }}</p>
  </button>

  <button
    v-if="!selected && childrens?.length > 0"
    class="item-container"
    @click="event => onClick(event, childrens)"
    :data-menu="name"
  >
    <img class="icon" :src="require(`@/assets/icons/${icon}`)" />
    <p v-if="!collapse" class="label">{{ label }}</p>
  </button>

  <button
    v-if="selected && childrens?.length > 0"
    class="item-container selected"
    @click="event => onClick(event, childrens)"
    :data-menu="name"
  >
    <div class="badge"></div>
    <img class="icon" :src="require(`@/assets/icons/${icon}`)" />
    <p v-if="!collapse" class="label">{{ label }}</p>
  </button>
  <div v-if="selected && childrens?.length > 0" class="submenu">
    <button
      v-for="item in childrens"
      v-bind:key="item.label"
      class="item"
      @click="event => onClickSubMenu(event, childrens)"
      :data-name="item.label"
    >
      <p v-if="item.label !== subMenuSelected" class="label">
        {{ item.label }}
      </p>
      <p v-if="item.label === subMenuSelected" class="label selected">
        {{ item.label }}
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    label: String,
    icon: String,
    name: String,
    selected: Boolean,
    childrens: Array,
    onClick: Function,
    onClickSubMenu: Function,
    subMenuSelected: String
  },
  computed: {
    collapse() {
      return this.$store.state.menu.collapse;
    }
  }
};
</script>

<style lang="scss">
.item-container {
  position: relative;
  padding-left: 30px;
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: transparent;

  > .icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  > .label {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  > .badge {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: $color-green;
  }
}

.selected {
  background: $color-selected;
}

.submenu {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .item {
    padding-left: 30px;
    height: 55px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: $color-selected;
    font-size: 18px;

    > .label {
      color: white;
    }

    > .selected {
      color: $color-green;
    }
  }
}
</style>

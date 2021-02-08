<template>
  <button class="button-container">
    <img src="@/assets/icons/bell.svg" class="icon" />
    <div v-if="newNotification" class="badge"></div>
  </button>
</template>

<script>
export default {
  name: "NotifyIndicator",
  props: {
    newNotification: Boolean
  }
};
</script>

<style scoped lang="scss">
.button-container {
  position: relative;
  background: transparent;

  > .icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  > .badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $color-badge;
  }
}
</style>

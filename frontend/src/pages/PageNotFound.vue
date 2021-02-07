<template>
  <div class="container">
    <p class="code">404</p>
    <p class="message">A página não existe.</p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: $color-bg-auth;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > .code {
    font-size: 64px;
    color: black;
  }

  > .message {
    font-size: 24px;
    margin-top: 20px;
  }
}
</style>

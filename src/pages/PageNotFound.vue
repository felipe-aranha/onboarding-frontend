<template>
  <div class="container">
    <p class="code">404</p>
    <p class="message">A página não existe.</p>
    <button @click="back" class="back">Voltar</button>
  </div>
</template>

<script>
function back() {
  this.$router.back();
}

export default {
  name: "PageNotFound",
  methods: {
    back
  }
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

  > .back {
    margin-top: 30px;
    font-size: 16px;
    color: black;
    background: transparent;
  }
}
</style>

<template>
  <div class="page-container">
    <img src="@/assets/images/logo-onboarding.png" class="logo" />
    <form method="post" action="" class="form-container">
      <InputAuth
        type="text"
        source="user-icon.png"
        placeholder="Nome do usuário ou enderaço de e-mail"
        :onChange="onChangeEmail"
      />
      <InputAuth
        type="password"
        source="lock-icon.png"
        placeholder="Senha"
        :onChange="onChangePassword"
      />
      <div class="buttons-container">
        <Checkbox label="Lembra de mim" />
        <button class="submit-button">ACESSO</button>
      </div>
    </form>
    <div class="brand-container">
      <img class="avanter-logo" src="@/assets/images/logo-avanter.png" />
    </div>
  </div>
</template>

<script>
import InputAuth from "@/components/InputAuth.vue";
import Checkbox from "@/components/Checkbox.vue";

function onChangeEmail(event) {
  const { value } = event.target;
  this.email = value;
}

function onChangePassword(event) {
  const { value } = event.target;
  this.password = value;
}

export default {
  name: "Login",
  components: {
    InputAuth,
    Checkbox
  },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onChangeEmail,
    onChangePassword
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: $color-bg-auth;

  > .logo {
    width: 200px;
    object-fit: contain;
  }

  > .form-container {
    padding-top: 40px;
    width: 400px;

    > .input-container + .input-container {
      margin-top: 20px;
    }

    > .buttons-container {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }

    > .buttons-container > .submit-button {
      width: 190px;
      min-width: 190px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: bold;
      color: white;
      background: $color-primary;
      border-radius: 25px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
    }
  }

  > .brand-container {
    margin-top: 55px;
    width: 400px;
    display: flex;
    justify-content: flex-end;

    > .avanter-logo {
      height: 62px;
      object-fit: contain;
    }
  }
}
</style>

<template>
  <div class="page-container">
    <img src="@/assets/images/logo-onboarding.png" class="logo" />
    <form method="post" class="form-container" @submit="onSubmitForm">
      <InputAuth
        type="text"
        source="user-icon.png"
        placeholder="Nome do usuário ou endereço de e-mail"
        :onChange="onChangeEmail"
        required
      />
      <InputAuth
        type="password"
        source="lock-icon.png"
        placeholder="Senha"
        :onChange="onChangePassword"
        required
      />
      <div class="buttons-container">
        <Checkbox label="Lembra de mim" />
        <SubmitButtonAuth label="ACESSO" />
      </div>
      <div class="links-container">
        <router-link to="/recover/account" class="recover-account">
          Esqueci minha senha
        </router-link>
      </div>
    </form>
    <div class="brand-container">
      <img class="avanter-logo" src="@/assets/images/logo-avanter.png" />
    </div>
  </div>
</template>

<script>
import InputAuth from "@/components/InputAuth.vue";
import SubmitButtonAuth from "@/components/SubmitButtonAuth.vue";
import Checkbox from "@/components/Checkbox.vue";

function onChangeEmail(event) {
  const { value } = event.target;
  this.email = value;
}

function onChangePassword(event) {
  const { value } = event.target;
  this.password = value;
}

function onSubmitForm(event) {
  event.preventDefault();
  this.$router.push("/auth/dashboard");
}

export default {
  name: "Login",
  components: {
    InputAuth,
    Checkbox,
    SubmitButtonAuth
  },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onChangeEmail,
    onChangePassword,
    onSubmitForm
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
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
    }

    > .links-container {
      display: flex;
      align-items: center;
      justify-content: center;

      > .recover-account {
        text-decoration: none;
        color: $color-label;
        font-size: 15px;
        font-family: "Raleway";
      }

      > .recover-account:hover {
        color: $color-medium-purple;
      }
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

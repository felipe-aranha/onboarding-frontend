<template>
  <div class="page-container">
    <img src="@/assets/images/logo-onboarding.png" class="logo" />
    <form
      v-if="!sended"
      method="POST"
      class="form-container"
      @submit="onSubmitForm"
    >
      <InputAuth
        type="text"
        source="user-icon.png"
        placeholder="Nome do usuário ou endereço de e-mail"
        :onChange="onChangeEmail"
        required
      />
      <div class="button-container">
        <router-link to="/login" class="back-route">Voltar</router-link>
        <SubmitButtonAuth label="ENVIAR" />
      </div>
    </form>
    <div v-if="sended" class="form-container">
      <p class="message">
        Um e-mail com as informações para troca de senha foi enviada a seu
        e-mail.
      </p>
      <div class="link-container">
        <router-link to="/login" class="back-route">Voltar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import InputAuth from "@/components/InputAuth.vue";
import SubmitButtonAuth from "@/components/SubmitButtonAuth.vue";

function onChangeEmail(event) {
  const { value } = event.target;
  this.identifier = value;
}

function onSubmitForm(event) {
  event.preventDefault();

  console.log(this.identifier);

  this.sended = true;
}

export default {
  name: "RecoverAccount",
  components: {
    InputAuth,
    SubmitButtonAuth
  },
  methods: {
    onChangeEmail,
    onSubmitForm
  },
  data() {
    return {
      identifier: "",
      sended: false
    };
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
    width: 400px;

    > .submit-button {
      margin: 0 auto;
      margin-top: 40px;
    }

    > .button-container {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .back-route {
        margin-left: 50px;
        text-decoration: none;
        color: $color-light-grey;
        font-size: 17px;
        font-family: "Raleway";
      }
    }

    > .message {
      margin-top: 20px;
      color: black;
      font-size: 15px;
      font-family: "Raleway";
      text-align: center;
    }

    > .link-container {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      > .back-route {
        text-decoration: none;
        font-weight: bold;
        color: black;
        font-size: 17px;
        font-family: "Raleway";
      }
    }
  }
}
</style>

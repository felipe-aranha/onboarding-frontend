<template>
  <div class="transaction-container">
    <img v-if="photo" :src="photo" class="photo" />
    <img v-if="!photo" src="@/assets/images/perfil.png" class="photo" />
    <div class="content">
      <p v-if="name" class="name">{{ name }}</p>
      <p v-if="!name" class="name">Nome</p>
      <p v-if="lastName" class="lastName">{{ lastName }}</p>
      <div class="document-container">
        <img class="icon" src="@/assets/icons/document.svg" />
        <p v-if="documentType" class="document-label">{{ documentType }}</p>
        <p v-if="!documentType" class="document-label">Documento</p>
      </div>
      <p v-if="status === 'Análise'" class="status orange">{{ status }}</p>
      <p v-if="status === 'Aprovado'" class="status green">{{ status }}</p>
      <p v-if="status === 'Reprovado'" class="status red">{{ status }}</p>
      <p v-if="!status" class="status grey">Sem status</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentTransaction",
  props: {
    photo: String,
    name: String,
    lastName: String,
    documentType: String,
    status: String
  }
};
</script>

<style lang="scss">
.transaction-container {
  display: flex;

  > .photo {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  > .content {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
  }

  > .content > .name,
  > .content > .last-name {
    font-family: "Raleway";
    font-size: 17px;
    font-weight: lighter;
    color: $color-grey-medium;
  }

  > .content > .document-container {
    margin-top: 10px;
    display: flex;
    align-content: center;
  }

  > .content > .document-container > .document-icon {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }

  > .content > .document-container > .document-label {
    margin-left: 10px;
    text-transform: uppercase;
    color: $color-grey-medium;
    font-family: "Raleway";
    font-weight: bold;
  }

  > .content > .status {
    margin-top: 10px;
    width: 90px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12.5px;
    font-family: "Raleway";
    font-weight: bold;
  }

  > .content > .orange {
    background: #ffdaa8;
    color: #ce974b;
  }

  > .content > .green {
    background: #9ddebc;
    color: #5ea27e;
  }

  > .content > .red {
    background: #de9d9d;
    color: #c15d5d;
  }

  > .content > .grey {
    background: #eee;
    color: #808080;
  }
}
</style>

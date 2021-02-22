<template>
  <h1 class="title">Dashboard</h1>
  <Select :data="units" />
  <section name="transactions-dashboard" class="card-container">
    <div class="card-header">
      <div class="title-container">
        <h2 class="title">TRANSAÇÕES <strong>ACUMULADAS</strong></h2>
        <div class="bar"></div>
      </div>
      <LabelList :data="filterTimes" :onChange="setTimeMenu" />
    </div>
    <div class="graphics-container">
      <div class="graphic-box">
        <Chart
          title="Total"
          :size="this.cartSize"
          color="#57C254"
          bgColor="white"
          :value="150"
          :goal="200"
        />
      </div>
      <div class="graphic-box">
        <Chart
          title="Aprovados"
          :size="this.cartSize"
          color="#F2C02C"
          bgColor="white"
          :value="75"
          :goal="200"
        />
      </div>
      <div class="graphic-box">
        <Chart
          title="Reprovados"
          :size="this.cartSize"
          color="#CE4219"
          bgColor="white"
          :value="30"
          :goal="200"
        />
      </div>
      <div class="graphic-box">
        <Chart
          title="Em análise"
          :size="this.cartSize"
          color="#E88512"
          bgColor="white"
          :value="100"
          :goal="200"
        />
      </div>
    </div>
  </section>
  <section name="recent-transactions" class="card-container">
    <div class="card-header">
      <div class="title-container">
        <h2 class="title">TRANSAÇÕES <strong>RECENTES</strong></h2>
        <div class="bar"></div>
      </div>
    </div>
    <div class="transactions-container">
      <RecentTransaction
        name="Natalia"
        lastName="Gouveia"
        documentType="CNH"
        status="Análise"
      />
      <RecentTransaction
        name="Guilherme"
        lastName="Albuquerque"
        documentType="CNH"
        status="Aprovado"
      />
      <RecentTransaction
        name="Robson"
        lastName="Pereira Silva"
        documentType="CPF"
        status="Reprovado"
      />
      <RecentTransaction
        name="Fabrício"
        lastName="Dias Silva"
        documentType="CNH"
        status="Reprovado"
      />
    </div>
  </section>
</template>

<script>
import Select from "@/components/Select";
import Chart from "@/components/Chart";
import LabelList from "@/components/LabelList";
import RecentTransaction from "@/components/RecentTransaction";

const units = ["Unidade"];

function setChatSizeToState(componentRef) {
  const { width } = window.screen;

  if (width > 1440) componentRef.cartSize = 200;
  else componentRef.cartSize = 150;
}

export default {
  name: "Dashboard",
  components: {
    Select,
    Chart,
    LabelList,
    RecentTransaction
  },
  data: function() {
    return {
      units,
      cartSize: 150
    };
  },
  computed: {
    filterTimes() {
      return this.$store.state.timeMenu.data;
    }
  },
  methods: {
    setTimeMenu(name) {
      this.$store.dispatch({
        type: "timeMenu/setMenuTime",
        payload: { name }
      });
    }
  },
  mounted() {
    setChatSizeToState(this);

    window.addEventListener("resize", () => {
      setChatSizeToState(this);
    });
  }
};
</script>

<style lang="scss">
.content > .title {
  margin-bottom: 25px;
  font-size: 15px;
  font-family: "Raleway";
  color: white;
  font-weight: unset;
}

.card-container {
  margin-top: 25px;
  padding: 20px;
  width: calc(100% - 40px);
  height: 265px;
  background: white;
  border-radius: 15px;

  & + .card-container {
    margin-top: 20px;
  }
}

.card-container > .card-header {
  display: flex;
  justify-content: space-between;
}

.card-container > .card-header > .title-container {
  display: flex;
  flex-direction: column;
}

.card-container > .card-header > .title-container > .title {
  font-size: "Raleway";
  font-size: 18px;
  font-weight: normal;
  color: $color-grey-medium;
}

.card-container > .card-header > .title-container > .bar {
  margin-top: 10px;
  width: 40px;
  height: 3px;
  background: $color-grey-light;
}

.card-container > .graphics-container {
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.card-container > .graphics-container > .graphic-box {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  & + .graphic-box {
    margin-left: 20px;
  }
}

.card-container > .transactions-container {
  padding: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

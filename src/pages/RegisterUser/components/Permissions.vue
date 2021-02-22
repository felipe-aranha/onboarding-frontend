<template>
  <div class="title-container">
    <h2 class="title">Permissões</h2>
    <div class="bar"></div>
  </div>
  <div class="row">
    <div class="column">
      <div class="row">
        <label class="area-label">Dashboard</label>
        <button
          class="select-all"
          data-identifier="dashboard"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso ao dashboard"
        :value="permissions.dashboard.dashboard"
        :onChange="onChangeCheckbox"
        identifier="dashboard/dashboard"
      />

      <div class="row">
        <label class="area-label">Documentos</label>
        <button
          class="select-all"
          data-identifier="documents"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso ao onboarding"
        :value="permissions.documents.onboarding"
        :onChange="onChangeCheckbox"
        identifier="documents/onboarding"
      />
      <CheckboxIntern
        label="Acesso ao detalhe de transações"
        :value="permissions.documents.transactions"
        :onChange="onChangeCheckbox"
        identifier="documents/transactions"
      />
      <CheckboxIntern
        label="Acesso a regras pendentes"
        :value="permissions.documents.rules"
        :onChange="onChangeCheckbox"
        identifier="documents/rules"
      />

      <div class="row">
        <label class="area-label">Cadastro</label>
        <button
          class="select-all"
          data-identifier="register"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso ao cadastro de empresa"
        :value="permissions.register.company"
        :onChange="onChangeCheckbox"
        identifier="register/company"
      />
      <CheckboxIntern
        label="Acesso ao cadastro de usuário"
        :value="permissions.register.user"
        :onChange="onChangeCheckbox"
        identifier="register/user"
      />
    </div>
    <div class="column">
      <div class="row">
        <label class="area-label">Consulta</label>
        <button
          class="select-all"
          data-identifier="searchs"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso a consultas"
        :value="permissions.searchs.searchs"
        :onChange="onChangeCheckbox"
        identifier="searchs/searchs"
      />

      <div class="row">
        <label class="area-label">Relatórios</label>
        <button
          class="select-all"
          data-identifier="reports"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso a relatórios"
        :value="permissions.reports.reports"
        :onChange="onChangeCheckbox"
        identifier="reports/reports"
      />

      <div class="row">
        <label class="area-label">Configurações</label>
        <button
          class="select-all"
          data-identifier="settings"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso a configurações"
        :value="permissions.settings.settings"
        :onChange="onChangeCheckbox"
        identifier="settings/settings"
      />

      <div class="row">
        <label class="area-label">Ajuda</label>
        <button class="select-all" data-identifier="help" @click="onSelectAll">
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso a ajuda"
        :value="permissions.help.help"
        :onChange="onChangeCheckbox"
        identifier="help/help"
      />
    </div>
    <div class="column">
      <div class="row">
        <label class="area-label">Parâmetros</label>
        <button
          class="select-all"
          data-identifier="params"
          @click="onSelectAll"
        >
          Selecionar tudo
        </button>
      </div>
      <CheckboxIntern
        label="Acesso ao classificador"
        :value="permissions.params.classifier"
        :onChange="onChangeCheckbox"
        identifier="params/classifier"
      />
      <CheckboxIntern
        label="Acesso ao FullOCR"
        :value="permissions.params.fullOCR"
        :onChange="onChangeCheckbox"
        identifier="params/fullOCR"
      />
      <CheckboxIntern
        label="Acesso ao verificador de antecedêntes (BackGroundCheck)"
        :value="permissions.params.backGroundCheck"
        :onChange="onChangeCheckbox"
        identifier="params/backGroundCheck"
      />
      <CheckboxIntern
        label="Acesso a análise de crédito"
        :value="permissions.params.creditAnalyse"
        :onChange="onChangeCheckbox"
        identifier="params/creditAnalyse"
      />
      <CheckboxIntern
        label="Acesso aos processos na Policia Federal"
        :value="permissions.params.federalPolicy"
        :onChange="onChangeCheckbox"
        identifier="params/federalPolicy"
      />
      <CheckboxIntern
        label="Acesso ao validador de dados (Datavalid)"
        :value="permissions.params.datavalid"
        :onChange="onChangeCheckbox"
        identifier="params/datavalid"
      />
      <CheckboxIntern
        label="Acesso ao face match"
        :value="permissions.params.facematch"
        :onChange="onChangeCheckbox"
        identifier="params/facematch"
      />
      <CheckboxIntern
        label="Acesso a prova de vida"
        :value="permissions.params.lifeProof"
        :onChange="onChangeCheckbox"
        identifier="params/lifeProof"
      />
    </div>
  </div>
</template>

<script>
import CheckboxIntern from "@/components/CheckboxIntern.vue";

const permissions = () => ({
  dashboard: {
    dashboard: false
  },
  documents: {
    onboarding: false,
    transactions: false,
    rules: false
  },
  register: {
    company: false,
    user: false
  },
  searchs: {
    searchs: false
  },
  reports: {
    reports: false
  },
  settings: {
    settings: false
  },
  help: {
    help: false
  },
  params: {
    classifier: false,
    fullOCR: false,
    backGroundCheck: false,
    creditAnalyse: false,
    federalPolicy: false,
    datavalid: false,
    facematch: false,
    lifeProof: false
  }
});

function onChangeCheckbox(event) {
  const { checked } = event.target;
  const [group, permission] = event.target.dataset.identifier.split("/");

  this.permissions[group][permission] = !!checked;
}

function onSelectAll(event) {
  const { identifier } = event.target.dataset;

  const entries = Object.entries(this.permissions);

  let newPermissions = {};

  for (const [role, obj] of entries) {
    if (role === identifier) {
      const rules = Object.keys(obj);
      let newRule = {};

      rules.forEach(rule => {
        newRule[rule] = true;
      });

      newPermissions[role] = newRule;
    } else newPermissions[role] = obj;
  }

  this.permissions = newPermissions;
}

export default {
  name: "Permissions",
  components: {
    CheckboxIntern
  },
  data() {
    return {
      permissions: permissions()
    };
  },
  methods: {
    onChangeCheckbox,
    onSelectAll
  }
};
</script>

<style scoped lang="scss">
.title-container {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
}

.title-container > .title {
  font-size: "Raleway";
  font-size: 18px;
  font-weight: normal;
  color: $color-grey-medium;
  text-transform: uppercase;
}

.title-container > .bar {
  margin-top: 10px;
  width: 40px;
  height: 3px;
  background: $color-green;
}

.row {
  display: flex;
  align-items: baseline;
}

.column {
  display: flex;
  flex-direction: column;

  & + .column {
    margin-left: 100px;
  }
}

.column > .checkbox-container + .checkbox-container {
  margin-top: 10px;
}

.column > .checkbox-container + .row {
  margin-top: 20px;
}

.column > .row > .area-label {
  margin-bottom: 10px;
  font-family: "Raleway";
  font-size: 15px;
  font-weight: bold;
  color: black;
}

.column > .row > .select-all {
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: "Raleway";
  font-size: 15px;
  background: transparent;
}
</style>

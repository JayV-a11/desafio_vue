<template>
  <div class="form-ingressantes">
    <header class="title">Cadastro de ingressantes</header>
    <div class="form-inputs">
      <div class="input-cont">
        <label>Nome</label>
        <input type="text" v-model="nome" />
      </div>
      <div class="input-cont">
        <label>Curso</label>
        <select v-model="cursoSelecionado">
          <option v-for="curso in cursos" :key="curso">{{ curso }}</option>
        </select>
      </div>
      <div class="input-cont">
        <label>Estado</label>
        <select v-model="estadoSelecionado">
          <option v-for="estado in estados" :key="estado">{{ estado }}</option>
        </select>
      </div>
      <div class="input-cont">
        <label>Cidades</label>
        <select v-model="cidadeSelecionado">
          <option v-for="cidade in cidades" :key="cidade">{{ cidade }}</option>
        </select>
      </div>

      <div class="form-options">
        <button class="back" @click="handleClose">Voltar</button>
        <button class="save" @click="handleSaveIngressante">Gravar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import "./index.css";

const store = useStore();

const cursos = ref([...store.state.cursos]);
const estados = ref([...store.state.estados]);
const cidadesSP = ref([...store.state.cidadesSP]);
const cidadesRJ = ref([...store.state.cidadesRJ]);
const cidadesMG = ref([...store.state.cidadesMG]);
const nome = ref("");
const cidades = ref([]);
const cursoSelecionado = ref("");
const estadoSelecionado = ref("");
const cidadeSelecionado = ref("");

watch(
  () => estadoSelecionado.value,
  (newValue) => {
    if (newValue === "São Paulo") {
      cidades.value = cidadesSP.value;
    } else if (newValue === "Rio de Janeiro") {
      cidades.value = cidadesRJ.value;
    } else cidades.value = cidadesMG.value;
  }
);

const handleClose = () => {
  store.dispatch("setFormOpen", false);
};

const handleSaveIngressante = () => {
  const ingressante = {
    nome,
    cursoSelecionado,
    estadoSelecionado,
    cidadeSelecionado,
  };
  store.dispatch("addIngressante", ingressante);
  handleClose();
};
</script>

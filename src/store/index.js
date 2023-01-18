import { createStore } from "vuex";

export const state = {
  ingressantes: [],
  cursos: ["Matemática", "Letras", "Geografia"],
  estados: ["São Paulo", "Rio de Janeiro", "Minas Gerais"],
  cidadesSP: ["Mogi das Cruzes", "Suzano", "Poá", "Guararapes"],
  cidadesRJ: ["Angra dos Reis", "Niterói", "Itaboraí"],
  cidadesMG: ["Belo Horizonte", "Monte Azul", "Mazambinho"],
  isFormOpen: false,
};

export const mutations = {
  ADD_INGRESSANTE(state, ingressante) {
    state.ingressantes.push(ingressante);
  },
  SET_FORM_OPEN(state, isOpen) {
    state.isFormOpen = isOpen;
  },
};

export const actions = {
  addIngressante({ commit }, ingressante) {
    commit("ADD_INGRESSANTE", ingressante);
  },
  setFormOpen({ commit }, isOpen) {
    commit("SET_FORM_OPEN", isOpen);
  },
};

export const getters = {
  ingressantes: (state) => state.ingressantes,
  cursos: (state) => state.cursos,
  estados: (state) => state.estados,
  cidadesSP: (state) => state.cidadesSP,
  cidadesRJ: (state) => state.cidadesRJ,
  cidadesMG: (state) => state.cidadesMG,
  isFormOpen: (state) => state.isFormOpen,
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});

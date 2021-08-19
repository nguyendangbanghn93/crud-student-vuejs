import { URL_API } from "../../constants";
import axios from "axios";
const state = {
  students: [],
};
const getters = {
  students: (state) => state.students,
};
const actions = {
  async getStudents({ commit }) {
    try {
      const response = await axios.get(`${URL_API}/api/students`);
      commit("SET_STUDENTS", response?.data?.students);
      console.log('listStudent',response?.data?.students);
      
    } catch (error) {
      console.log("error", error);
    }
  },
  async createStudent({ commit }, student) {
    try {
      const response = await axios.post(`${URL_API}/api/students`, student);
      if (!response?.data?.success) throw new Error(response?.data?.message);
      commit("ADD_STUDENTS", response?.data?.student);
    } catch (error) {
      console.log("error", error);
    }
  },
  async updateStudent({ commit }, student) {
    try {
      const response = await axios.put(
        `${URL_API}/api/students/${student._id}`,
        student
      );
      if (!response?.data?.success) throw new Error(response?.data?.message);
      commit("UPDATE_STUDENTS", response?.data?.student);
    } catch (error) {
      console.log("error", error);
    }
  },
  async deleteStudent({ commit }, studentId) {
    try {
      const response = await axios.delete(
        `${URL_API}/api/students/${studentId}`
      );
      if (!response?.data?.success) throw new Error(response?.data?.message);
      commit("DELETE_STUDENTS", response?.data?.student);
    } catch (error) {
      console.log("error", error);
    }
  },
};
const mutations = {
  SET_STUDENTS(state, students) {
    state.students = students || [];
  },
  ADD_STUDENTS(state, student) {
    state.students = [...state.students, student];
  },
  UPDATE_STUDENTS(state, student) {
    state.students = state.students.map((s) => {
      if (s._id === student._id) s = student;
      return s;
    });
  },
  DELETE_STUDENTS(state, student) {
    state.students = state.students.filter((s) => s._id !== student._id);
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

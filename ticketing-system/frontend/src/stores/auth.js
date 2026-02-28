import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(localStorage.getItem("access_token") || null);
  const isLoading = ref(false);
  const error = ref(null);

  const isAuthenticated = computed(() => !!token.value && !!user.value);

  const setUser = (userData) => {
    user.value = userData;
  };

  const setToken = (newToken) => {
    token.value = newToken;
    if (newToken) {
      localStorage.setItem("access_token", newToken);
    } else {
      localStorage.removeItem("access_token");
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem("access_token");
  };

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    setUser,
    setToken,
    logout,
  };
});

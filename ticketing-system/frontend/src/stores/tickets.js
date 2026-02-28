import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "@/boot/axios";

export const useTicketsStore = defineStore("tickets", () => {
  const tickets = ref([]);
  const selectedTicket = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchTickets = async (filters = {}) => {
    isLoading.value = true;
    try {
      const response = await api.get("/api/tickets/", { params: filters });
      tickets.value = response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchTicketById = async (id) => {
    isLoading.value = true;
    try {
      const response = await api.get(`/api/tickets/${id}`);
      selectedTicket.value = response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const createTicket = async (ticketData) => {
    isLoading.value = true;
    try {
      const response = await api.post("/api/tickets/", ticketData);
      tickets.value.push(response.data);
      return response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const updateTicket = async (id, ticketData) => {
    isLoading.value = true;
    try {
      const response = await api.put(`/api/tickets/${id}`, ticketData);
      const index = tickets.value.findIndex((t) => t.id === id);
      if (index !== -1) {
        tickets.value[index] = response.data;
      }
      return response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    tickets,
    selectedTicket,
    isLoading,
    error,
    fetchTickets,
    fetchTicketById,
    createTicket,
    updateTicket,
  };
});

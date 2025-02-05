//GlobalState.js
import { reactive } from 'vue';
export const balanceState = reactive({
  balance: 0, // Initial balance
  updateBalance(amount) {
    this.balance += amount; // Add the amount to the balance
  },
});
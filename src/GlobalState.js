//GlobalState.js
import { reactive, watchEffect } from "vue";
import { db, auth } from "@/firebase";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";

// Global balance state
export const balanceState = reactive({
  balance: 0, 
  investBal: 0,
  investments: [], // Stores all investment records

  async fetchBalance() {
    const user = auth.currentUser;
    if (!user) return;

    const userDoc = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      balanceState.balance = docSnap.data().balance || 0;
      balanceState.investBal = docSnap.data().investBal || 0;
      balanceState.investments = docSnap.data().investments || [];
    } else {
      await setDoc(userDoc, { balance: 0, investBal: 0, investments: [] });
    }
  },

  async updateBalance(amount) {
    const user = auth.currentUser;
    if (!user) return;

    const userDoc = doc(db, "users", user.uid);
    await updateDoc(userDoc, { balance: balanceState.balance + amount });
  },

  async invest(amount, initialInvestBal, dailyIncrement, duration) {
    const user = auth.currentUser;
    if (!user) return;

    if (balanceState.balance >= amount) {
      const userDoc = doc(db, "users", user.uid);
      
      // Deduct from main balance & update Firestore
      await updateDoc(userDoc, {
        balance: balanceState.balance - amount,
        investBal: balanceState.investBal + initialInvestBal,
        investments: [
          ...balanceState.investments,
          { amount, dailyIncrement, duration, daysElapsed: 0 }
        ],
      });

      // Update local state
      balanceState.balance -= amount;
      balanceState.investBal += initialInvestBal;
      balanceState.investments.push({
        amount, dailyIncrement, duration, daysElapsed: 0
      });

      let days = 0;
      const interval = setInterval(async () => {
        if (days >= duration) {
          clearInterval(interval);
          alert(`Investment of ${amount} completed.`);
        } else {
          balanceState.investBal += dailyIncrement;
          balanceState.investments = balanceState.investments.map((inv) =>
            inv.amount === amount ? { ...inv, daysElapsed: inv.daysElapsed + 1 } : inv
          );

          await updateDoc(userDoc, {
            investBal: balanceState.investBal,
            investments: balanceState.investments,
          });

          days++;
        }
      }, 86400000); // 24 hours in milliseconds
    } else {
      alert("Insufficient funds to invest.");
    }
  }
});

// Real-time Firestore listener
watchEffect(() => {
  const user = auth.currentUser;
  if (!user) return;

  const userDoc = doc(db, "users", user.uid);
  onSnapshot(userDoc, (docSnap) => {
    if (docSnap.exists()) {
      balanceState.balance = docSnap.data().balance || 0;
      balanceState.investBal = docSnap.data().investBal || 0;
      balanceState.investments = docSnap.data().investments || [];
    }
  });
});

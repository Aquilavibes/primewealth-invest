<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-5 py-3 shadow-lg h-30">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <br />

  <Sidebar v-if="isNavOpen" />

  <div class="transaction-container">
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      @click="navigateToDashboard">
      Back to Dashboard
    </button><br> 
    <h3 class="table-title">Transaction History</h3>
    <div class="table-wrapper">
      <table class="transaction-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tran, index) in transactions" :key="tran.id">
            <td>{{ index + 1 }}</td>
            <td>{{ tran.type }}</td>
            <td>${{ tran.amountt }}</td>
            <td>{{ tran.createdAt }}</td>
            <td>
              <span :class="{
      'bg-green-500 text-white': tran.status === 'Success',
      'bg-red-500': tran.status === 'Pending'
    }">
                {{ tran.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import { db } from "@/firebase";
import { collection, query, where, getDocs, doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { format } from "date-fns";
import { balanceState } from "@/GlobalState";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const transactions = ref([]);
const balance = ref(0); // Local balance state
const isNavOpen = ref(false);
const router = useRouter();

const auth = getAuth();
const user = auth.currentUser;

const navigateToDashboard = () => {
  router.push("/dashboard");
};

// ✅ **Fetch Transactions (Still Works as Before)**
const fetchTransactions = async () => {
  if (!user) {
    alert("You must be logged in to view your transactions.");
    return;
  }

  try {
    const q = query(
      collection(db, "transaction"),
      where("userId", "==", user.uid) // Filter by user UID
    );

    const querySnapshot = await getDocs(q);
    transactions.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt
        ? format(doc.data().createdAt.toDate(), "yyyy-MM-dd HH:mm:ss")
        : null,
    }));
  } catch (error) {
    console.error("Error fetching transactions: ", error);
    alert("Failed to load transactions.");
  }
};

// ✅ **Real-Time Balance Listener (Fixes Glitch)**
const fetchBalance = () => {
  if (!user) return;

  const balanceRef = doc(db, "users", user.uid);

  onSnapshot(balanceRef, (docSnap) => {
    if (docSnap.exists()) {
      balance.value = docSnap.data().balance || 0;
      balanceState.balance = balance.value; // Keep Global State Updated
    } else {
      balance.value = 0;
      balanceState.balance = 0;
    }
  });
};

onMounted(() => {
  fetchTransactions();
  fetchBalance();
});

function openModal() {
  isNavOpen.value = !isNavOpen.value;
}

</script>

<style scoped>
/* General Container Styles */

.transaction-container {
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Title */
.table-title {
  text-align: center;
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Table Wrapper for Scrollability */
.table-wrapper {
  overflow-x: auto;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: white;
}

/* Table Styles */
.transaction-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.transaction-table thead {
  background-color: #343a40;
  color: white;
}

.transaction-table thead th {
  padding: 12px;
  font-size: 0.9rem;
}

.transaction-table tbody tr:nth-child(odd) {
  background-color: #f8f9fa;
}

.transaction-table tbody tr:nth-child(even) {
  background-color: #e9ecef;
}

.transaction-table tbody td {
  padding: 12px;
  font-size: 0.85rem;
  color: #495057;
}

.transaction-table tbody tr:hover {
  background-color: #dfe4ea;
}

/* Status Styles */
.status {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  color: white;
}

.status.success {
  background-color: orangered;
}

.status.failed {
  background-color: #dc3545;
}
</style>
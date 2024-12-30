<template>
<Navbar>
  <header>
    <ion-icon class='menu' name="menu-outline" @click='openModal'></ion-icon>
    <ion-icon class='profile' name="person-circle-outline"></ion-icon>
    </header>
</Navbar><br>

<Sidebar
v-if='isNavOpen'
/>

   <div class="transaction-container">
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
          <!-- Example rows for layout -->
          <tr v-for="tran in transactions" :key="tran.id">
            <td>*</td>
            <td>{{ tran.type }}</td>
            <td>${{ tran.amountt }}</td>
            <td>{{ tran.createdAt }}</td>
            
            <td>
              <span class="status success">{{ tran.status }}</span>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { db } from '@/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { format } from "date-fns";


import { ref, onMounted } from 'vue'

 const transactions = ref([]);
    const auth = getAuth();
    const user = auth.currentUser;

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
           createdAt: doc.data().createdAt ? format(doc.data().createdAt.toDate(), "yyyy-MM-dd HH:mm:ss") : null,
        }));
      } catch (error) {
        console.error("Error fetching transactions: ", error);
        alert("Failed to load transactions.");
      }
    };
 onMounted(fetchTransactions);

const isNavOpen = ref(false)

function openModal(){
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
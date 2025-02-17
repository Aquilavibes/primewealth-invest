<template>
  <div class="p-4 space-y-6">
    <!-- Page Header -->
    <div class="flex justify-between items-center border-b pb-4">
      <h1 class="text-2xl font-bold text-white">Deposit Approval</h1>
      <button 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="navigateToDashboard">
        Back to Dashboard
      </button>
    </div>

    <!-- Transaction List -->
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300 ">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2 text-left">Transaction ID</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Amount</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Date</th>
             <th class="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tran in transactions" :key="tran.id" class="hover:bg-gray-50">
            <td class="border border-gray-300 px-4 py-2 text-white">{{ tran.id }}</td>
            <td class="border border-gray-300 px-4 py-2 text-white">${{ tran.amount }}</td>
            <td class="border border-gray-300 px-4 py-2 text-white">{{ tran.createdAt }}</td>
             <td class="border border-gray-300 px-4 py-2 text-white">{{ tran.type }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <span 
                :class="{
                  'text-yellow-500': tran.status === 'Pending',
                  'text-green-500': tran.status === 'Success'
                }">
                {{ tran.status }}
              </span>
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <button 
                class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                @click="openEditModal(tran)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-md w-96">
        <h2 class="text-xl font-bold mb-4">Edit Transaction</h2>
        <p class="mb-2">Transaction ID: {{ selectedTransaction?.id }}</p>
        <label class="block mb-4">
          <span class="block text-gray-700">Status</span>
          <select v-model="selectedTransaction.status" class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="Pending">Pending</option>
            <option value="Success">Success</option>
          </select>
        </label>
        <div class="flex justify-end space-x-4">
          <button 
            class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            @click="closeModal">
            Cancel
          </button>
          <button 
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            @click="updateTransaction">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs, updateDoc, doc, query, increment } from 'firebase/firestore';
import { format } from "date-fns";
import { useRouter } from 'vue-router'

    const transactions = ref([]);
    const isModalOpen = ref(false);
    const selectedTransaction = ref(null);

    const route = useRouter();

    

    // Fetch transactions from Firestore
    const fetchTransactions = async () => {
      try {
        const q = query(
          collection(db, "transaction"),
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

    // Open Edit Modal
    const openEditModal = (transaction) => {
      selectedTransaction.value = { ...transaction };
      isModalOpen.value = true;
    };

    // Close Modal
    const closeModal = () => {
      isModalOpen.value = false;
      selectedTransaction.value = null;
    };

    // Update Transaction
    const updateTransaction = async () => {
  if (!selectedTransaction.value || selectedTransaction.value.status !== "Success") {
    alert("You can only update the transaction to 'Success'.");
    return;
  }

  try {
    // Update the transaction status
    const transactionRef = doc(db, "transaction", selectedTransaction.value.id);
    await updateDoc(transactionRef, { status: "Success" });

    // Ensure the userId exists in the transaction
    if (!selectedTransaction.value.userId) {
      console.error("Missing userId in transaction");
      return;
    }

    // Update the user's balance atomically
    const userRef = doc(db, "users", selectedTransaction.value.userId);
    await updateDoc(userRef, {
      balance: increment(selectedTransaction.value.amountt),
    });

    console.log("Transaction updated successfully!");
    alert("Transaction and balance updated successfully!");

    await fetchTransactions();
    closeModal();
  } catch (error) {
    console.error("Error updating transaction: ", error);
    alert("Failed to update transaction.");
  }
};

    // Navigation (placeholder for your router setup)
    const navigateToDashboard = () => {
      route.push('/panel')
      console.log('Navigating to dashboard...');
    };

    onMounted(fetchTransactions);

    
</script>

<style scoped>
/* Add custom responsive styles here if needed */
</style>

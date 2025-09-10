<template>
    <div class="min-h-screen bg-gray-900 p-6 text-white">
      <h2 class="text-3xl font-bold mb-6">Users Management</h2>
  
      <!-- Debug info -->
      <div v-if="loading" class="text-gray-400">Loading users...</div>
      <div v-if="error" class="text-red-400">Error: {{ error }}</div>
      <div v-if="!loading && users.length === 0" class="text-gray-400">No users found.</div>
  
      <!-- Users Table -->
      <div v-if="users.length > 0" class="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table class="min-w-full divide-y divide-gray-700">
          <thead class="bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-300"></th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-300">Email</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-300">Phone</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-300">Country</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-300">Balance</th>
              <th class="px-6 py-3 text-center text-sm font-medium text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-700">
            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-700">
              <td class="px-6 py-4">{{ user.balance || 'N/A' }}</td>
              <td class="px-6 py-4">{{ user.email || 'N/A' }}</td>
              <td class="px-6 py-4">{{ user.phone || 'N/A' }}</td>
              <td class="px-6 py-4">{{ user.country || 'N/A' }}</td>
              <td class="px-6 py-4">
                <input
                  type="number"
                  v-model.number="user.balance"
                  class="w-24 rounded-md border-gray-600 bg-gray-700 text-gray-200 px-2 py-1"
                />
              </td>
              <td class="px-6 py-4 text-center">
                <button
                  @click="updateBalance(user)"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg shadow"
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { db } from "@/firebase";
  import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
  
  const users = ref([]);
  const loading = ref(true);
  const error = ref(null);
  
  const fetchUsers = async () => {
    loading.value = true;
    error.value = null;
  
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      users.value = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      console.log("Fetched users:", users.value);
    } catch (err) {
      console.error("Error fetching users:", err);
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  const updateBalance = async (user) => {
    try {
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, { balance: user.balance });
      alert(`Balance updated for ${user.name || "User"}`);
    } catch (err) {
      console.error("Error updating balance:", err);
      alert("Failed to update balance.");
    }
  };
  
  onMounted(fetchUsers);
  </script>
  
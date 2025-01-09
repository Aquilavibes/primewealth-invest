<template>
  <div class="min-h-screen flex flex-col items-center bg-black px-4">
    <h1 class="text-2xl font-semibold text-blue-500 text-center my-6 text-white">KYC Details</h1>
<button 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="navigateToDashboard">
        Back to Dashboard
      </button><br> <br>
    <div v-if="kycList.length > 0" class="w-full max-w-4xl">
      <table class="table-auto w-full text-blue-300 bg-black border border-blue-700">
        <thead>
          <tr>
            <th class="border border-blue-700 p-2">Legal Name</th>
            <th class="border border-blue-700 p-2">Address</th>
            <th class="border border-blue-700 p-2">Phone Number</th>
            <th class="border border-blue-700 p-2">Status</th>
            <th class="border border-blue-700 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kyc in kycList" :key="kyc.id">
            <td class="border border-blue-700 p-2">{{ kyc.legalName }}</td>
            <td class="border border-blue-700 p-2">{{ kyc.address }}</td>
            <td class="border border-blue-700 p-2">{{ kyc.phoneNumber }}</td>
            <td class="border border-blue-700 p-2">{{ kyc.status }}</td>
            <td class="border border-blue-700 p-2">
              <button
                class="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                @click="openDocumentModal(kyc)"
              >
                View Document
              </button>
              <button
                v-if="kyc.status === 'In Review'"
                class="bg-green-600 text-white px-3 py-1 rounded"
                @click="approveKYC(kyc.id)"
              >
                Approve
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-blue-300 text-center mt-10">No KYC records found.</div>

    <!-- Document Modal -->
    <div v-if="selectedDocument" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div class="bg-black border border-blue-700 rounded-lg p-6 max-w-lg w-full">
        <h2 class="text-xl font-semibold text-blue-500 mb-4">KYC Document</h2>
        <div>
          <p class="text-blue-300 mb-2"><strong>Legal Name:</strong> {{ selectedDocument.legalName }}</p>
          <div class="mb-4">
            <strong>Document:</strong>
            <img
              :src="selectedDocument.documentFile"
              alt="KYC Document"
              class="mt-2 max-w-full border border-blue-700 rounded"
            />
          </div>
          <div class="flex justify-end items-center mt-4">
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded mr-2"
              @click="copyLink(selectedDocument.documentFile)"
            >
              Copy Link
            </button>
            <button
              class="bg-red-600 text-white px-4 py-2 rounded"
              @click="closeDocumentModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import {useRouter } from 'vue-router'

export default {
  setup() {

    const route = useRouter();
    const kycList = ref([]);
    const selectedDocument = ref(null);


const navigateToDashboard = () => {
route.push('/panel')
}
    // Fetch KYC data
    const fetchKYCData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'kyc'));
        kycList.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error('Error fetching KYC data:', error);
        alert('Failed to fetch KYC data. Please try again later.');
      }
    };

    // Open document modal
    const openDocumentModal = (kyc) => {
      selectedDocument.value = kyc;
    };

    // Close document modal
    const closeDocumentModal = () => {
      selectedDocument.value = null;
    };

    // Copy document link
    const copyLink = async (link) => {
      try {
        await navigator.clipboard.writeText(link);
        alert('Document link copied to clipboard!');
      } catch (error) {
        console.error('Error copying link:', error);
        alert('Failed to copy the link. Please try again.');
      }
    };

    // Approve KYC status
    const approveKYC = async (id) => {
      try {
        await updateDoc(doc(db, 'kyc', id), { status: 'Approved' });
        alert('KYC status updated to Approved.');
        fetchKYCData(); // Refresh the list
      } catch (error) {
        console.error('Error updating KYC status:', error);
        alert('Failed to approve KYC. Please try again later.');
      }
    };

    onMounted(fetchKYCData);

    return {
      kycList,
      selectedDocument,
      fetchKYCData,
      openDocumentModal,
      closeDocumentModal,
      copyLink,
      approveKYC,
      navigateToDashboard
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

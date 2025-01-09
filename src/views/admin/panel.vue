<template>
  <div class="p-4 space-y-6">
    <!-- Page Header -->
    <div class="border-b pb-4">
      <h1 class="text-2xl font-bold">Admin Panel</h1>
    </div>

    <!-- Navigation List -->
    <div class="space-y-4">
    <RouterLink to="/depositapproval">  <button
        class="w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Deposit Approval
      </button>
    </RouterLink><br><br>
       <RouterLink to="/kycapproval"> <button
        class="w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        kyc approval
      </button>
       </RouterLink>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>
/* Add custom styles for navigation panel if necessary */
</style>

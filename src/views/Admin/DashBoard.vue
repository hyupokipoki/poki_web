<template>
<div class="dashboard-container">
<Transaction />
<Intent-History/>
</div>
</template>

<script>
import Transaction from '@/components/Admin/DashBoard/Transaction.vue';
import IntentHistory from '@/components/Admin/DashBoard/IntentHistory.vue';
export default {
components: {
    'Transaction': Transaction,
    'Intent-History': IntentHistory
}
}
</script>

<style scoped>
.dashboard-container {
    display: flex;
    flex-direction: column;
}

.dashboard-container * {
    flex: 1;
}
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const income = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://ocholi.com/api.json');
    income.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Income
          <RouterLink to="income/create" class="btn btn-primary float-end">Add Income</RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Manager</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="income.length">
              <tr v-for="(item, index) in income" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.manager }}</td>
                <td>{{ item.txn }}</td>
                <td>{{ item.amt }}</td>
              </tr>
            </template>
            <tr v-else>
              <td colspan="5">No income data available</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <h4>Footer</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
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
            <tr v-if="income.length">
              <th v-for="(item, index) in income" :key="index">{{ item.id }}</th>
              <th v-for="(item, index) in income" :key="index">{{ item.date }}</th>
              <th v-for="(item, index) in income" :key="index">{{ item.manager }}</th>
              <th v-for="(item, index) in income" :key="index">{{ item.txn }}</th>
              <th v-for="(item, index) in income" :key="index">{{ item.amt }}</th>            
            </tr>
            <p v-else>No income data available</p>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <h4>
          Footer
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Income',
  data() {
    return {
      income: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://ocholi.com/api.txt');
      this.income = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    // No methods needed in this example
  },
};
</script>
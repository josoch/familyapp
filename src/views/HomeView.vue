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
            <tr>
              <th>1</th>
              <th>02/04/2024</th>
              <th>Father</th>
              <th>Transfer to family bank account</th>
              <th>25000</th>
            </tr>

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
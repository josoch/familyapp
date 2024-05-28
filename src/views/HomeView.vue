<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Income
          <RouterLink to="income/create" class="btn btn-primary">Add Income</RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class-"table table-bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Manager</th>
              <th>Currency</th>
              <th>Type</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>       
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginView from './views/HomeView.vue';  
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" /></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/income">Income</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/expense">Expense</RouterLink>
        </li>        
        <li class="nav-item">
          <RouterLink class="nav-link" to="/budget">Budget</RouterLink>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  
</header>
  <RouterView />
</template>


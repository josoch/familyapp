<template>
  <div>
    <h1>CRUD Operations</h1>
    <form @submit.prevent="createItem">
      <input type="text" v-model="newItem.name" />
      <button type="submit">Create</button>
    </form>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="updateItem" v-if="editing">
      <input type="text" v-model="editing.name" />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import api from '../api'

export default {
  data() {
    return {
      items: [],
      newItem: { name: '' },
      editing: null
    }
  },
  mounted() {
    this.readItems()
  },
  methods: {
    createItem() {
      api.post('/items', this.newItem)
        .then(response => {
          this.items.push(response.data)
          this.newItem = { name: '' }
        })
        .catch(error => console.error(error))
    },
    readItems() {
      api.get('/items')
        .then(response => {
          this.items = response.data
        })
        .catch(error => console.error(error))
    },
    editItem(item) {
      this.editing = item
    },
    updateItem() {
      api.put(`/items/${this.editing.id}`, this.editing)
        .then(response => {
          this.editing = null
        })
        .catch(error => console.error(error))
    },
    deleteItem(item) {
      api.delete(`/items/${item.id}`)
        .then(response => {
          this.items = this.items.filter(i => i.id !== item.id)
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
<template>
  <div class="personnel-table-container">
    <h2>Personnel List</h2>
    <table class="personnel-table">
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Position</th>
      </tr>
      <tr v-for="personnel in personnelList" :key="personnel.id">
        <td>{{ personnel.name }}</td>
        <td>{{ personnel.lastName }}</td>
        <td>{{ personnel.position }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
        personnelList: ["personnel/_personnelList"]
    })
    }
}
</script>

<style>
.personnel-table {
  margin-bottom: 50px;
}
table {
  margin: auto;
}
table,
td,
th {
  border: 1px solid gray;
  border-collapse: collapse;
  padding: 10px;
}
h2 {
  text-align: center;
}
</style>

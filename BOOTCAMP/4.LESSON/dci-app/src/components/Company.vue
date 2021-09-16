<template>
  <div class="personnel-table-container">
    <h2>Personnel List</h2>
    <table class="personnel-table">
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Position</th>
      </tr>
      <tr v-for="company in _companyList" :key="company.id">
        <td>{{ company.logo }}</td>
        <td>{{ company.name }}</td>
        <td>{{ company.phone }}</td>
        <td><a href="#">{{company.link}}</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
        companyList: ["company/_companyList"]
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

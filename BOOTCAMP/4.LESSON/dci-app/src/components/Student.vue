<template>
  <div>
    <h2>Student List</h2>
    <table class="students-table">
      <tr>
        <th>Name</th>
        <th>Last Name</th>
      </tr>
      <tr v-for="student in studentList" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.lastName }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      studentList: ["student/_studentList"],
    }),
  },
};
</script>

<style>
.personnel-table {
  margin-bottom: 50px;
}
table {
  margin: auto;
}
table,td,th {
  border: 1px solid gray;
  border-collapse: collapse;
  padding: 10px;
}
h2 {
  text-align: center;
}
</style>

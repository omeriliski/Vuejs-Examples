<template>
  <div class="container">
    <PersonnelList/>
    <StudentList/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PersonnelList from '@/components/Personnel'
import StudentList from '@/components/Student'

export default {
  name: "App",
  components: {
    PersonnelList,
    StudentList
  },
  computed: {
    ...mapGetters({
      studentList: ["student/_studentList"],
      companyList:["company/_companyList"]
    }),
  },
};
</script>

<style>
  .container{
    width: 500px;
    margin:50px auto;
  }
  .personnel-table{
    margin-bottom: 50px;
  }
  table{
    margin: auto;
  }
  table,td,th{
    border:1px solid gray;
    border-collapse: collapse;
    padding: 10px;
  }
  h2{
    text-align: center;
  }
</style>

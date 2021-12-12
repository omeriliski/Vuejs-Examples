<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
   <AppSideBar :invoices="invoiceList" :editInvoice="editInvoice"/>
    <InvoiceContent :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice"/>
  </div>
</template>

<script setup>
import AppSideBar from './components/appSidebar.vue';
import InvoiceContent from "./components/invoiceContent.vue";
import {reactive} from 'vue'
import {ref} from 'vue'
const invoiceList=ref([]);
const state=reactive({activeInvoice:null})
const saveInvoice = (invoice)=>{
  console.log('invoice :>> ', invoice);
  invoiceList.value.push(invoice);
}
const editInvoice=(invoice)=>{
  console.log(invoice);
  state.activeInvoice=invoice
}
</script>


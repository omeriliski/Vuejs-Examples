<template>
  <div>
    <UserList/>
    <ItemList/>
    <NewItem/>
  </div>
</template>

<script>

import ItemList from '@/components/ItemList';
import NewItem from '@/components/NewItem';
import UserList from '@/components/UserList';

export default {
  components:{ItemList,NewItem,UserList}
};
</script>

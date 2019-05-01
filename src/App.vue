<template>
  <div :class="{adminapp: isAdmin, app: !isAdmin}">
    <Admin-Navigation :class="{displaynone: !isAdmin}"></Admin-Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import AdminNavigation from "@/components/Admin/AdminNavigation.vue";
export default {
  name: "App",
  data: {
    isAdmin: true
  },
  components: {
    "Admin-Navigation": AdminNavigation
  },
  watch: {
    $route(to, from) {
      // 경로 변경에 반응하여...
      console.log(to.name);
      console.log(from.name);
      if (to.name.includes("Admin")) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }
  },
  created() {
    console.log(this.$route.name);
    if (this.$route.name.includes("Admin")) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: rgb(126, 128, 150);
}

.adminapp {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
}

.displaynone {
  display: none;
}
</style>

<template>
  <div class="navigation">
    <ul>
      <li class="navigation-title">
        <span>poki poki</span>
      </li>
      <router-link to="/admin/dashboard">
        <li :class="{clicked: isClicked1}" v-on:click="menuClick(1)">대쉬보드</li>
      </router-link>
      <router-link to="/admin/intentsetting">
        <li :class="{clicked: isClicked2}" v-on:click="menuClick(2)">의도추론 설정</li>
      </router-link>
      <router-link to="/admin/dashboard">
        <li :class="{clicked: isClicked3}" v-on:click="menuClick(3)">기본 답변 설정</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked1: true,
      isClicked2: false,
      isClicked3: false
    };
  },
  methods: {
    menuClick(i) {
      if (i === 1) {
        console.log(i);
        //   console.log(this.isClicked1);
        this.isClicked1 = true;
        this.isClicked2 = false;
        this.isClicked3 = false;
      } else if (i === 2) {
        console.log(i);
        this.isClicked2 = true;
        this.isClicked1 = false;
        this.isClicked3 = false;
      } else if (i === 3) {
        console.log(i);
        this.isClicked3 = true;
        this.isClicked2 = false;
        this.isClicked1 = false;
      }
    }
  }
};
</script>

<style scoped>
.navigation {
  width: 220px;
  height: 100%;
  background-color: rgb(42, 52, 65);
}

li {
  padding: 16px;
}

li:nth-child(2) {
  margin-top: 32px;
}

.navigation-title {
  background-color: rgb(55, 66, 81);
  padding-top: 64px;
  padding-bottom: 64px;
  color: white;
}

a {
  color: white;
}

a:hover,
li:hover {
  font-weight: bold;
}

.clicked {
  background-color: rgb(104, 88, 65);
}
</style>

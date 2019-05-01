<template>
  <div v-auto-bottom="msgs">
    <span>Hi, {{userName}}</span>

    <transition-group name="list">
      <div v-for="(msg,index) in msgs" v-bind:key="index">
        <div class="user-chat-container" v-if="msgs.userName !== 'admin'">
          <span class="user-chat">{{msg.msg}}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MessageList",
  props: ["msgs", "userName", "userId"],
  data() {
    return {
      isNotAdmin: false
    };
  }
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

.user-chat-container {
  display: flex;
  flex-direction: row-reverse;
}

.user-chat {
  padding: 2px;
  margin-right: 8px;
}
</style>
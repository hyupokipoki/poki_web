<template>
  <div v-auto-bottom="msgs">
    <div class="poki-chat-container">
      <span class="poki-chat">Hi, {{userName}}</span>
    </div>

    <transition-group name="list">
      <div v-for="(msg,index) in msgs" v-bind:key="index">
        <div class="user-chat-container" v-if="msg.fromUid !== 'poki'">
          <span class="user-chat">{{msg.msg}}</span>
        </div>
        <div class="poki-chat-container" v-if="msg.fromUid == 'poki'">
          <span class="poki-chat">!!{{msg.msg}}</span>
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
  margin-top: 8px;
  display: flex;
  flex-direction: row-reverse;
}

.user-chat {
  padding: 2px;
  margin-right: 8px;
}

.poki-chat-container {
  margin-top: 8px;
  display: flex;
  flex-direction: row;
}

.poki-chat {
  padding: 2px;
  margin-left: 8px;
  color: red;
}
</style>
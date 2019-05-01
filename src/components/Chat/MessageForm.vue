<template>
  <div class="inner-wrap">
    <form id="input-form" @submit.prevent="submitMessageFunc">
      <input v-model="msg" label="chat" placeholder="보낼 메세지를 입력하세요." solo>
      <button id="inpt-send-btn">전송</button>
    </form>
    <div class="banner">
      <span>Powered by POKI POKI</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageForm",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    submitMessageFunc() {
      if (this.msg.length === 0) return false;
      this.$emit("submitMessage", this.msg);
      this.msg = "";
      return true;
    }
  }
};
</script>

<style scoped>
#input-form {
  display: flex;
  border-bottom: 1px solid #000;
}

#input-form input {
  flex: 1;
}

input:focus,
button:focus {
  outline: none;
}

.banner {
  padding: 16px;
  display: flex;
  justify-content: center;
}
</style>
<template>
  <div class="inner-wrap">
    <Message-Title/>
    <Message-List :msgs="msgDatas" :userName="userName" class="msg-list"></Message-List>
    <Message-Form v-on:submitMessage="sendMessage" class="msg-form"></Message-Form>
  </div>
</template>

<script>
import MessageTitle from "@/components/Chat/MessageTitle.vue";
import MessageList from "@/components/Chat/MessageList.vue";
import MessageForm from "@/components/Chat/MessageForm.vue";
export default {
  name: "ChatRoom",
  data() {
    return {
      datas: [],
      uid: this.getRandomId(),
      userName: "",
      msgDatas: []
    };
  },
  components: {
    "Message-Title": MessageTitle,
    "Message-List": MessageList,
    "Message-Form": MessageForm
  },
  computed: {
    // ...mapState({
    //   msgDatas: state => state.socket.msgDatas
    // }),
  },
  created() {
    this.userName = this.$route.params.userName;
    console.log(this.userName);

    // const $ths = this;
    // this.$socket.on("chat", data => {
    //   this.pushMsgData(data);
    //   $ths.datas.push(data);
    // });
  },
  methods: {
    // ...mapMutations({
    //   pushMsgData: Constant.PUSH_MSG_DATA
    // }),
    getMessages() {
      this.$http.get("http://211.51.76.18:3000/tests/"+this.uid).then(res => {
        console.log(res.data);

        this.msgDatas=(res.data);
      });
    },
    sendMessage(msg) {
      // this.msgDatas.push(
      //   { name: this.userName },
      //   { uid: this.uid },
      //   { msg: msg }
      // );
      var newChat = {
        fromUid: this.uid,
        toUid: 'poki',
        name: this.userName,
        msg: msg
      }
      this.$http
        .post("http://211.51.76.18:3000/tests", 
          newChat,
          { useCredentails: true },
          { header:
        'Access-Control-Allow-Origin: *',
      },
        )
        .then(res => {

          console.log(res);
          console.log(res.data);
          this.getMessages();
          // this.msgDatas.push(res.data);
        })
        .catch(error => {
          console.log('dd');
          
          console.log(error.message);
        });
      /**
       * 여기서 rest통신
       */
      // this.pushMsgData({
      //   from: {
      //     name: this.userName
      //   },
      //   msg
      // });
      // this.$sendMessage({
      //   // name: this.$route.params.username,
      //   name: this.uid,
      //   msg
      // });
    },
    getRandomId: function() {
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randLetter + Date.now();
      console.log(uniqid);
      console.log(uniqid.length);

      return uniqid;
    }
  },
  mounted() {
    this.getMessages();
  }
};
</script>

<style scoped>
.inner-wrap {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.msg-list {
  flex: 1;
  overflow-x: scroll;
}

.msg-form {
  padding: 8px;
}
/* .msg-form {
  bottom: -28px;
  position: absolute;
  left: 0;
  right: 0;
}
.msg-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  overflow-x: scroll;
} */
</style>
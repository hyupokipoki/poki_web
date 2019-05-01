<template>
    <div class="user-login-container">
        <form id="input-form" @submit.prevent="submitLogin">
      <input v-model="userName" label="userName" placeholder="닉네임을 입력하세요." solo>
      <button id="inpt-send-btn">로그인</button>
        <p v-if="errorBag.userName">{{errorBag.userName[0]}}</p>

    </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
                  errorBag: { userName: [] }

        }
    },
methods: {
    submitLogin() {
             this.errorBag.userName = this.validate('userName', this.userName);
             if(this.errorBag.userName.length === 0) {
                this.$router.push('/chat/'+this.userName);        
             }
// console.log(this.userName);
//       this.$router.push('/chat/'+this.userName);
      
    },
    validate (key, val) {
    const errors = []
    if (!val) {
      errors.push(`${key} field is required`)
    } else {
      if (val.length < 3) {
        errors.push(`${key} filed should have length of 3`)
      }
    }
    return errors
  }
  }
}
</script>

<style scoped>
.user-login-container {
    margin-top: 25%;
    width: 300px;
}

#input-form {
    display: flex;
    flex-direction: column;
}

#input-form input {
    border: 1px solid #ee0;
    margin-bottom: 16px;
    padding: 8px;
}

#input-form button {
    background-color: #ee0;
    padding: 8px;
        margin-bottom: 16px;

}

#input-form p {
    color: red;
}
</style>

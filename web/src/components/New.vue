<template>
  <div>
    <el-row>
      <el-col :span="24">
        <h1>Simino - Get Token</h1>
      </el-col>
      <el-col :span="8" :offset="8">
        <div class="source">
          <el-input placeholder="Nickname" v-model="nickname"></el-input>
        </div>
      </el-col>
      <el-col :span="8" :offset="8">
        <div class="source">
          <el-input placeholder="Token" v-model="token" :disabled="tokenInput"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :offset="10">
        <div class="source">
          <el-button type="primary" v-on:click="letGetToken()" :disabled="!tokenInput">Get Token</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  import uuid from 'uuid'

  export default {
    data () {
      return {
        nickname: '',
        token: '',
        tokenInput: true,
        flag: true,
        randomID: uuid.v4()
      }
    },
    methods: {
      letGetToken () {
        if (this.flag) {
          this.$http
            .post(`https://api.simino.xyz/v1/user/createUser`, {
              token: this.randomID,
              nickname: this.nickname
            })
            .then(({ok, data}) => {
              this.token = this.randomID
              this.tokenInput = false
              this.flag = false
            })
            .catch(err => {
              console.error(err)
            })
        }
      }
    },
    mounted () {

    }
  }
</script>

<style scoped>
  .source {
    padding: 10px;
  }
</style>

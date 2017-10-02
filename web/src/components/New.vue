<template>
  <div>
    <el-row>
      <el-col :span="24">
        <h1>Simino - Get Token</h1>
      </el-col>
      <el-col :span="6" :offset="9">
        <div class="source">
          <el-input placeholder="Nickname" v-model="nickname"></el-input>
        </div>
      </el-col>
      <el-col :span="6" :offset="9">
        <div class="source">
          <el-input placeholder="Token" v-model="token" :disabled="tokenInput"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :offset="10">
        <div class="source">
          <el-button type="primary" v-on:click="letGetToken()">Get Token</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        nickname: '',
        token: '',
        tokenInput: true,
        flag: true
      }
    },
    methods: {
      letGetToken () {
        if (this.flag) {
          this.tokenInput = false
          this.flag = false
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

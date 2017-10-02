<template>
  <div>
    <el-row>
      <el-col :span="24">
        <h1>Simino</h1>
        <h3>Simon X Arduino = Sim - ino</h3>
      </el-col>
      <el-col :span="24">
        <div class="token">
          <el-button :span="12" :offset="6" v-on:click="getToken()">Get Token</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="Date"
              width="180">
            </el-table-column>
            <el-table-column
              prop="nickname"
              label="Nickname"
              width="180">
            </el-table-column>
            <el-table-column
              prop="score"
              label="Score">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-03',
          nickname: 'Tom',
          score: '12'
        }, {
          date: '2016-05-02',
          nickname: 'Tom',
          score: '11'
        }, {
          date: '2016-05-04',
          nickname: 'Tom',
          score: '33'
        }, {
          date: '2016-05-01',
          nickname: 'Tom',
          score: '22'
        }],
        top: []
      }
    },
    methods: {
      getToken () {
        this.$router.push('/new')
      },
      getTop () {
        this.$http
          .get(`https://api.simino.xyz/record/getTop`)
          .then(({ok, data}) => {
            this.top = data
          })
          .catch(err => {
            console.error(err)
          })
      }
    },
    mounted () {
      this.getTop()
    }
  }
</script>

<style scoped>
  .token {
    padding: 20px;
  }
</style>

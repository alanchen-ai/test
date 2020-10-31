<template>
  <div >
    <router-link to="/">返回数据页面</router-link>
    <div>调用历史页面</div>
    
    <div>
      <table>
        <tr>
          <th>请求地址</th>
          <th>请求状态</th>
          <th>请求时间(ms)</th>
        </tr>
        <tr v-for="(item,index) in resData" :key="index">
          <td>{{item.url}}</td>
          <td>{{item.stateText}}</td>
          <td>{{item.time}}</td>
        </tr>
      </table>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      resData:[]
    }
  },
  mounted() {
    let that=this;
    that.$set(that, "resData", that.$store.state.history)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

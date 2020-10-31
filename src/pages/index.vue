<template>
  <div >
    <router-link to="/history">调用历史页面</router-link>
    <div>返回数据页面</div>
    <ul v-if="resData&&resData.authorizations_url">
      <li><span>authorizations_url:</span>"{{resData.authorizations_url}}"</li>
      <li><span>code_search_url:</span>"{{resData.code_search_url}}"</li>
      <li><span>commit_search_url:</span>"{{resData.commit_search_url}}"</li>
      <li><span>current_user_authorizations_html_url:</span>"{{resData.current_user_authorizations_html_url}}"</li>
      <li><span>current_user_repositories_url:</span>"{{resData.current_user_repositories_url}}"</li>
      <li><span>current_user_url:</span>"{{resData.current_user_url}}"</li>
      <li><span>emails_url:</span>"{{resData.emails_url}}"</li>
      <li><span>emojis_url:</span>"{{resData.emojis_url}}"</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      resData:{},
      resUrl:"https://api.github.com/",
      upDataTimer:null,
    }
  },
  methods: {
    getData() {
      let that= this
      let url= that.resUrl
      var start = Date.now()
      that.$http.get(url,{}).then(function(res) {
        let data=res.data
        let stateText=res.statusText
        that.$set(that, "resData", data)

        let millis = res.duration
        let historyLine={
          stateText:stateText,
          time:millis
        }
        historyLine.time=millis

        that.setLineHistory(historyLine)
      }).catch(function(res){
        console.log(res)
      })
    },
    setLineHistory(historyLine){
      let that=this
      historyLine.url=that.resUrl
      that.$store.dispatch("insetHistory", historyLine)
    },
    setDataTimer(){
      let that=this
      that.upDataTimer=setInterval(function(){
        that.getData()
      },5000) 
    }
  },
  mounted() {
    let that=this
    that.setDataTimer()
    // that.getData() 
  },
  destroyed() {
    clearInterval(this.upDataTimer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

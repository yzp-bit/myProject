<template>
  <div id="app">
    <div id="myChart" :style="{ width: '1000px', height: '800px' }"></div>
    <div id="randomdata" @click="randomData">
      随机变换
    </div>
    <div id="randomdata" @click="changeData">
      ref改变子组件值
    </div>
    <HelloWorld ref="children"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components'
export default {
  name: "App",
  components:{
    [HelloWorld.name]:HelloWorld
  },
  data() {
    return {
      option: {
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  created() {
    this.$nextTick(()=>{
      this.drawLine()
    })
  },
  methods: {
    drawLine() {
       this.myChart = this.$echarts.init(document.getElementById("myChart"));
      this.myChart.setOption(this.option);
    },
    randomData(){
      let a=[];
      for ( let i=0;i<6;i++){
        console.log(i)
        a.push(Math.floor(Math.random()*(10-0+1)))
      }
      console.log(a)
      let b= this.myChart.getOption();
      console.log(b.series[0].data);
      b.series[0].data=a;
      this.myChart.setOption(b);
    },
    changeData(){
      console.log(this.$refs.children)
      this.$refs.children.alerts('我改了')
      this.$refs.children.$el.style.color = 'red'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#randomdata {
  width: 100px;
  height: 50px;
  background-color: bisque;
  line-height: 50px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

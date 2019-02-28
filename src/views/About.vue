<template>
    <div class="about">
        <h1>This is an about page</h1>
        <img src="static/2.jpg" class="img">
    </div>
</template>
<script>
  export default {
    data () {
      return {
        radio: '1',
        num1: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      handleChange (value) {
        console.log(value)
      }
    }
  }
</script>
<style lang="scss" scoped>
    .about{
        h1{
            color:$main-color;
        }
        .img{
            width: 40px;
            height: 40px;
        }
    }
</style>

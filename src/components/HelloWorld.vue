<template>
  <div>
    <a-button @click="emitEvent">send a msg by eventBus!</a-button>
    <a-button @click="changeRefTitle">
      change toRef-normalArticleTitle!
    </a-button>
    <a-button @click="changeReactiveTitle">
      change reactive-reactiveArticle.title
    </a-button>
    <a-button @click="changeFrontEnd">
      change FrontEnd
    </a-button>
    <h1>props: {{ msg }}</h1>
    <p>toRef-normalArticleTitle:-----------{{ normalArticleTitle }}</p>
    <p>
      reactive-reactiveArticle:-----------{{ reactiveArticle.title }},
      {{ reactiveArticle.author }}
    </p>
    <p>
      Array now is reactive! ----------
      <span v-for="item in frontEnd" :key="item">{{ item }} &nbsp;</span>
    </p>
    <p>{{ database.mysql._object.mysql }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, toRefs, isRef, reactive } from 'vue'
import Bus from '@/utils/eventBus'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const emitEvent = () => {
      Bus.emit('hello', {
        msg: 'hello! this is a message from HelloWorld component'
      })
    }

    const normalArticle = {
      title: 'ts-book',
      author: 'huangyi'
    }

    const reactiveArticle = reactive({
      title: 'ts-book',
      author: 'huangyi'
    })

    const frontEnd = reactive(['vue', 'react', 'angular'])

    const database = toRefs(
      reactive({
        mysql: 'mysql',
        oracle: 'oracle',
        mongodb: 'mongodb'
      })
    )

    const normalArticleTitle = toRef(normalArticle, 'title')

    const changeRefTitle = () => {
      normalArticleTitle.value = 'ts-axios'
      console.log(`articleTitle: ${normalArticleTitle.value}`)
      // articleTitle: ts-axios
      // 数据更新了，说明toRef传递的是数据的引用
      console.log(`normalArticle: ${normalArticle.title}`)
      // normalArticle: ts-axios
      // 数据更新了，页面数据并没有“立即”更新，因为normalArticle并没有定义为响应式数据
      // 页面该数据 <p>toRef-title:{{ normalArticleTitle }}</p> 会在“下一次页面数据更新”时一起更新
    }

    const changeReactiveTitle = () => {
      reactiveArticle.title = 'Vue3 learning'
      // 数据，视图都相应更新了
    }

    const changeFrontEnd = () => {
      frontEnd[2] = 'node'
      // 可以监听数组变化了
    }

    setTimeout(() => {
      database.mysql.value = 'mysql5.7'
      // 数据，视图都更新了
    }, 1000)

    console.log(
      `database.mysql is Ref? ${isRef(database.mysql)} ${database.mysql.value}`
    )
    // database.mysql is Ref? true

    return {
      emitEvent,
      reactiveArticle,
      normalArticleTitle,
      changeRefTitle,
      changeReactiveTitle,
      frontEnd,
      changeFrontEnd,
      database
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

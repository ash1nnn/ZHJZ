<template>
	<div id="app">
	  <h1>留言板</h1>
	  <form v-on:submit.prevent="addMessage()">
	    <label for="name">姓名</label>
	    <input id="name" type="text" v-model="newMessage.name" required>
	    <br>
	    <label for="message">留言</label>
	    <textarea id="message" v-model="newMessage.message" required></textarea>
	    <br>
	    <button type="submit">添加留言</button>
	  </form>
	  <ul>
	    <li v-for="(message, index) in messages" :key="index">
	      <strong>{{message.name}}:</strong> {{message.message}}
	    </li>
	  </ul>
	</div>
</template>

<script>
	export default{
	 
	  data(){
	    messages: [
	      { name: '张三', message: '你好，留个言吧！' },
	      { name: '李四', message: '欢迎来到留言板。' },
	      { name: '王五', message: '我喜欢这个留言板。' },
	    ],
	    newMessage: { name: '', message: '' }
	  },
	  methods(){
	    addMessage() {
	      this.messages.push({
	        name: this.newMessage.name,
	        message: this.newMessage.message
	      });
	      this.newMessage.name = '';
	      this.newMessage.message = '';
	    }
	  }
	};
</script>

<style>
</style>
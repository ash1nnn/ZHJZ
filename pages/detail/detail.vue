<template>
	<view  v-if="id == 1">
		<image src="https://test-37b.pages.dev/detail/1.jpg" mode="widthFix" class="a" ></image>
	</view>
	<view  v-if="id == 2">
		<image src="https://test-37b.pages.dev/detail/2.jpg" mode="widthFix" class="a" ></image>
	</view>
	<view  v-if="id == 3">
		<image src="https://test-37b.pages.dev/detail/3.jpg" mode="widthFix" class="a" ></image>
	</view>
	<view  v-if="id == 4">
		<image src="https://test-37b.pages.dev/detail/4.jpg" mode="widthFix" class="a" ></image>
	</view>
	<view  v-if="id == 5">
		<image src="https://test-37b.pages.dev/detail/5.jpg" mode="widthFix" class="a" ></image>
	</view>
</template>

<script>
	export default {
	
		data() {
			return {
				id: '',
			}
	
		},
		onLoad(options) {
			 // console.log(options.id); 
			 this.id = JSON.parse(options.id);
	
		},
		methods: {

			},
	
		}
</script>

<style>
	.a{
		width: 750rpx;
	}
</style>
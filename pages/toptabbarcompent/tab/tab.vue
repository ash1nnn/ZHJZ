<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" scroll-x>
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view
					class="swiper-tab-list"
					:class="{'active' : tabIndex == index}"
					@tap="tabtap(index)"
				>
					{{tab.name}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"tab-slide",
		props: {
			tabBars:Array,
			tabIndex:Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			// 点击切换导航
			tabtap(index){
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-tab{
		border-bottom: 1upx solid #EEEEEE;
	}
	.active{
		color: #343434;
	}
	.active .swiper-tab-line{
		
		border-bottom: 6upx solid #5598E7;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #5598E7;
		border-radius: 20upx;
	}
</style>


<template>
	<div>
		<el-container>
			<el-header>
				<Header @qiehuan="qiehuan" :zhankai="zhankai"></Header>
			</el-header>
			<el-container class="sdss">
				<!-- 250px -->
				<el-aside :width="this.zhankai == true ? '64px' : '250px'">
					<Aside :zhankai="zhankai"></Aside>
				</el-aside>
				<el-main>
					<Main></Main>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import Aside from '@/layout/Aside'
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import { mapActions } from 'vuex'
export default {
	components: { Aside, Header, Main },
	data() {
		return {
			zhankai: false,
		}
	},

	mounted() {},
	created() {
		this.Userinfolist()
	},
	methods: {
		qiehuan() {
			this.zhankai = !this.zhankai
			console.log(this.zhankai)
		},
		// 个人信息
		async Userinfolist() {
			const infolist = await this.gitinfo()
			console.log('touxiang=>', infolist)
		},
		...mapActions({
			gitinfo: 'user/gitinfo',
		}),
	},
}
</script>

<style lang="scss" scoped>
.el-container {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	margin-top: -10px;
	margin-left: -10px;
}
.el-header {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	// line-height: 60px;
	position: absolute;
	width: 100%;
	height: 64px;
	background-color: #4338c4;
}

::v-deep .el-aside {
	// background-color: #d3dce6;
	color: #333;
	text-align: center;
	// line-height: 200px;
	// width: 250px;
	height: 100%;
	background-color: #fdfdfd;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	// line-height: 160px;
	height: 100%;
}

body > .el-container {
	margin-bottom: 40px;
	height: 100%;
}
.sdss {
	margin-top: 60px;
}
</style>

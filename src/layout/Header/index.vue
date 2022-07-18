<template>
	<div>
		<div style="height: 64px" class="left">
			<span class="logo">
				<span class="button"><i class="el-icon-eleme"></i></span>&emsp;积云编程
			</span>
			<span class="tubiao">
				<i class="el-icon-s-fold" @click="$emit('qiehuan')"></i>
				<el-tooltip class="item" effect="dark" content="刷新" placement="bottom">
					<a href="" style="color: white"><i class="el-icon-refresh"></i></a>
				</el-tooltip>
			</span>
		</div>

		<div class="reight">
			<!-- 图标 -->
			<!-- <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
				<i class="'el-icon-full-screen'" id="ds"></i>
			</el-tooltip> -->
			<div class="btn-fullscreen" @click="handleFullScreen">
				<el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
					<i :class="fullscreen ? 'el-icon-aim': 'el-icon-full-screen'"></i>
				</el-tooltip>
			</div>
			<!-- 头像 -->
			<el-avatar :src="$store.getters.userinfo.avatar"></el-avatar>
			<!-- 下拉 -->
			<el-dropdown @command="tcdl">
				<span class="el-dropdown-link">
					{{ $store.getters.userinfo.username }}
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>修改密码</el-dropdown-item>
					<el-dropdown-item command="tcdl">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
import router from '@/router'
export default {
	name: 'VueDishaIndex',
	props: ['zhankai'],
	data() {
		return {
			// tuuuu: false,
			fullscreen: false,
		}
	},

	mounted() {
		console.log('sssssss=>', this.zhankai)
	},

	methods: {
		// sssss() {
		// 	this.tuuuu = !this.tuuuu
		// },
		tcdl() {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					window.localStorage.removeItem('token')
					window.localStorage.removeItem('userinfo')
					this.$router.push('/login')
					this.$notify({
						title: '退出登录成功',
						type: 'success',
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消退出',
					})
				})
		},
		handleFullScreen() {
			const element = document.documentElement
			if (this.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen()
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen()
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen()
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen()
				}
			} else {
				if (element.requestFullscreen) {
					element.requestFullscreen()
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen()
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen()
				} else if (element.msRequestFullscreen) {
					// IE11
					element.msRequestFullscreen()
				}
			}
			this.fullscreen = !this.fullscreen
		},
	},
}
</script>

<style lang="scss" scoped>
.button {
	background: white;
	border-radius: 5px;
	color: black;
}
.logo {
	color: white;
}
.left {
	float: left;
	line-height: 60px;
	padding: 0 50px;
}
.tubiao {
	color: white;
	padding: 0 70px;
	i {
		margin-left: 20px;
	}
}
.reight {
	width: 200px;
	color: white;
	float: right;
	height: 64px;
	margin-right: 10px;
	position: relative;
	span {
		color: white;
		// position: 0 10px
		margin-right: -30px;
		// margin-top: -10px;
		// position: absolute;
		float: left;
		margin-top: 20px;
	}
	.el-avatar {
		float: left;
		margin-top: 15px;
		// margin-right: -30px;
		width: 30px;
		height: 30px;
		margin-left: 30px;
	}
	#ds {
		margin-right: 23px;
		margin-top: 23px;
		// position: absolute;
		float: left;
	}
}
.btn-fullscreen {
	float: left;
	margin-top: 20px;
}
</style>

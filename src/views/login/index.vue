<template>
	<div class="big">
		<div class="left">
			<b> <span class="leftzi">欢迎光临</span></b>
		</div>
		<div class="reight">
			<div class="denlu">
				<p><b><span class='biaoti'>欢迎回来</span></b></p>
				<div data-v-d3183e6a="" class="zi">
					<span class="line" data-v-d3183e6a="">——&nbsp;</span>
					<span data-v-d3183e6a="">账号密码登录</span>
					<span class="line" data-v-d3183e6a="">&nbsp;——</span>
				</div>
				<br />
				<el-form ref="form" :model="loginform" :rules="rules">
					<el-form-item prop="username">
						<el-input v-model="loginform.username" prefix-icon="el-icon-user"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="loginform.password" prefix-icon="el-icon-lock" :show-password="true"></el-input>
					</el-form-item>

					<el-form-item>
						<!-- <el-button class="ljdl">立即登录</el-button> -->
						<el-button type="primary" round class="ljdl" @click="denlucg">立即登录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VueDishaIndex',

	data() {
		return {
			loginform: {
				username: '',
				password: '',
			},
			rules: {
				username: [
					{ required: true, message: '请输入账号', trigger: 'blur' },
					{ min: 4, max: 5, message: '长度在 4 到 5 个字符', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{
						min: 5,
						max: 10,
						message: '长度在 5 到 10 个字符',
						trigger: 'blur',
					},
				],
			},
		}
	},

	mounted() {},

	methods: {
		denlucg() {
			this.$notify({
				title: '登录成功',
				message: '这是一条成功的提示消息',
				type: 'success',
			})
		},
	},
}
</script>

<style lang="scss" scoped>
* {
	height: 100%;
}
.big {
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0px;
}
.left {
	width: 70%;
	height: 100%;
	background-color: #626aef;
	position: absolute;
	line-height: 100%;
}
.leftzi {
	margin-top: 37%;
	float: left;
	margin-left: 40%;
	font-size: 50px;
	color: white;
}
.reight {
	// background: cornflowerblue;
	width: 30%;
	position: absolute;
	right: 0px;
}
.denlu {
	width: 300px;
	height: 300px;
	// background: white;
	position: absolute;
	top: 30%;
	left: 20%;
	text-align: center;
	span {
		font-size: 30px;
		margin-top: -20px;
	}
}
::v-deep .right .line[data-v-d3183e6a] {
	--tw-bg-opacity: 1;
	background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
	height: 1px;
	width: 4rem;
}
.zi {
	margin-top: -270px;
	height: 30px;
	span {
		font-size: 15px;
		color: rgb(216, 222, 228);
	}
}
.line {
	width: 100px;
	// border-bottom: 1px solid black;
}
.el-form-item {
	height: 40px;
	width: 250px;
	text-align: center;
	// margin-left:25px;
	padding: 0px 25px;
}
.ljdl {
	width: 250px;
	height: 35px;
	background-color: #626aef;
	border: none;
}
</style>

<template>
	<div>
		<el-menu default-active="2" class="el-menu-vertical-demo" :collapse="zhankai" :collapse-transition="false" :unique-opened="true" router>
			<!-- <el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
				</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<i class="el-icon-document"></i>
				<span slot="title">导航三</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span slot="title">导航四</span>
			</el-menu-item> -->
			<menustee v-for="(item, index) in list" :menu="item" :key="index"></menustee>
		</el-menu>
	</div>
</template>

<script>
import menustee from './menustee'
export default {
	components: { menustee },
	name: 'VueDishaIndex',
	props: ['zhankai'],
	data() {
		return {
			list: [],
		}
	},

	mounted() {
		this.list = this.$store.getters.userinfo.menus
		console.log('leftlist=>', this.list)
	},

	methods: {},
}
</script>

<style lang="scss" scoped></style>

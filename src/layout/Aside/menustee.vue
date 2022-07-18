<template>
	<!-- <div>{{ menu }}</div> -->
	<el-submenu v-if="menu.frontpath == null && menu.child.length || menu.frontpath == ' ' > 0" :index="menu.frontpath">
		<template slot="title">
			<i :class="'el-icon-' + menu.icon"></i>
			<span slot="title">{{ menu.name }}</span>
		</template>
		<menustee v-for="(item, index) in menu.child" :key="index" :menu="item"></menustee>
	</el-submenu>
	<el-menu-item-group v-else>
		<el-menu-item :index="menu.frontpath">
			<i :class="'el-icon-' + menu.icon"></i>
			<span slot="title"> {{ menu.name }}</span>
		</el-menu-item>
	</el-menu-item-group>
</template>

<style lang="scss" scoped></style>

<script>
export default {
	name: 'menustee',
	props: ['menu'],
	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>
<style scoped lang="scss"></style>

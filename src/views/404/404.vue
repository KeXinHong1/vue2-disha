<template>
	<div>
		<center>
      <el-col :sm="12" :lg="24">
			<el-result icon="warning" title="404提示" subTitle="请根据提示进行操作">
				<template slot="extra">
					<el-button type="primary" size="medium">返回</el-button>
				</template>
			</el-result>
		</el-col>
    </center>
	</div>
</template>

<script>
export default {
	name: 'VueDisha404',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h4 class="mb-2">工作經歷</h4>
    <table class="table">
      <thead>
        <tr>
          <th>公司</th>
          <th>工作內容</th>
          <th>工作時間</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="exp in Experience" :key="exp._id">
          <td>{{exp.company}}</td>
          <td>{{exp.title}}</td>
          <td>
            {{exp.from}} ~ {{exp.to}}
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deleteExperience(exp._id)">
              删除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    Experience:Array
  },
  methods:{
    deleteExperience(id){
      this.$emit("deletExperience",id);
    }
  }
};
</script>

<style></style>

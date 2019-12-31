<template>
  <div>
    <h4 class="mb-2">教育</h4>
    <table class="table">
      <thead>
        <tr>
          <th>學校</th>
          <th>學歷</th>
          <th>時間</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="edu in Education" :key="edu._id">
          <td>{{edu.school}}</td>
          <td>{{edu.degree}}</td>
          <td>
            {{edu.from}} ~ {{edu.to}}
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deletEducation(edu._id)">
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
    Education:Array
  },
  methods:{
    deletEducation(id){
      this.$emit("deletEducation",id);
    }
  }
};
</script>

<style></style>

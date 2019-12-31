<template>
  <div class="row">
    <div class="col-md-6">
      <h3 class="text-center text-info">經驗</h3>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(exp, index) in experience"
          :key="index"
        >
          <h4>{{ exp.company }}</h4>
          <p v-if="exp.current">{{ exp.from }} - 至今</p>
          <p v-else>{{ exp.from }} - {{ exp.to }}</p>
          <p><strong>職位:</strong> {{ exp.title }}</p>
          <p><strong>描述:</strong> {{ exp.description }}</p>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3 class="text-center text-info">教育</h3>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(edu, index) in education"
          :key="index"
        >
          <h4>{{ edu.school }}</h4>
          <p v-if="edu.current">{{ edu.from }} - 至今</p>
          <p v-else>{{ edu.from }} - {{ edu.to }}</p>
          <p><strong>學歷: </strong>{{ edu.degree }}</p>
          <p><strong>專業: </strong>{{ edu.fieldofstudy }}</p>
          <p><strong>描述:</strong> {{ edu.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: Array,
    education: Array
  }
};
</script>

<style></style>

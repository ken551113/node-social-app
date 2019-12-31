<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-body bg-light mb-3">
        <h3 class="text-center text-info">{{profile.user.name}}個人簡介</h3>
        <p class="lead">
          {{profile.bio}}
        </p>
        <hr />
        <h3 class="text-center text-info">技能</h3>
        <div class="row">
          <div
            class="d-flex flex-wrap justify-content-center align-items-center"
          >
            <div class="p-3" v-for="(skill,index) in profile.skills" :key="index"><i class="fa fa-check"></i> {{skill}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    profile:Object
  }
};
</script>

<style></style>

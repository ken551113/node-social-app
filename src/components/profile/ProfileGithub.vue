<template>
  <div ref="myRef">
    <hr />
    <h3 class="mb-4">Github</h3>
    <div class="card card-body mb-2" v-for="repo in repos" :key="repo.id" >
      <div class="row">
        <div class="col-md-6" >
          <h4>
            <a :href="repo.html_url" class="text-info" target="_blank">
              {{repo.name}}
            </a>
          </h4>
          <p>{{repo.description}}</p>
        </div>
        <div class="col-md-6">
          <span class="badge badge-info mr-1">
            Stars: {{repo.stargazers_count}}
          </span>
          <span class="badge badge-secondary mr-1">
            Watchers: {{repo.watchers}}
          </span>
          <span class="badge badge-success">
            Forks: {{repo.forks}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientId: "d8752ff2987b7d94f2a0",
      client_secret: "73675f30eef892cd6642a66888a2cf9c8e61702e",
      count: 0,
      sort: "created: desc",
      repos: []
    };
  },
  created() {
    //https://api.github/user/username/repos?per_page=count&sort=sort&client_id=clientId&client_secret=clientSecret
    fetch(
      `https://api.github.com/users/${this.username}/repos?per_page=${this.count}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.client_secret}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.repos = data;
        console.log(data);
      })
      .catch(err => {
        console.log(err.respones);
      });
  },
  props: {
    username: String
  }
};
</script>

<style></style>

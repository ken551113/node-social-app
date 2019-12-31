import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "../components/Landing.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
import CreateProfile from "../components/CreateProfile.vue";
import EditProfile from "../components/EditProfile.vue";
import AddExperience from "../components/AddExperience.vue";
import AddEducation from "../components/AddEducation.vue";
import Profiles from "../components/Profiles.vue";
import Profile from "../components/profile/Profile.vue";
import Posts from "../components/posts/Posts.vue";
import Post from "../components/posts/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/create-profile",
    name: "CreateProfile",
    component: CreateProfile
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile
  },
  {
    path: "/add-experience",
    name: "AddExperience",
    component: AddExperience
  },
  {
    path: "/add-education",
    name: "AddEducation",
    component: AddEducation
  },
  {
    path: "/profiles",
    name: "Profiles",
    component: Profiles
  },
  {
    path: "/profile/:handle",
    name: "Profile",
    component: Profile
  },
  {
    path: "/feed",
    name: "feed",
    component: Posts
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes
});

export default router;

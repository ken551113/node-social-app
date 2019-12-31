<template>
  <div class="input-group mt-3">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i :class="icon"></i>
      </span>
    </div>
    <input
      class="form-control form-control-lg"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :class="{ 'is-invalid': error }"
      @input="$emit('input', $event.target.value)"
    />
    <div class="invalid-feedback" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "textFieldGroup",
  props: {
    placeholder: String,
    value:String,
    name: String,
    error: String,
    icon: String
  }
};
</script>

<style></style>

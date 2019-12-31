<template>
  <div class="form-group">
    <textarea
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
    <small v-if="info" className="form-text text-muted">{{ info }}</small>
  </div>
</template>

<script>
export default {
  name: "textFieldGroup",
  props: {
    placeholder: String,
    name: String,
    value: String,
    error: String,
    info: String
  }
};
</script>

<style></style>

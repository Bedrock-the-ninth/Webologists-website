<template>
  <div>
    <form
      action="mailto:info.webologists@gmail.com"
      method="post"
      enctype="text/plain"
    >
      <label>Your Name:</label><br />
      <input type="text" name="Your name " placeholder="e.g. Bedrock" /><br />
      <label>Your e-mail address:</label><br />
      <input
        type="email"
        name="Your email "
        placeholder="e.g. bedrock@email.sth"
      /><br />
      <textarea
        name="Your message "
        cols="30"
        rows="10"
        placeholder="Your message"
      ></textarea
      ><br />
      <br /><input type="submit" name="" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
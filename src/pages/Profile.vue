<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      const userData = JSON.parse(sessionStorage.getItem("user"));
      return {
        model: {
          email: userData.email,
          username: userData.userName,
          password: "",
          aboutMe: userData.aboutMe,
        },
        user: {
          fullName: userData.userName,
          aboutMe: userData.aboutMe,
        }
      }
    }
  }
</script>
<style>
</style>

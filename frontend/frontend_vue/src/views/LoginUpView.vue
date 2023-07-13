<template>
  <div class="login-form">
    <h2 class="text-3xl font-bold text-white mb-4">Вход в профиль</h2>
    <form>
      <div class="mb-6">
        <label for="email" class="text-white">Email:</label>
        <input type="email" id="email" v-model="email" class="form-input" />
      </div>
      <div class="mb-6">
        <label for="password" class="text-white">Пароль:</label>
        <input type="password" id="password" v-model="password" class="form-input" />
      </div>
      <button class="form-button"> <RouterLink to="#" class="underline"> Войти </RouterLink> </button>
      <button class="form-button"> <RouterLink to="signup" class="underline"> Регистрация </RouterLink> </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Обработка логики входа в профиль
    },
    register() {
      // Обработка логики регистрации
    },
  },
};
</script>

<style scoped>
.login-form {
  @apply max-w-md mx-auto p-8 bg-gray-800 rounded-lg shadow-lg;
}

.form-title {
  @apply text-center mb-6 text-3xl font-bold text-white;
}

.form-group {
  @apply mb-6;
}

label {
  @apply text-white;
}

.form-input {
  @apply w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white;
}

.form-button {
  @apply w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded cursor-pointer transition-colors duration-300;
}

.form-button:hover {
  @apply bg-blue-600;
}
</style>

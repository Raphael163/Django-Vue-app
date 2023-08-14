<template>
  <div class="registration-form">
    <h2 class="text-3xl font-bold text-white mb-4">Регистрация</h2>
    <form>
      <div class="mb-6">
        <label for="name" class="text-white">Имя:</label>
        <input type="text" id="name" v-model="name" class="form-input" />
      </div>
      <div class="mb-6">
        <label for="email" class="text-white">Email:</label>
        <input type="email" id="email" v-model="email" class="form-input" />
      </div>
      <div class="mb-6">
        <label for="password" class="text-white">Пароль:</label>
        <input type="password" id="password" v-model="password" class="form-input" />
      </div>
      <div class="mb-6">
        <label for="confirmPassword" class="text-white">Подтверждение пароля:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-input" />
      </div>
      <button class="form-button" @click="register">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

import { useToastStore } from '@/stores/toast'

export default {
    setup() {
        const toastStore = useToastStore()

        return {
            toastStore
        }
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                password1: '',
                password2: ''
            },
            errors: [],
        }
    },
      methods: {
        submitForm() {
            this.errors = []

            if (this.form.email === '') {
                this.errors.push('Your e-mail is missing')
            }

            if (this.form.name === '') {
                this.errors.push('Your name is missing')
            }

            if (this.form.password1 === '') {
                this.errors.push('Your password is missing')
            }

            if (this.form.password1 !== this.form.password2) {
                this.errors.push('The password does not match')
            }

            if (this.errors.length === 0) {
                axios
                    .post('/api/signup/', this.form)
                    .then(response => {
                        if (response.data.message === 'success') {
                            this.toastStore.showToast(5000, 'The user is registered. Please log in', 'bg-emerald-500')

                            this.form.name = ''
                            this.form.email = ''
                            this.form.password1 = ''
                            this.form.password2 = ''
                        } else {
                            this.toastStore.showToast(5000, 'Something went wrong. Please try again', 'bg-red-300')
                        }
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
            }
        }
    }
}
</script>

<style scoped>
.registration-form {
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

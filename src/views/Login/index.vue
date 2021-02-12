<template lang="pug">
include /node_modules/bemto.pug/bemto.pug

- set_bemto_settings({ modifier: '--' })

+b.page-login
    +e.LOGO.logo
    +b.FORM.page-login__form.panel-form__(
        @submit.stop.prevent="handleSubmit"
    )
        +e.title.base-h1 Вход
        +e({ tag: 'BaseTextField' }).input(
            v-model='login',
            placeholder='E-mail или телефон',
        )
        +e({ tag: 'BaseTextField' }).input(
            v-model='password',
            placeholder='Пароль',
            password
        )
        +e({tag: 'BaseButton'}).button(
            :disabled="isDisabledButton"
            :loading="isLoading"
        ) Войти

</template>

<script>
import './style'

export { default } from './script'
</script>

<template lang="pug">
include /node_modules/bemto.pug/bemto.pug

+b.BUTTON.base-button.base-button--primary(
    v-bind='$attrs',
    v-on='$listeners',
)
    +e.LOADER.loader(v-if="loading")
    +e.SLOT.slot(
        v-else
    )
</template>

<script>
import './style'

export { default } from './script'
</script>

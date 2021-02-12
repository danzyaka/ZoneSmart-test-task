<template lang="pug">
include /node_modules/bemto.pug/bemto.pug

+b.DIV.base-text-field
    +e.DIV.inner-wrapper
        +e.DIV.input-wrapper(:class='classesInputWrapper')
            +e.LABEL.label.base-label {{ placeholder }}
            +e.INPUT.input(
                v-model='value',
                v-bind='$attrs',
                :type='fieldType',
                v-on='listeners',
                @focus='isActive = true',
                @blur='isActive = false'
            )
            +e.VUE-FEATHER.icon(
                v-if='password',
                :type='iconName',
                @click='isHidePassword = !isHidePassword'
            )
    transition(name='counter-fade')
        +e.SPAN.error-tip.base-text.base-text--xs(v-if='errorMessage') {{ errorMessage }}
</template>

<script>
import './style'

export { default } from './script'
</script>

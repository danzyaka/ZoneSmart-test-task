export default {
    name: 'BaseTextField',
    props: {
        password: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
        rules: {
            type: Array,
            default: () => [],
            validator: (v) => v.every((item) => typeof item === 'function'),
        },
    },
    data() {
        return {
            value: '',
            isValidate: this.rules.length !== 0,
            isActive: false,
            isHidePassword: true,
        }
    },
    computed: {
        listeners() {
            const vm = this
            return {
                ...this.$listeners,
                input({ target: { value } }) {
                    vm.$emit('input', value)
                },
            }
        },

        fieldType() {
            return this.password && this.isHidePassword ? 'password' : 'text'
        },

        classesInputWrapper() {
            return {
                'base-text-field__input-wrapper--active':
                    this.isActive || !!this.value,
                'base-text-field__input-wrapper--error': !!this.errorMessage,
                'base-text-field__input-wrapper--valid':
                    !!this.isValidate && !this.errorMessage && !!this.value,
            }
        },

        errorMessage() {
            if (!this.value) return false
            let message

            const error = this.rules.some((rule) => {
                message = rule(this.value)
                return typeof message === 'string'
            })

            return error ? message : false
        },

        iconName() {
            return this.isHidePassword ? 'eye' : 'eye-off'
        },
    },

    watch: {
        errorMessage(newValue) {
            this.$emit('valid', !newValue)
        },
    },
}

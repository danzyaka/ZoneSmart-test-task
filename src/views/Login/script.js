import BaseTextField from '@/components/BaseTextField'
import BaseButton from '@/components/BaseButton'
import Logo from '@/assets/logo-light-bg.svg';

export default {
    name: 'Login',
    components: {
        BaseTextField,
        BaseButton,
        Logo,
    },
    data() {
        return {
            login: '',
            password: '',
            isValid: false,
            isLoading: false,
        }
    },
    computed: {
        isDisabledButton() {
            return !(this.login && this.password)
        },
    },
    methods: {
        handleSubmit(event) {
            console.log(event);
        },
    },
}

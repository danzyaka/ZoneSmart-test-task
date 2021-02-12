import Loader from '@/assets/loader.svg';

export default {
    name: 'BaseButton',
    components: {
        Loader,
    },
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
    },
}

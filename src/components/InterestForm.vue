<script>
export default {
    data() {
        return {
            email: '',
            message: '',
        };
    },

    head: {
        script: [
            {
                src: 'https://www.google.com/recaptcha/api.js',
            },
        ],
    },

    mounted() {
        window.recaptchaJank = this.onSubmit;
        this.$nextTick(this.focus);
    },

    methods: {
        onSubmit() {
            this.$refs.interestForm.submit();
        },

        focus() {
            this.$refs.emailField.focus();
        },
    },
};
</script>
<template>
    <form
        ref="interestForm"
        class="prose mx-auto"
        action="https://api.formcake.com/api/form/FIXME"
        method="post"
    >
        <input type="hidden" name="honey" />

        <input
            ref="emailField"
            v-model="email"
            type="email"
            name="email"
            placeholder="Your email address"
        />

        <input
            v-model="message"
            type="text"
            name="message"
            placeholder="What should I put on this site"
        />

        <button
            class="g-recaptcha submit"
            data-sitekey="6Lf6IyUaAAAAAPTTe__sC4052VzvGcwFlBHeajA0"
            data-callback="recaptchaJank"
            data-action="submit"
        >
            SUBMIT
        </button>
    </form>
</template>


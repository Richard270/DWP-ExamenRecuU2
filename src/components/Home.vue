<template>
    <b-container fluid>
        <b-row>
            <div id="title" class="my-5">
                <h2 class="my-3">This is Recu Exam Unit 2 DWP</h2>
                <div class="my-3">
                    <b-button class="mx-1" variant="primary" @click="Home">Home</b-button>
                    <b-button class="mx-1" variant="success" @click="Form">Classmates Form</b-button>
                </div>
            </div>
        </b-row>
    </b-container>
</template>
<script>
export default {
    methods: {
        Home() {
            this.$router.push('/')
        },
        Form() {
            this.$router.push('/form')
        }
    },
}
</script>

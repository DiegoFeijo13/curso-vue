import Vue from 'vue'

export default new Vue({
    methods:{
        changeUser(user){
            this.$emit('userChanged', user)
        },
        onUserChange(callback){
            this.$on('userChanged', callback)
        }
    }
})
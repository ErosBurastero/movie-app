// This error handler is usefull to combinate with vuelidate plugin, i built 2 function, one is for strings and the other one is for arrays
// By using them is easy to set up and a good practice to combinate with http request when trying to validate the input fields.

export default {
    methods: {
        errorHandler(value, rules = false) {
            const errors = []
            if (!this.$v[value].$dirty) return errors
            if (rules) {
                rules.forEach(rule => {
                    !this.$v[value][rule.name] && errors.push(rule.message)
                });
                return errors
            }
        },

        errorMultipleHandler(value, subValue = null, index, rules = false) {
            const errors = []
            if (!this.$v[value].$each[index][subValue].$dirty) return errors
            if (rules) {
                rules.forEach(rule => {
                    !this.$v[value].$each[index][subValue][rule.name] && errors.push(rule.message)
                });
                return errors
            }
        }
    }

}
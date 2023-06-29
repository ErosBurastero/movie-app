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
// Creating injection to call http functions everywhere, with no imports.

import movies from "~/services/movies.js";

export default ({ $axios }, inject) => {
    const allMethods = {
        ...movies($axios),
    }
    const methods = Object.keys(allMethods)
    methods.forEach((method) => {
        inject(method, allMethods[method])
    })
}
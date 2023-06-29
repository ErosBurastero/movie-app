// Color variables is a file to provide colors in native vuetify props, by calling this mixin you will be able to use this inside props,
// otherwise, if you try to use a class from scss or style you wont be able to style it, so,
// to avoid hardcoding colors or making mistakes when choosing them, it's a good practice to declare them in a mixin

// Often, in here you must declare the variables with the colors provided by UI/UX team with its respective names, by getting them through FIGMA, ADOBE or another photoshop

export default {
    data() {
        return {
            black: '#212121',
            white: '#FFFFFF',
            blue: '#223143',
        }
    }
}
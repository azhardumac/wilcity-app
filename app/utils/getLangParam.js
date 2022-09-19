
const getLangParam = (lang, settings) => {

    if (!lang || lang === settings?.WPML?.defaultLang) {
        return {}
    }
    return {
        lang
    }
}

export default getLangParam;
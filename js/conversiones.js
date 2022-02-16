const ResultsbtnDOM = document.querySelector(".results")
const LimpiarbtnDOM = document.querySelector(".clear")
const MainQueryDOM = document.querySelector(".query")
const shortResultDOM = document.querySelector(".short")
const integerResultDOM = document.querySelector(".integer")
const longResultDOM = document.querySelector(".long")
const floatResultDOM = document.querySelector(".float")
const doubleResultDOM = document.querySelector(".double")

const ShortConversion = (number) => {
    short = parseInt(number)
    return short
}

const FloatConversion = (number) => {
    float = parseFloat(number)
    return float
}

const ResultEvent = () => {
    ResultsbtnDOM.addEventListener("click", () => {
        shortResultDOM.value = ShortConversion(MainQueryDOM.value)
        integerResultDOM.value = ShortConversion(MainQueryDOM.value)
        longResultDOM.value = ShortConversion(MainQueryDOM.value)
        floatResultDOM.value = FloatConversion(MainQueryDOM.value)
        doubleResultDOM.value = FloatConversion(MainQueryDOM.value)
    })
}

const LimpiarEvent = () => {
    LimpiarbtnDOM.addEventListener("click", () => {
        shortResultDOM.value = ''
        integerResultDOM.value = ''
        longResultDOM.value = ''
        floatResultDOM.value = ''
        doubleResultDOM.value = ''
        MainQueryDOM.value = ''
    }) 
}


console.log(ShortConversion(5.22))
console.log(FloatConversion(5.22))
ResultEvent()
LimpiarEvent()
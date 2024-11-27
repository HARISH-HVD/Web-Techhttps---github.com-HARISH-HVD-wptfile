const errorDiv = document.getElementById("error")
const historyList = document.querySelector("#history-list")
const history = []
const operations=["+","-","x","/","!(fact)","rect","rem","circ","e/o"]
// history=10  //error
// const obj={name:"Harish"}
// obj.age=22
// obj=55  //error
/*
push() add value
unshift() add value at start

pop() delete from last
shift() delete from  start

splice() add/remove elements from any index

HOF(high order functions) callback function    forEach()   filter()  map()
*/

//addEventListener()  removeEventListner()
document.querySelector("#filter").addEventListener("change", function () {
    const op = this.value
    if (op === "all" || op === "") {
        printHistoryList(getParseHistoryList())
    }
    else {
        // console.log(op)
        const parseHistory = getParseHistoryList()
        const filteredParseHistory = parseHistory.filter(function (e) {
            return op === e.op
        })
        printHistoryList(filteredParseHistory)
    }
})

function addListEvent() {

    const lists = document.querySelectorAll("#history-list > li")

    lists.forEach((li) => {
        li.addEventListener("click", () => {
            console.log(li.innerHTML)
            const bothsides = this.innerHTML.split("=")
            document.querySelector("#result").innerHTML = bothsides[0]
            let operand=null

            for(op of operations)

            operations.forEach((op)=>
            {
                if(bothsides[1].includes(op))
                {
                   operand=bothsides[1].split(op)
                }
            })
            document.querySelector("#num1").innerHTML = operand[0]
            document.querySelector("#num2").innerHTML = operand[0]
        })
    })

}

function addToHistory(num1, num2, r, op) {
    const exp = { num1, num2, result: r, op }
    history.push(exp)
    console.table(history)

    const jsonHistory = JSON.stringify(history)
    localStorage.setItem("historykey", jsonHistory)
    printHistoryList(getParseHistoryList())
}

function getParseHistoryList() {
    return JSON.parse(localStorage.getItem("historykey"))
}

function printHistoryList(parseHistory) {

    historyList.innerHTML = ""
    parseHistory.forEach(function (e, i) {
        historyList.innerHTML += `<li class="list-group-item">
        
        <span>${e.result}</span>
        <span>=</span>
        <span>${e.num1}</span>
        <span>${e.op}</span>
        <span>${e.op === "!(fact)" ? "" : e.num2}</span>
        </li>`
    })
    addListEvent()
}

printHistoryList(getParseHistoryList())   //call when html page load or open

function addition() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 + num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "+")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function subtraction() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 - num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "-")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function multiplication() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 * num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "x")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function division() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 / num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "/")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function remainder() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 % num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "rem")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function rectangle() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 * num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "rect")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function Circle() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = ""
        const result = Math.PI * num1

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "circ")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function Factorial() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = ""
        let fact = 1
        for (let i = 1; i <= num1; i++) {
            fact *= i
        }

        document.getElementById("result").innerHTML = `${num1}!=${fact}`
        addToHistory(num1, num2, fact, "!(fact)")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
function Evenodd() {
    //DOM Document Object Module
    try {
        const num1 = parseInt((document.getElementById("num1").value).trim())  //trim()
        const num2 = parseInt((document.getElementById("num2").value).trim())
        const result = num1 * num2

        document.getElementById("result").innerHTML = "" + result
        addToHistory(num1, num2, result, "e/o")
    }
    catch (e) {
        errorDiv.innerHTML = e
        console.error(e)
    }

}
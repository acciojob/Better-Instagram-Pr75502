//your code here
let arr = ["div1", "div2", "div3", "div4", "div5", "div6"]
let divs = document.querySelectorAll('.image')
let k=0
for (let imgSection of divs) {
    imgSection.id = arr[k++]
    
    imgSection.addEventListener("dragstart", (e) => {
        let div = e.target
        div.style.opacity = "0.5"
        e.dataTransfer.setData("text",div.id)
    
    })
    imgSection.addEventListener("dragend", (e) => {
        let div=e.target
        div.style.opacity="1.0"

       
    })

}
let eventsArr = ["dragover", "dragenter", "drop"];
for (let dragEvents of eventsArr) {
    for (let imgSection of divs) {
        imgSection.addEventListener(dragEvents, e => {
            e.preventDefault()


            if (dragEvents == "drop") {
                let drag1= e.dataTransfer.getData("text")
                let drag1Element = document.getElementById(drag1);
             let text1 = drag1Element.innerText
                
                let drag2 = imgSection.id
               let text2=imgSection.innerText
                imgSection.id = drag1
                drag1Element.id = drag2
                



                drag1Element.innerText = text2
                imgSection.innerText=text1

            }
        })
    }
}
let arr;
const inputs = document.querySelectorAll(".box");
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const InsertionSort = async(arr)=>{
    for(let pointer = 1; pointer<arr.length; pointer++){
        let current = arr[pointer];
        let j = pointer-1;
        inputs[pointer].classList.add("pointer");
        await delay(1000);
        while(j>=0 && arr[j]> current){
            inputs[j].classList.add("highlight");
            await delay(1000);
            arr[j+1] = arr[j];
            inputs[j + 1].value = inputs[j].value;
            inputs[j].classList.remove("highlight");
            j--
        }
        arr[j+1]=current;
        inputs[j + 1].value = current;
        inputs[pointer].classList.remove("pointer");

        await delay(1000);
    }
}



document.getElementById("sortBtn").addEventListener("click",()=>{
    let arr = Array.from(inputs).map((input)=>Number(input?.value || 0));
    InsertionSort(arr);
})

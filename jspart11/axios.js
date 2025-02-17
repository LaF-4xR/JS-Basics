let url = "https://catfact.ninja/fact";

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("button");

    btn.addEventListener("click", async function () {
        let fact= await getFacts();
        console.log(fact);
        let p = document.querySelector("p");
        p.innerText = fact;
    });




async function getFacts() {
    try
    {
        let res = await axios.get(url);
        
        return res.data.fact;
    
        // console.log(res.data);
        // console.log(res.data.fact);
        // console.log(res.data.length);
    } catch(e) {
        console.log("Error", e);
    }
}
}); 
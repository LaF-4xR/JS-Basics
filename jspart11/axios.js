let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

async function getFacts() {
    try
    {
        let res = await axios.get(url);
        
    
        console.log(res.data);
        console.log(res.data.fact);
        console.log(res.data.length);
    } catch(e) {
        console.log("Error", e);
    }
}
getFacts();
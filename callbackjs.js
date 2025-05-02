const button=document.querySelector("button");
const newele=document.getElementById("new");
button.addEventListener("click",addapi);
function addapi(){
    const newdiv=document.createElement("div");
    newdiv.classList.add("newdiv");
    setTimeout(()=>{
        newdiv.innerHTML="<p class='callback-msg'>Callback executed after 5seconds</p>";
        fetchapi()
    },5000);
    function fetchapi(){
        const data=fetch("https://dummyjson.com/posts");
        data.then(response=>response.json())
            .then(result=>{
                const list=document.createElement("ul");
                list.classList.add("newlist");
                const posts = result.posts;
                for (const post of posts) {
                    const item = document.createElement("li");
                    item.classList.add("newitem");
                    item.textContent = post.title;
                    list.appendChild(item);
                }
                newdiv.appendChild(list);
            })
            .catch(err=>{
                newdiv.innerHTML+="<p class='callback-msg'>Fetching is Unsuccessfull</p>"
            })
    }
    newele.appendChild(newdiv);
    
    

    
}
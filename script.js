async function loadUsers(){
        const ul =document.getElementById("users");
        ul.innerHTML="Changement..." ;
        
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();

            ul.innerHTML="";
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `${user.name}  -  ${user.email}  -  ${user.address.city}`;
                ul.appendChild(li);
            });
        } catch(err){
            ul.innerHTML ="Erreur lors du chargement.";
            console.error(err);
        }
}
async function loadUsers() {
    const ul = document.getElementById("users");
    ul.innerHTML = "Changement...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        ul.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
              <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 text-primary">${user.name}</h5>
      <small class="badge text-bg-danger">${user.username}</small>
    </div>
    <p class="mb-1 text-success"> ${user.phone}</p>
    <p class="mb-1"> ${user.email}    ${user.website}</p>
    <p class="mb-1"> ${user.company.name}.</p>
    <small class="text-warning">${user.address.city}  -   ${user.company.catchPhrase}</small>
    <br>
    <small class="text-warning-emphasis">${user.company.bs}</small>
  </a>
                 </p>
 
</div>`;
            ul.appendChild(li);
        });
    } catch (err) {
        ul.innerHTML = "Erreur lors du chargement.";
        console.error(err);
    }
}
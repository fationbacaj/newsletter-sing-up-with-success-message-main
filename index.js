
document.getElementById("container-form-sing-up").addEventListener("submit", function(event) {
    event.preventDefault(); // Parandalon dërgimin e formës
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const useremailInput = document.getElementById("email"); // Ndryshimi këtu, futeni inputin e emailit, jo vlerën e tij
    const errorContainer = document.getElementById("error");
    
    // Kontrolloni nëse emaili është i zbrazët
    if (useremailInput.value === "" || !emailRegex.test(useremailInput.value)) {
       // Përdorimi i ! për negacion të rezultatit të testimit të regex
        errorContainer.innerText = "Email required.";
        errorContainer.style.color = "red";
        errorContainer.style.position = "absolute";
        errorContainer.style.right = "5px";
        errorContainer.style.top = "0px";
        useremailInput.style.background = "rgb(255 1 1 / 22%)";
        return; // Dihet se kushti nuk është i plotësuar, prandaj nuk vazhdoni më tej
    }
    
   
    // Përdorni testimin e regex për të verifikuar formatin e emailit
    if (useremailInput.value !== "" || emailRegex.test(useremailInput.value)) {
        // errorContainer.innerText = "Email format is valid.";
        // errorContainer.style.color = "green";
        // errorContainer.style.position = "absolute";
        // errorContainer.style.right = "-20px";
         // Këtu mund të vazhdoni me procesin e hyrjes

    // Skripti për të ndryshuar klaset e div-ave për të shfaqur formën e dytë
    const form = document.querySelector("form");
    const card1 = document.querySelector(".card");
    const card2 = document.querySelector(".card2");
    const emriEmail = document.querySelector(".b");
  
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        card1.classList.add("hide");
        card2.classList.remove("hide");
        emriEmail.innerText = useremailInput.value;
    });
    } 
    
  
   
});





 
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // annule le comportement par défaut (envoi du formulaire)
  event.preventDefault();

  // conteneur des erreurs
  let errorContainer = document.querySelector(".message-error");
  // liste des erreurs
  let errorList = document.querySelector(".message-error ul");

  // on récupère le champ email
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  // on récupère le champ email
  let email = document.querySelector("#email");

  // si l'email est vide
  if (email.value === "") {
    // on affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    // créer un <li></li> dans le html
    let err = document.createElement("li");
    err.innerText =
      'Le champ email ne peut pas être vide et doit contenir le symbole "@".';
    // on ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  // on récupère le champ nom
  let nom = document.querySelector("#nom");

  // si le nom est vide
  if (nom.value == "") {
    // on affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    // créer un <li></li> dans le html
    let err = document.createElement("li");
    err.innerText = "Le nom ne peut pas être vide.";
    // on ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  // on récupère le champ prénom
  let prenom = document.querySelector("#prenom");

  // si le prenom est vide
  if (prenom.value == "") {
    // on affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    // créer un <li></li> dans le html
    let err = document.createElement("li");
    err.innerText = "Le prénom ne peut pas être vide.";
    // on ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  // on récupère le champ password
  let password = document.querySelector("#password");

  // si le password est vide
  if (password.value.length < 8 || passCheck.test(password.value) === false) {
    // on affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    // créer un <li></li> dans le html
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe ne peut pas être inférieur à 8 caractères et doit contenir au moins une majuscule, un chiffre et un caractère spécial.";
    // on ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  // on récupère le champ passwordConfirm
  let passwordConfirm = document.querySelector("#password2");

  // si le passwordConfirm est vide
  if (passwordConfirm.value != password.value || passwordConfirm.value === "") {
    // on affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    // créer un <li></li> dans le html
    let err = document.createElement("li");
    err.innerText = "Les deux mots de passe doivent être identiques.";
    // on ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }

  // arrivé ici, tous les checks sont passés

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    psesudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

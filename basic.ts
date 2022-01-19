const person: {
  name: string;
  age: number;
  data: [string, number, boolean, string[]];
  hobbies: string[];

  voiture: {
    roue: number;
    marque: string;
    plaque: string;
  };
} = {
  name: "Zinedine",
  age: 23,
  data: ["test", 123, false, ["test"]],
  hobbies: ["foot", "tv", "video games"],
  voiture: {
    roue: 4,
    marque: "BMW",
    plaque: "AA-216-BT",
  },
};

console.log(person.name);
console.log(person.voiture);

for (const hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase());
}

// ENUM
enum Role {
  ADMIN,
  USER,
  SUPER_ADMIN,
}

const person2 = {
  name: "Zinedine",
  role: Role.SUPER_ADMIN,
};

console.log(person2);

const user: {
  firstName: string;
  lastName?: string /* Le ? désigne que le paramètre n'est pas obligatoire et ne renverra pas d'erreur si il n'y en pas */;
} = {
  firstName: "Zinedine",
};

// Le type void signifie qu'on vas retouné une valeur qu'on va pas utiliser
const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {
  return;
};

// Déclaration du retour d'une fonction classique
const tb: Function = (e: string): string => {
  return "Hello World";
};

// Assertion de type
const count = document.getElementById("app") as HTMLElement;

// Ici le ? va signifier qu'on vas utiliser addEventListener que si count existe
count?.addEventListener("click", () => {
  return "prout !!!";
});

// Une autre manière de l'écrire
const count1 = <HTMLElement>document.getElementById("app");

// UNION TYPE => on l'utilise lorsqu'une valeur attend soit un type ou un autre
let union: string | number;

const unionFunc = (e: string | number | boolean) => {
  return e;
};

console.log(unionFunc(false));

// NARROWING => Principe utiliser par typescript pour éliminé les cas et réduire les types possibles pour une variable, function ou autre

// Alias et Generics

// On crée un Type User qui sera assignable a nos variables
type User = {
  firstName: String;
  lastName: String;
  role: String;
  age: Number | String;
};

const utilisateur: User = {
  firstName: "Zizou",
  lastName: "Ferrouk",
  role: "Admin",
  age: 51,
};

console.log(utilisateur);

// GENERICS
function test<TestType>(params: TestType): TestType {
  return params;
}

console.log(test<number>(27));
console.log(test<string>("TEST DE GENERICS"));

type Identity<Type> = (arg: Type) => Type;

// On peut accéder à une valeur native d'un élément qu'on va passer en parametre en extends de son composant
// Ici on extends de la propriete length native des Array
function getSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

getSize([6, "test"]);

// On peut avoir la possibilité qu'un type dépende d'un autre
// Ici
type SuperUser = keyof User;
type Admin = keyof User['role'];

const user5: SuperUser = {
  firstName: "Abdel",
  lastName: "Majid",
  role: "Admin",
  age: 51,
};

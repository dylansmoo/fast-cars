const cars = [
    {
        wheels: 4,
        engine: "Electric",
        doors: "5",
        make: "Tesla",
        model: "Model S Plaid",
        zeroToHundred: 2.1,
        image: "./car_images/model_S_plaid.png"
    },
    {
        wheels: 4,
        engine: "Electric",
        doors: "2",
        make: "Rimac",
        model: "Nevera",
        zeroToHundred: 1.9,
        image: "./car_images/Rimac-Nevera.png"
    },
    {
        wheels: 4,
        engine: "V8",
        doors: "2",
        make: "Bugatti",
        model: "Chiron Super Sport",
        zeroToHundred: 2.3,
        image: "./car_images/bugatti.png"
    },
    {
        wheels: 4,
        engine: "Electric",
        doors: "4",
        make: "Porsche",
        model: "Taycan Turbo S",
        zeroToHundred: 2.8,
        image: "./car_images/Porsche-Taycan-Transparent-Free-PNG.png"
    },
    {
        wheels: 4,
        engine: "V10",
        doors: "2",
        make: "Lamborghini",
        model: "Huracán Evo",
        zeroToHundred: 2.9,
        image: "./car_images/lambo.png"
    },
    {
        wheels: 4,
        engine: "V8",
        doors: "2",
        make: "Ferrari",
        model: "SF90 Stradale",
        zeroToHundred: 2.5,
        image: "./car_images/Ferrari-SF90-Stradale-PNG-Free-Download.png"
    },
    {
        wheels: 4,
        engine: "Electric",
        doors: "4",
        make: "Lucid",
        model: "Air Sapphire",
        zeroToHundred: 1.89,
        image: "./car_images/Lucid-Sapphire.png"
    },
    {
        wheels: 4,
        engine: "V8",
        doors: "2",
        make: "McLaren",
        model: "765LT",
        zeroToHundred: 2.8,
        image: "./car_images/PW-2.png"
    },
    {
        wheels: 4,
        engine: "Electric",
        doors: "4",
        make: "Tesla",
        model: "Model X Plaid",
        zeroToHundred: 2.5,
        image: "./car_images/Tesla-Model-X-PNG-Transparent-Image.png"
    },
    {
        wheels: 4,
        engine: "V6",
        doors: "2",
        make: "Nissan",
        model: "GT-R Nismo",
        zeroToHundred: 2.7,
        image: "./car_images/gtr.png"
    },
    {
        wheels: 4,
        engine: "Electric",
        doors: "2",
        make: "Aspark",
        model: "Owl",
        zeroToHundred: 1.7,
        image: "./car_images/owl.png"
    },
    {
        wheels: 4,
        engine: "V8",
        doors: "2",
        make: "Chevrolet",
        model: "Camaro ZL1",
        zeroToHundred: 3.5,
        image: "./car_images/Chevrolet-Camaro.png"
    }
];

for (let car of cars) {
    const card = document.createElement("div");
    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(card)
    
    // const carImage = car.image;
    // carImage.classList.add("bg-image");

    // card.style.backgroundImage = `url(${car.image})`;
    card.style.setProperty("--bg-image", `url(${car.image}`)

    const make = document.createElement("h2");
    make.textContent = car.make;
    card.appendChild(make);
    card.classList.add("card")

    const model = document.createElement("h3");
    model.textContent = car.model;
    card.appendChild(model);

    const features = document.createElement("ul");
    features.textContent = "Features";
    card.appendChild(features);
    features.classList.add("features")

    const wheels = document.createElement("li");
    wheels.textContent = "Wheels: " + car.wheels;
    features.appendChild(wheels);

    const engine = document.createElement("li");
    engine.textContent = "Engine: " + car.engine;
    features.appendChild(engine);

    const doors = document.createElement("li");
    doors.textContent = "Doors: " + car.doors;
    features.appendChild(doors);

    const speed = document.createElement("li");
    speed.textContent = "0 - 100km/h: " + car.zeroToHundred + " seconds";
    features.appendChild(speed);
}

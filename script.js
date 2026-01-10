const cardsContainer = document.getElementsByClassName("items-container")[0]

const cards = [
    {
        imgSrc: "images/soccer-ball.jpg",
        title: "Soccer ball",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa delectus explicabo placeat ab nihil. Deserunt, minus fuga.",
        amount: 5,
        timetable: "25.1. - 25.2."
    },
    {
        imgSrc: "images/basketball-ball.avif",
        title: "Basketball",
        description: "Durable basketball suitable for indoor and outdoor courts.",
        amount: 8,
        timetable: "1.2. - 1.3."
    },
    {
        imgSrc: "images/tennis-racket.png",
        title: "Tennis racket",
        description: "Lightweight racket for beginners and intermediate players.",
        amount: 4,
        timetable: "10.2. - 10.3."
    },
    {
        imgSrc: "images/tennis-ball.png",
        title: "Tennis balls",
        description: "Set of high-quality tennis balls for training and matches.",
        amount: 20,
        timetable: "5.2. - 5.4."
    },
    {
        imgSrc: "images/volleyball-ball.jpg",
        title: "Volleyball",
        description: "Soft-touch volleyball ideal for school and club use.",
        amount: 6,
        timetable: "12.2. - 12.3."
    },
    {
        imgSrc: "images/badminton-racket.webp",
        title: "Badminton racket",
        description: "Carbon frame racket for fast and precise shots.",
        amount: 10,
        timetable: "15.2. - 15.4."
    },
    {
        imgSrc: "images/shuttlecock.jpg",
        title: "Shuttlecocks",
        description: "Pack of durable shuttlecocks for regular training.",
        amount: 30,
        timetable: "15.2. - 30.4."
    },
    {
        imgSrc: "images/baseball-bat.webp",
        title: "Baseball bat",
        description: "Aluminium bat suitable for beginners.",
        amount: 3,
        timetable: "20.2. - 20.3."
    },
    {
        imgSrc: "images/baseball-glove.jpg",
        title: "Baseball glove",
        description: "Comfortable glove for training and matches.",
        amount: 5,
        timetable: "20.2. - 20.4."
    },
    {
        imgSrc: "images/boxing-gloves.jpg",
        title: "Boxing gloves",
        description: "Padded gloves for safe boxing training.",
        amount: 7,
        timetable: "1.3. - 1.5."
    },
    {
        imgSrc: "images/skipping-rope.avif",
        title: "Skipping rope",
        description: "Adjustable rope for cardio and conditioning.",
        amount: 15,
        timetable: "1.2. - 30.4."
    },
    {
        imgSrc: "images/yoga-mat.jpg",
        title: "Yoga mat",
        description: "Non-slip mat for yoga, pilates and stretching.",
        amount: 12,
        timetable: "5.2. - 5.5."
    },
    {
        imgSrc: "images/dumbbells.webp",
        title: "Dumbbells",
        description: "Set of dumbbells for strength training.",
        amount: 10,
        timetable: "10.2. - 10.6."
    },
    {
        imgSrc: "images/kettlebell.jpg",
        title: "Kettlebell",
        description: "Cast iron kettlebell for functional workouts.",
        amount: 6,
        timetable: "10.2. - 10.6."
    },
    {
        imgSrc: "images/resistance-band.webp",
        title: "Resistance band",
        description: "Elastic band for rehabilitation and fitness.",
        amount: 25,
        timetable: "1.2. - 1.6."
    },
    {
        imgSrc: "images/hockey-stick.webp",
        title: "Hockey stick",
        description: "Durable hockey stick for recreational play.",
        amount: 5,
        timetable: "15.2. - 15.3."
    },
    {
        imgSrc: "images/pingpong-paddle.webp",
        title: "Table tennis paddle",
        description: "Paddle with good grip for beginners.",
        amount: 12,
        timetable: "20.2. - 20.4."
    },
    {
        imgSrc: "images/pingpong-ball.webp",
        title: "Table tennis balls",
        description: "Set of table tennis balls for training.",
        amount: 50,
        timetable: "20.2. - 20.5."
    },
    {
        imgSrc: "images/swimming-goggles.webp",
        title: "Swimming goggles",
        description: "Anti-fog goggles for comfortable swimming.",
        amount: 14,
        timetable: "1.3. - 1.6."
    },
    {
        imgSrc: "images/swim-cap.jpg",
        title: "Swim cap",
        description: "Silicone swim cap for pool training.",
        amount: 20,
        timetable: "1.3. - 1.6."
    },
    {
        imgSrc: "images/running-cones.jpg",
        title: "Training cones",
        description: "Plastic cones for drills and agility training.",
        amount: 30,
        timetable: "5.2. - 5.7."
    }
];


for (let card of cards) {
    const cardHTML = `
    <div class="card">
        <img src="${card.imgSrc}">
        <div>
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <br>
            <p><span>Available amounts: </span>${card.amount}</p>
            <p><span>Date: </span>${card.timetable}</p>
        </div>
    </div>
    `

    cardsContainer.innerHTML += cardHTML
}
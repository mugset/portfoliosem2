// Define the content for each proof
const proofContent = {
    1: {
        header: "Proof 1: Inspiratie Portfolio",
        text: "Voor mijn portfolio ben ik begonnen met het opdoen van inspiratie. Dit heb ik gedaan door verschillende websites te bekijken waarop veel creatieve portfolio’s te vinden zijn, zoals: Awwwards Dribbble Behance Op deze platforms heb ik veel verschillende stijlen en ideeën gezien. Uiteindelijk heb ik hier twee duidelijke richtingen uit gehaald voor mijn eigen portfolio. Idee 1: Minecraft Website  Mijn eerste idee was om een interactieve, scrollbare 3D-website te maken met als thema Minecraft. Ik wilde hierbij gebruik maken van Three.js om een 3D-ervaring te creëren. Deze inspiratie kwam vooral door het portfolio van Andrew Woan, die een indrukwekkende Minecraft-stijl portfolio heeft gemaakt: Andrew Woan’s Portfolio. Het idee sprak mij erg aan, vooral omdat ik geïnteresseerd ben in 3D en interactieve websites. Toch heb ik besloten dit idee niet uit te voeren. Omdat ik momenteel nog in het tweede semester zit en nog geen ervaring heb met Three.js, leek dit plan iets te ambitieus voor nu. Idee 2: Marvel Rivals Themed Website Mijn tweede idee was om een Marvel Rivals themed website te maken. Deze game sprak mij erg aan omdat ik het zelf speel en ik de visuele stijl en kleuren heel mooi vind. Hoewel ik geen bestaande portfolio’s kon vinden die gebaseerd zijn op games zoals deze, vond ik het een cool concept om zelf uit te werken. Voor dit idee heb ik gekeken naar de stijl van Marvel Rivals zelf: de kleuren, typografie en algemene uitstraling. Ik vond dit idee niet alleen creatief, maar ook realistischer om uit te voeren binnen mijn huidige niveau. Daarom heb ik ervoor gekozen om verder te gaan met dit idee. Conclusie Mijn uiteindelijke keuze is gevallen op het Marvel Rivals concept. Dit past goed bij mijn interesses, is visueel sterk en technisch haalbaar. Op basis van deze inspiratie ben ik begonnen met het ontwerpen en opbouwen van mijn eigen themed website. "
    },
    2: {
        header: "Proof 2: User Testing",
        text: "This is the content for Proof 2. Replace this with your actual content."
    },
    3: {
        header: "Proof 3: Design Process",
        text: "This is the content for Proof 3. Replace this with your actual content."
    },
    4: {
        header: "Proof 4: Implementation",
        text: "This is the content for Proof 4. Replace this with your actual content."
    },
    5: {
        header: "Proof 5: Evaluation",
        text: "This is the content for Proof 5. Replace this with your actual content."
    },
    6: {
        header: "Proof 6: Documentation",
        text: "This is the content for Proof 6. Replace this with your actual content."
    },
    7: {
        header: "Proof 7: Reflection",
        text: "This is the content for Proof 7. Replace this with your actual content."
    }
};

// Store the default content
const defaultContent = {
    header: "Interactive Media Products",
    text: `<h1>You orient in the relevant tech, 
    media and design landscape and create interactive media products that you have 
    tested with users and stakeholders.</h1>
    <br><br>

    <h1>Orient :</h1> This can be done in different ways by doing research on new technologies from library (literature, experts)
    but also by trying different techniques for your project.
    <br><br>
    <h1>Relevant tech, media and design landscape :</h1> This refers to the current and influential trends, 
    tools, platforms, and practices within technology, media production, and design. 
    It's about being informed what's fresh, what's fading out, 
    and what tools or methods are best for creating and sharing content.
    <br><br>
    <h1>Interactive Media Products :</h1> Think of interactive media products as either advanced prototypes or proofs of concept
    (POCs). They start in design software like Figma, where they're crafted into clickable, interactive prototypes. 
    These are essentially detailed simulations of the final product, allowing designers and stakeholders to explore 
    how it'll work before any serious coding starts. These prototypes can often be quite sophisticated, giving a very 
    real feel for the user experience without being fully built out. So, an interactive media product can be this 
    rich prototype itself or evolve into a fully coded POC, serving as a tangible example of what the final version 
    aims to be.
    <br><br>
    <h1>Tested with users and stakeholders :</h1> Before you release your interactive product into the wild, 
    you gotta make sure it's user-friendly and fulfilling its purpose. 
    This means putting your product in the hands of actual users 
    (and those with a stake in its success) and watching how they use it, gathering feedback, 
    and refining the product based on their experiences. It ensures that the final product isn't just visionary
    , but also practical and enjoyable to use.`
};

// Add click event listeners to all proof elements
document.addEventListener('DOMContentLoaded', function() {
    const proofElements = document.querySelectorAll('.proof');
    const headerMain = document.getElementById('header-main');
    const textMain = document.getElementById('text-main');
    const titleBox = document.querySelector('.title-box');

    // Function to reset to default content
    function resetToDefault() {
        headerMain.textContent = defaultContent.header;
        textMain.innerHTML = defaultContent.text;
        proofElements.forEach(p => p.classList.remove('active'));
    }

    // Add click event to title box
    titleBox.addEventListener('click', resetToDefault);

    proofElements.forEach(proof => {
        proof.addEventListener('click', function() {
            const proofNumber = this.getAttribute('data-proof');
            const content = proofContent[proofNumber];

            // Update the header and text content
            headerMain.textContent = content.header;
            textMain.innerHTML = content.text;

            // Remove active class from all proofs
            proofElements.forEach(p => p.classList.remove('active'));
            // Add active class to clicked proof
            this.classList.add('active');
        });
    });
});

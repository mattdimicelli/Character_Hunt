/* eslint-disable default-case */
const universe113MapArea = [
    {
        // Jonny Bravo
        width: "3.5839420513515052%",
        height: "3.508771929824562%",
        left: "37.14598495594771%",
        top: "34.3653250773994%",
    },
    {
        // Cat Dog
        width: "2.4817518248175183%",
        height: "2.8895768833849327%",
        left: "30.284671087334626%",
        top: "45.09803921568628%",
    },
    {
        // Bender
        width: "1.6058394160583942%",
        height: "1.4447884416924663%",
        left: "90.13868568587478%",
        top: "69.65944272445822%",
    },
    {
        // Predator
        width: "4.233576642335766%",
        height: "3.0959752321981426%",
        left: "57.729926561787195%",
        top: "83.69453044375645%",
    }
];

function onUniverse113MapClick(setTargetCharClicked, area, index) {
    switch (index) {
        case 0: 
            setTargetCharClicked('Johnny Bravo');
            break;
        case 1: 
            setTargetCharClicked('CatDog');
            break;
        case 2: 
            setTargetCharClicked('Bender Rodriguez');
            break;
        case 3:
            setTargetCharClicked('Yautja');
            break;
    }
}

export { universe113MapArea, onUniverse113MapClick} ;
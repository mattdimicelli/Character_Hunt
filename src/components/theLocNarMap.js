/* eslint-disable default-case */

const theLocNarMapArea = [
    {
        //Link
        width: "4.087591240875913%",
        height: "0.9702009702009702%",
        left: "20.941605393903973%",
        top: "95.18364518364518%"
    },
    {
        //Rocko Rama
        width: "2.9197080291970803%",
        height: "0.796950796950797%",
        left: "2.693430211422219%",
        top: "90.71379071379071%"
    },
    {
        //Batman
        width: "3.5036496350364965%",
        height: "0.8316008316008316%",
        left: "9.554744080035356%",
        top: "67.32501732501733%"
    },
    {
        //Worm
        width: "2.0437956204379564%",
        height: "0.5544005544005544%",
        left: "16.124087145728787%",
        top:"80.73458073458073%"
    }
];

function onTheLocNarMapClick(setTargetCharClicked, area, index) {
    switch (index) {
        case 0: 
            setTargetCharClicked('Link');
            break;
        case 1: 
            setTargetCharClicked('Rocko Rama');
            break;
        case 2: 
            setTargetCharClicked('Batman');
            break;
        case 3:
            setTargetCharClicked('Worm');
            break;
    }
}

export { theLocNarMapArea, onTheLocNarMapClick };
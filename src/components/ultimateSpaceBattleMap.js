/* eslint-disable default-case */
const ultimateSpaceBattleMapArea = [
    {
        // Bugs Bunny
        width: "1.4598540145985401%",
        height: "2.066115702479339%",
        left: "51.74452510193317%",
        top: "84.29752066115702%"
    },
    {
        // Martian
        width: "2.18978102189781%",
        height: "2.272727272727273%",
        left: "83.13138641580179%",
        top: "58.47107438016529%"
    },
    {
        // Thomas the Tank Engine
        width: "1.897810218978102%",
        height: "3.0991735537190084%",
        left: "34.51824772967039%",
        top: "42.768595041322314%"
    },
    {
        // Ryuk
        width: "3.795620437956204%",
        height: "4.75206611570248%",
        left: "1.8175178026630983%",
        top: "43.595041322314046%"
    }
];

function onUltimateSpaceBattleMapClick(setTargetCharClicked, area, index) {
    switch (index) {
        case 0: 
            setTargetCharClicked('Bugs Bunny');
            break;
        case 1: 
            setTargetCharClicked('Martian');
            break;
        case 2: 
            setTargetCharClicked('Thomas the Tank Engine');
            break;
        case 3:
            setTargetCharClicked('Ryuk');
            break;
    }
}

export { onUltimateSpaceBattleMapClick, ultimateSpaceBattleMapArea };



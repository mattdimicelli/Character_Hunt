const ultimateSpaceBattleMapArea = [
    {
        // Bugs Bunny
        width: "1.4598540145985401%",
        height: "2.066115702479339%",
        left: "51.74452510193317%",
        top: "84.29752066115702%"
    },
    {

        width: "2.18978102189781%",
        height: "2.272727272727273%",
        left: "83.13138641580179%",
        top: "58.47107438016529%"
    },
    {
        width: "1.897810218978102%",
        height: "3.0991735537190084%",
        left: "34.51824772967039%",
        top: "42.768595041322314%"
    },
    {
        
        width: "3.795620437956204%",
        height: "4.75206611570248%",
        left: "1.8175178026630983%",
        top: "43.595041322314046%"
    }
];

function onUltimateSpaceBattleMapClick(area, index) {
    let char;
    switch (index) {
        case 0: 
            char = 'Bugs Bunny';
            break;
        case 1: 
            char = '1';
            break;
        case 2: 
            char = '2';
            break;
        case 3:
            char = '3';
            break;
        default:
            char = 'None';
    }
    console.log(char);  
}

export { onUltimateSpaceBattleMapClick, ultimateSpaceBattleMapArea };



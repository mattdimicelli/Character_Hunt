import universe_113 from '../images/universe_113.jpg';
import ImageMap from 'image-map';

const universeStyles = {
    width: '100vw',
};

ImageMap('img[usemap]', 500);

const Map = () => {
    return (
        <div>
            <img id="universe-113" src={universe_113} useMap="#universe-113" 
            alt="universe map for gameplay" style={universeStyles} />
            <map name="universe-113">
                <area id="bender" alt="" shape="rect" 
                coords="1734,1887,1760,1933" onClick={() => console.log('bender')} />
                <area id="martian" alt="" shape="rect" 
                coords="1119,1364,1149,1410" />
                <area id="jonny_bravo" alt="" shape="poly" 
                coords="745,1001,764,1025,783,974,772,981,760,960,749,955,741,959,739,964,735,950,728,937,722,934,714,939,709,949,718,959,726,980,732,990" 
                />
                <area id="cat_dog" alt="" shape="poly" 
                coords="604,1297,608,1292,607,1282,617,1277,620,1266,624,1255,629,1247,627,1242,626,1226,619,1228,616,1235,608,1232,601,1237,608,1259,603,1267,599,1258,594,1255,589,1258,583,1262,580,1271,587,1274,595,1291" 
                />
            </map>
        </div>
    )
}

export default Map;

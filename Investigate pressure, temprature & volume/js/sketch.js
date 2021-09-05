dev = true
if(dev == false){
	console. log = function (){}	
}
// Simulation Heading
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

const SIM_heading = "Investigate the relationships between pressure, volume and temperature for a fixed amount of gas" ;

document. title = titleCase ( SIM_heading ) ;

var MOBILE = false


//Orignal Image
var ACT_W = 2560 , ACT_H = 1440;
var imgX = 0, imgY = 0 , scl_x = 0 , scl_y = 0;
var SCL_CONST = 2.15246;
var CLICK_TIME = 100;
var y_off_const = 245;
var TIME_POPUP = 5000
// var RADIUS_SLIDER = 30.5
var RADIUS_SLIDER = 36.6
var time_move_atom = 3

// INTERVAL 
var first_interval
var second_interval

// click 
var clickInst = false;
var click_lock_p = false;
var click_lock_v = false;
var click_lock_t = false;
var click_slider_m_btn = false;
var click_slider_p_btn = false;
var click_slider_v_btn = false;
var click_slider_t_btn = false;
var click_B_law = false;
var click_G_law = false;
var click_C_law = false;
var text_popup_show = true;
// hover;
var hoverInst = false;
var hover_m_slider = false;
var hover_p_slider = false;
var hover_v_slider = false;
var hover_t_slider = false;
var hoverGbtn = false;
var hoverCbtn = false;
var hoverBbtn = false;
var hover_close = false;
var hoverReset_btn = false;

// #slider
var slider_m_val = 0;
var slider_p_val = 0;
var slider_v_val = 0;
var slider_t_val = 0;
var lock_move_slider = false;

var slider_m_val_str = 0;
var slider_p_val_str = 0;
var slider_v_val_str = 0;
var slider_t_val_str = 0;

//slider_points
var slider_m_points = [];
var slider_p_points = [];
var slider_v_points = []; 
var slider_t_points = [];

var T_val = 273;
var P_val = 1;
var V_val = 0.022698585 //0.023;
var p_needle_deg = -120;
var t_needle_deg = -120;
var current_piston = 0;
// var MAX_PISTON = -200
var MAX_PISTON = -250 
var MIN_PISTON = 40;

var amount_atom = 40
var speed = 0.009;
// range_index = 582
range_index = 560
var rotate_of_cahnge_index = 12
// var speed = 0.015;

var start_point_x1 = [];
var start_point_x2 = [];
var start_point_y1 = [];
var start_point_y2 = [];

var pipePointsX = [];
var pipePointsY = [];
var c_p_iX = 642 , c_p_iY = 856;
// 642	 , 860

pipeX_t = [614,616,618,620,622,624,626,628,630,632,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,816,817,818,819,820,821,822,823,824,825,825,826,827,828,829,830,830,830,830,831,832,833,834,835,835,836,837,837,838,839,840,840,840,841,842,843,843,843,844,845,846,847,847,848,849,849,850,851,851,851,851,852,853,853,853,854,855,856,856,856,857,858,859,859,859,859,860,861,861,861,861,862,863,863,863,864,865,865,865,866,867,868,868,868,868,868,869,870,870,870,870,870,870,870,870,870,871,871,871,871,871,872,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,874,875,875,875,875,875,875,875,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,874,875,875,875,875,875,875,876,877,877,877,878,879,879,879,879,880,881,882,882,882,882,882,882,882,882,883,884,885,885,885,885,885,886,887,887,887,887,888,889,890,891,891,891,891,891,891,891,892,893,894,894,894,895,895,895,895,896,897,898,898,898,898,899,900,900,900,901,902,903,904,905,906,907,908,908,908,909,910,911,911,911,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960]
pipeY_t = [854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,854,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,858,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,859,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,858,860,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,859,861,860,860,860,860,860,860,860,860,860,862,861,861,861,861,861,863,864,865,864,864,864,864,864,866,865,865,867,866,866,866,868,869,868,868,868,870,871,870,870,870,870,872,871,871,873,872,872,874,875,876,875,875,877,878,877,877,877,879,880,879,879,879,881,882,883,882,882,884,885,886,885,885,887,888,887,887,889,890,889,889,889,891,892,893,894,893,893,895,896,897,898,899,900,901,902,901,903,904,905,906,905,905,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1017,1017,1019,1020,1021,1022,1023,1024,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1056,1056,1058,1059,1060,1061,1062,1061,1061,1063,1064,1063,1063,1065,1066,1067,1066,1066,1066,1068,1069,1070,1071,1072,1073,1074,1073,1073,1073,1075,1076,1077,1078,1077,1077,1079,1080,1081,1080,1080,1080,1080,1082,1083,1084,1085,1086,1087,1086,1086,1086,1088,1089,1088,1090,1091,1092,1091,1091,1091,1093,1094,1095,1094,1094,1096,1097,1096,1096,1096,1096,1096,1096,1096,1096,1098,1099,1098,1098,1098,1100,1101,1102,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101]
pipeX = [];
pipeY = []
console. log(pipeX_t. length ,pipeY_t. length)

// pipeX = [643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,785,785,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,821,821,821,822,823,824,825,826,827,828,829,830,830,830,831,832,833,834,835,836,837,838,839,839,839,839,840,841,842,843,844,845,845,845,845,846,847,848,848,848,848,849,850,851,851,851,851,852,853,853,853,853,854,855,856,857,858,859,859,859,860,861,862,862,862,862,862,862,862,863,864,865,865,865,865,865,866,866,866,866,866,867,868,869,869,869,869,870,871,872,873,873,873,873,873,874,875,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,876,877,878,878,878,878,878,878,878,878,878,878,878,878,879,880,880,880,880,880,880,881,882,883,883,883,883,883,884,885,886,886,886,886,886,886,886,886,886,887,888,889,889,889,890,891,891,891,891,892,893,894,894,894,894,895,896,897,898,899,899,899,900,901,902,902,902,902,903,904,905,905,905,905,906,907,908,909,910,911,911,912,913,914,915,916,917,918,918,918,919,920,921,922,923,924,925,926,927,928,929,930,931,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968]
// pipeY = [856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,856,858,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,857,859,860,861,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,860,862,863,864,863,863,863,863,863,863,863,863,863,865,866,865,865,865,865,865,865,865,865,865,867,868,869,868,868,868,868,868,868,870,871,872,871,871,871,873,874,875,874,874,874,876,877,878,877,877,879,880,881,880,880,880,880,880,880,882,883,882,882,882,884,885,886,887,888,889,888,888,888,890,891,892,893,892,894,895,896,897,896,896,896,898,899,900,899,899,899,899,901,902,903,904,903,903,903,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1052,1052,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1063,1063,1065,1066,1067,1068,1069,1068,1068,1068,1070,1071,1072,1073,1072,1072,1072,1074,1075,1076,1077,1078,1079,1080,1081,1080,1080,1080,1082,1083,1082,1082,1084,1085,1086,1085,1085,1085,1087,1088,1089,1088,1088,1088,1088,1088,1090,1091,1090,1090,1090,1092,1093,1094,1093,1093,1093,1095,1096,1097,1096,1096,1096,1096,1096,1096,1098,1097,1097,1097,1097,1097,1097,1097,1099,1100,1099,1099,1099,1099,1099,1099,1099,1099,1099,1099,1099,1099,1099,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101,1101]
// range_index = 571

// pipeX = [860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,1756,1757,1758,1759,1760,1761,1762,1763,1764,1765,1766,1767,1768,1769,1770,1771,1772,1773,1774,1775,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1806,1807,1808,1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,1853,1854,1855,1856,1857,1858,1859]
// pipeY = [649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649,649]
// range_index = 500
InPipe= [];
InGlass = [];
Atom_current_index = [];
amount_atom_in_pipe = 0
amount_atom_in_glass = 0

var move_direction = "bottel->glass"
// Atom_current_x = [];
// Flag
var lock_flag = false;
var pop =  setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP); //reset time 
//instruction scl
ori_instclose_x = 1550, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;


function setup(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    console. log("okay")
	    MOBILE = true;
	    speed = 0.015
	    rotate_of_cahnge_index = 15
	    // mousePressed =  function touchStarted();
	    // mouseReleased = function  touchEnded	
	}
	
	for(i = 0 ; i < range_index ; i++){
		// pipeX[i] = pipeX_t. pop()
		// pipeY[i] = pipeY_t. pop()
		pipeX[i] = pipeX_t[range_index - i]
		pipeY[i] = pipeY_t[range_index - i]
	}
	cnv = createCanvas( windowWidth , windowHeight);
	// cnv. style("z-index" , "5")
	Scaling();

	bg = loadImage("img/BG_EDU.png");
	// bg2 = loadImage("img/Bg1.png")

	fontRobotMedian=loadFont("font/Roboto-Medium.ttf");
	fontRobotoLit=loadFont("font/Roboto-Light.ttf");
	fontLatoBold=loadFont("font/Lato-Bold.ttf");
	fontLatoReg=loadFont("font/Lato-Regular.ttf");

	setTimeout( function (){
		text_popup_show = false
	} , TIME_POPUP)

	blue_line_1 = createDiv();
	blue_line_1. style("background-color" , "rgb(0 , 160 , 221)");
	blue_line_1. hide();

	blue_line_2 = createDiv();
	blue_line_2. style("background-color" , "rgb(0 , 160 , 221)");
	blue_line_2. hide();

	show_in_div_atom = createDiv();
	show_in_div_atom. style("overflow" , "hidden");
	show_in_div_atom. hide();

	contain_img = createDiv("");
	contain_img. style("background-image" , "url('img/mainbg.png')");
	contain_img. style("background-repeat" , "none");
	contain_img. hide();

	SLIDER_P = createDiv("");
	SLIDER_P. hide();
	SLIDER_V = createDiv("");
	SLIDER_V. hide();
	SLIDER_T = createDiv("");
	SLIDER_T. hide();

	// reset_btn;
	reset_btn = createDiv("");
	reset_btn. style("background-image" , "url('img/reset.png')");
	reset_btn. style("background-repeat" , "none");
	reset_btn. style("z-index" , "1");
	reset_btn. hide();

	// slider scl
	slider_m_scl = createDiv("");
	slider_m_scl. id("slider_m_scl");
	slider_m_scl. style("background-image" , "url('img/scale_1.png')");
	slider_m_scl. style("background-repeat" , "none");
	slider_m_scl. style("pointer-events" , "none");
	slider_m_scl. hide();

	slider_p_scl = createDiv("");
	slider_p_scl. parent(SLIDER_P);
	slider_p_scl. id("slider_p_scl");
	slider_p_scl. style("background-image" , "url('img/Updated elements/scale_2.png')");
	slider_p_scl. style("background-repeat" , "none");
	slider_p_scl. style("pointer-events" , "none");
	slider_p_scl. hide();

	slider_v_scl = createDiv("");
	slider_v_scl. id("slider_v_scl");
	slider_v_scl. parent(SLIDER_V);
	slider_v_scl. style("background-image" , "url('img/scale_3.png')");
	slider_v_scl. style("background-repeat" , "none");
	slider_v_scl. style("pointer-events" , "none");
	slider_v_scl. hide();

	slider_t_scl = createDiv("");
	slider_t_scl. parent(SLIDER_T);
	slider_t_scl. id("slider_t_scl");
	slider_t_scl. style("background-image" , "url('img/Updated elements/scale_4.png')");
	slider_t_scl. style("background-repeat" , "none");
	slider_t_scl. style("pointer-events" , "none");
	slider_t_scl. hide();

	//Range slider
	slider_m = createDiv("")
	slider_m. id("slider_m");
	slider_m. style("background-image" , "url('img/sliderbtns/slider_1.png')");
	slider_m. style("background-repeat" , "none");
	slider_m. hide();

	slider_p_w = createDiv("")  //slider default #in this part user not clik this part 
	slider_p_w. id("slider_p_w");
	slider_p_w. parent(SLIDER_P);
	slider_p_w. style("background-image" , "url('img/sliderbtns/slider_2.png')");
	slider_p_w. style("background-repeat" , "none");
	slider_p_w. hide();

	slider_p_b = createDiv("")  //user only slide in range
	slider_p_b. parent(SLIDER_P);
	slider_p_b. id("slider_p_b");
	slider_p_b. style("background-image" , "linear-gradient(rgb(25 , 25 , 25) , rgb(107 , 107 , 107))");
	slider_p_b. style("background-repeat" , "none");
	slider_p_b. hide();

	slider_v_w = createDiv("")  //slider default #in this part user not clik this part 
	slider_v_w. id("slider_v_w");
	slider_v_w. parent(SLIDER_V);
	slider_v_w. style("background-image" , "url('img/sliderbtns/slider_2.png')");
	slider_v_w. style("background-repeat" , "none");
	slider_v_w. hide();

	slider_v_b = createDiv("")  //user only slide in range
	slider_v_b. id("slider_v_b");
	slider_v_b. parent(SLIDER_V);
	slider_v_b. style("background-image" , "linear-gradient(rgb(25 , 25 , 25) , rgb(107 , 107 , 107))");
	slider_v_b. style("background-repeat" , "none");
	slider_v_b. hide(); 

	slider_t_w = createDiv("")  //slider default #in this part user not clik this part 
	slider_t_w. id("slider_t_w");
	slider_t_w. parent(SLIDER_T);
	slider_t_w. style("background-image" , "url('img/sliderbtns/slider_2.png')");
	slider_t_w. style("background-repeat" , "none");
	slider_t_w. hide();

	slider_t_b = createDiv("")  //user only slide in range
	slider_t_b. id("slider_t_b");
	slider_t_b. parent(SLIDER_T);
	slider_t_b. style("background-image" , "linear-gradient(rgb(25 , 25 , 25) , rgb(107 , 107 , 107))");
	slider_t_b. style("background-repeat" , "none");
	slider_t_b. hide();

	// Slider Btn
	slider_m_btn = createDiv("");
	slider_m_btn. id("slider_m_btn");
	slider_m_btn. style("background-image" , "url('img/sliderbtns/green_button.png')");
	slider_m_btn. style("background-repeat" , "none");
	slider_m_btn. hide();
	
	slider_p_btn = createDiv("");
	// slider_p_btn. parent(SLIDER_P);
	// slider_p_btn. style("opacity" , "2")
	slider_p_btn. id("slider_p_btn");
	slider_p_btn. style("background-image" , "url('img/sliderbtns/yellow_button.png')");
	slider_p_btn. style("background-repeat" , "none");
	slider_p_btn. hide();
	
	slider_v_btn = createDiv("");
	slider_v_btn. id("slider_v_btn");
	// slider_v_btn. parent(SLIDER_V);
	slider_v_btn. style("background-image" , "url('img/sliderbtns/blue_button.png')");
	slider_v_btn. style("background-repeat" , "none");
	slider_v_btn. hide();

	slider_t_btn = createDiv("");
	// slider_t_btn. parent(SLIDER_T);
	slider_t_btn. id("slider_t_btn");
	slider_t_btn. style("background-image" , "url('img/sliderbtns/ornge_button.png')");
	slider_t_btn. style("background-repeat" , "none");
	slider_t_btn. hide();


	// Lock_btn
	lock_p_btn = createDiv("");
	lock_p_btn. id("lock_p_btn");
	lock_p_btn. style("background-image" , "url('img/unlock.png')");
	// lock_p_btn. style("opacity" , "0.5");
	lock_p_btn. style("cursor" , "pointer")
	lock_p_btn. style("background-repeat" , "none");
	lock_p_btn. hide();
	
	lock_v_btn = createDiv("");
	lock_v_btn. id("lock_v_btn");
	lock_v_btn. style("background-image" , "url('img/unlock.png')");
	lock_v_btn. style("background-repeat" , "none");
	// lock_v_btn. style("opacity" , "0.5");
	lock_v_btn. style("cursor" , "pointer")
	lock_v_btn. hide();

	lock_t_btn = createDiv("");
	lock_t_btn. id("lock_t_btn");
	lock_t_btn. style("background-image" , "url('img/unlock.png')");
	// lock_t_btn. style("opacity" , "0.5");
	lock_t_btn. style("cursor" , "pointer")
	lock_t_btn. style("background-repeat" , "none");
	lock_t_btn. hide();

	// Laws
	B_law_btn = createDiv("");
	B_law_btn. id("B_law_btn");
	B_law_btn. style("background-image" , "url('img/law/B_Law_button.png')");
	B_law_btn. style("background-repeat" , "none");
	B_law_btn. hide();

	B_law_png = createDiv("");
	B_law_png. id("B_law_png");
	B_law_png. style("background-image" , "url('img/law/BoylesLaw.png')");
	B_law_png. style("z-index" , "8")
	B_law_png. style("background-repeat" , "none");
	B_law_png. hide();

	C_law_btn = createDiv("");
	C_law_btn. id("C_law_btn");
	C_law_btn. style("background-image" , "url('img/law/C_Law_button.png')");
	C_law_btn. style("background-repeat" , "none");
	C_law_btn. hide();

	C_law_png = createDiv("");
	C_law_png. id("C_law_png");
	C_law_png. style("background-image" , "url('img/law/charlesLaw.png')");
	C_law_png. style("z-index" , "8")
	C_law_png. style("background-repeat" , "none");
	C_law_png. hide();
	
	G_law_btn = createDiv("");
	G_law_btn. id("G_law_btn");
	G_law_btn. style("background-image" , "url('img/law/G_Law_button.png')");
	G_law_btn. style("background-repeat" , "none");
	G_law_btn. hide();

	G_law_png = createDiv("");
	G_law_png. id("G_law_png");
	G_law_png. style("background-image" , "url('img/law/guyLussacLaw.png')");
	G_law_png. style("z-index" , "8")
	G_law_png. style("background-repeat" , "none");
	G_law_png. hide();

	law_img_close_btn = createDiv("");
	law_img_close_btn. id("law_img_close_btn");
	law_img_close_btn. style("background-image" , "url('img/close.png')");
	law_img_close_btn. style("z-index" , "8")
	law_img_close_btn. style("background-repeat" , "none");
	law_img_close_btn. hide();

	// INPUT BOX
	box_m = createDiv("");
	box_m. style("text-align" , "right");
	box_m. style("line-height" , "1.3");
	box_m. hide();

	box_p = createDiv("");
	box_p. style("text-align" , "right");
	box_p. style("line-height" , "1.15");
	box_p. hide();
	box_v = createDiv("");
	box_v. style("text-align" , "right");
	box_v. style("line-height" , "1.3");
	box_v. hide();
	box_t = createDiv("");
	box_t. style("text-align" , "right");
	box_t. style("line-height" , "1.3");
	box_t. hide();

	constant_highlighter = createDiv("");
	constant_highlighter. style("background-color" , "rgb(255 , 111 , 111)");
	constant_highlighter. hide();

	// error
	text_popup = createDiv("");
	text_popup. id("text_popup");
	text_popup. style("background-image" , "url('img/textPopu_ref.png')");
	text_popup. style("z-index" , "8")
	text_popup. style("background-repeat" , "none");
	text_popup. hide();

	text_popup_close = createDiv("");
	text_popup_close. id("text_popup_close");
	text_popup_close. style("background-image" , "url('img/close.png')");
	text_popup_close. style("z-index" , "8")
	text_popup_close. style("background-repeat" , "none");
	text_popup_close. hide();

	//PIPE PNG 
	pipe_png = createDiv("");
	pipe_png. id("pipe_png");
	pipe_png. style("background-image" , "url('img/Updated elements/pipe.png')");
	pipe_png. style("z-index" , "3")
	pipe_png. style("background-repeat" , "none");
	pipe_png. hide();

	// Component
	glass_cup = createDiv("");
	glass_cup. id("glass_cup");
	glass_cup. style("background-image" , "url('img/cont_2.png')");
	glass_cup. style("background-repeat" , "none");
	glass_cup. hide();

	glass_cup_shadow = createDiv("");
	glass_cup_shadow. id("glass_cup_shadow");
	glass_cup_shadow. style("background-image" , "url('img/cont_2.png')");
	glass_cup_shadow. style("background-repeat" , "none");
	glass_cup_shadow. style("z-index" , "2")
	glass_cup_shadow. hide();

	glass_top = createDiv("");
	glass_top. id("glass_top");
	glass_top. style("background-image" , "url('img/container_1.png')");
	glass_top. style("background-repeat" , "none");
	glass_top. style("z-index" , "2")
	glass_top. hide();

	piston = createDiv("");
	piston. id("piston");
	piston. parent(contain_img)
	piston. style("z-index" , "2")
	piston. style("background-image" , "url('img/disc.png')");
	piston. style("background-repeat" , "none");
	piston. hide();

	t_meter = createDiv("");
	t_meter. id("t_meter");
	t_meter. style("background-image" , "url('img/T_meter.png')");
	t_meter. style("background-repeat" , "none");
	t_meter. hide();

	p_meter = createDiv("");
	p_meter. id("p_meter");
	p_meter. style("z-index" , "3")
	p_meter. style("background-image" , "url('img/p_meter.png')");
	p_meter. style("background-repeat" , "none");
	p_meter. hide();

	p_needle = createDiv("");
	p_needle. style("z-index" , "3")
	p_needle. id("p_needle");
	p_needle. style("background-image" , "url('img/needle.png')");
	p_needle. style("background-repeat" , "none");
	p_needle. hide();

	t_needle = createDiv("");
	t_needle. id("t_needle");
	t_needle. style("background-image" , "url('img/needle.png')");
	t_needle. style("background-repeat" , "none");
	t_needle. hide();

	clip_piston = createDiv("");
	clip_piston. id("clip_piston");
	clip_piston. style("background-image" , "url('img/L2.png')");
	clip_piston. style("background-repeat" , "none");
	clip_piston. hide();

	space = createDiv("");
	space. id("space");
	space. style("z-index" , "5");
	// space. style("background-color" ,"red")
	// space. style("background-image" , "url('img/L2.png')");
	space. style("background-repeat" , "none");
	space. hide();

	// Atom
	Atom = []
	for (i = 0 ; i < 80 ; i++){
		Atom[i] = createDiv("");
		Atom[i]. id("Atom_"+i);
		Atom[i]. style("background-image" , "url('img/Gasparticles.png')");
		Atom[i]. style("background-repeat" , "none");
		Atom[i]. hide();
	}
	for(i = 0; i< 80 ;i++){
	    start_point_x1[i] = random(0 , 400);
	    start_point_x2[i] = random(0 , 400);
	    start_point_y1[i] = random(0 , 400);
	    start_point_y2[i] = random(0 , 400);
  	}
	// instruction
	compInstPanel = select("#inst-div");
	compInstructionClose = select("#instclosecss")
	compInst = createDiv("");
	compInst. style("background-image" , "url('img/inst_btn.png')");


	for(var i = 0; i < 11; i++){
			slider_p_points[i]=lerp(1660 , 2487 , i/10);
	}
	for(var i = 0; i < 12; i++){
			slider_v_points[i]=lerp(1660 , 2487 , i/11);
	}
	for(var i = 0; i < 11; i++){
			slider_t_points[i]=lerp(1660 , 2487 , i/10);
	}
	for(var i = 0; i < 4; i++){
			slider_m_points[i]=lerp(1660 , 2487 , i/3);
	}
	for(var i = 0; i < 80 ; i++){
		InPipe[i] = false;
		InGlass[i] = false;
		Atom_current_index[i] = 0
	}	
	i=0;
	var myVar = setInterval( function (){
			if(i >= amount_atom){
				clearInterval(myVar)
			}else{
				InPipe[i] = true
				i++;
			}
			// console. log("okay" , i)
	} , time_move_atom)



	resizeLoad();
	compInstX = 78 , compInstY = 1255 , compInstW = 420 , compInstH = 101;
	slider_mX = slider_m_points[1] - RADIUS_SLIDER+5, slider_mY = 236 + y_off_const -22 , slider_mW = 61 , slider_mH = 61;
	slider_pX = slider_p_points[1] - RADIUS_SLIDER+5, slider_pY = 448 + y_off_const -22 , slider_pW = 61 , slider_pH = 61;
	// slider_vX = slider_v_points[1] - RADIUS_SLIDER, slider_vY = 660 + y_off_const -22 , slider_vW = 61 , slider_vH = 61;
	slider_vX = map(0.022698585 , 0 , 0.055 , 1660 , 2487) - RADIUS_SLIDER+5, slider_vY = 660 + y_off_const -22 , slider_vW = 61 , slider_vH = 61;
	slider_tX = slider_t_points[5] - RADIUS_SLIDER+5, slider_tY = 876 + y_off_const -22 , slider_tW = 61 , slider_tH = 61;
	
	
	// INSTRUCTION
	compInst. mouseOver(function (){
		hoverInst = true ; compInst.style("cursor" , "pointer")
		// 
	} );
	compInst. mouseOut(function (){ 
		hoverInst = false
		// 
	});
	compInst. mouseClicked(function (){
		
		clickInst = true; 
		hoverInst = false;
		setTimeout(function (){
			hoverInst = true;
		},CLICK_TIME);
	});

	reset_btn. mouseClicked( function (){
		reset_element();
		lockTemprature();
		hoverReset_btn = false
	})
	reset_btn. mouseOver(function (){
		reset_btn. style("cursor" , "pointer")
		hoverReset_btn = true
	})
	reset_btn. mouseOut(function (){
		hoverReset_btn = false
	})

	compInstructionClose. mouseOver( function (){
		ori_instclose_x = 1540, ori_instclose_y = 27, ori_instclose_w = 145, ori_instclose_h = 93.3;
		// 
	})
	compInstructionClose. mouseOut( function (){
		ori_instclose_x = 1550, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;
		// 
	})
	compInstructionClose. mouseClicked( function (){
		clickInst = false
		// 
	})
	contain_img. mouseReleased( function () {
		resetClick();
		// 
	})
	contain_img. touchEnded( function () {
		resetClick();
		// 
	})
	slider_p_btn. mousePressed( function (){
		if(click_lock_p == false && lock_flag == true){
			click_slider_p_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
		clickInst = false
		// 
	});
	slider_p_btn. touchStarted( function (){
		if(click_lock_p == false && lock_flag == true){
			click_slider_p_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
		clickInst = false
		// 
	});
	slider_p_btn. mouseReleased( function (){
		// click_slider_p_btn = false;
		resetClick();
		// 
	})
	slider_p_btn. touchEnded( function (){
		// click_slider_p_btn = false;
		resetClick();
		// 
	})
	slider_p_btn. mouseOver( function (){
		if(click_lock_p == false){
			hover_p_slider = true
			slider_p_btn. style("cursor" , "pointer");
		}else{
			slider_p_btn. style("cursor" , "default")
		}
		// 
	})
	slider_p_btn. mouseOut( function (){
		hover_p_slider = false
		// 
	})
	slider_m_btn. mousePressed( function (){
		clickInst = false
		if(lock_flag == true){
			click_slider_m_btn = true 
		}else{

			text_popup_show = true
			clearTimeout(pop);
			pop = setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
	});
	slider_m_btn. touchStarted( function (){
		clickInst = false
		if(lock_flag == true){
			click_slider_m_btn = true 
		}else{

			text_popup_show = true
			clearTimeout(pop);
			pop = setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
	});
	slider_m_btn. mouseReleased( function (){
		// click_slider_m_btn = false;
		resetClick();
		// 
	})
	slider_m_btn. touchEnded( function (){
		// click_slider_m_btn = false;
		resetClick();
		// 
	})
	slider_m_btn. mouseOver( function (){
		hover_m_slider = true
		slider_m_btn. style("cursor" , "pointer");
		// 
	})
	slider_m_btn. mouseOut( function (){
		hover_m_slider = false
		// 
	})
	slider_v_btn. mousePressed( function (){
		clickInst = false
		hover_p_slider = true
		if( click_lock_v == false && lock_flag == true){
			click_slider_v_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
		// 
	});
	slider_v_btn. touchStarted( function (){
		clickInst = false
		hover_p_slider = true
		if( click_lock_v == false && lock_flag == true){
			click_slider_v_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
		// 
	});
	slider_v_btn. mouseReleased( function (){
		// click_slider_v_btn = false;
		resetClick();
		// 
	})
	slider_v_btn. touchEnded( function (){
		// click_slider_v_btn = false;
		resetClick();
		// 
	})
	slider_v_btn. mouseOut( function (){
		hover_v_slider = false
		// 
	})
	slider_v_btn. mouseOver( function (){
		hover_v_slider = true
		if(click_lock_v == false){
			slider_v_btn. style("cursor" , "pointer");
		}else{
			slider_v_btn. style("cursor" , "default");
		}
		// 
	})
	slider_t_btn. mousePressed( function (){
		clickInst = false
		if( click_lock_t == false && lock_flag == true){
			click_slider_t_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
		// 
	});
	slider_t_btn. touchStarted( function (){
		clickInst = false
		if( click_lock_t == false && lock_flag == true){
			click_slider_t_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
		// 
	});
	slider_t_btn. mouseReleased( function (){
		// click_slider_t_btn = false;
		resetClick();
		// 
	})
	slider_t_btn. touchEnded( function (){
		// click_slider_t_btn = false;
		resetClick();
		// 
	})
	slider_t_btn. mouseOut( function (){
		hover_t_slider = false
		// 
	})
	slider_t_btn. mouseOver( function (){
		hover_t_slider = true
		if(click_lock_t == false){
			slider_t_btn. style("cursor" , "pointer");
		}else{
			slider_t_btn. style("cursor" , "default");
		}
		// 
	})

	slider_m. mousePressed( function (){
		clickInst = false
		if(lock_flag == true){
			click_slider_m_btn = true 
		}else{

			text_popup_show = true
			clearTimeout(pop);
			pop = setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		} 
	})
	slider_p_b. mousePressed( function (){
		clickInst = false
		if(click_lock_p == false && lock_flag == true){
			click_slider_p_btn = true 
		}else{

			text_popup_show = true
			clearTimeout(pop);
			pop = setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
	})
	slider_v_b. mousePressed( function (){
		clickInst = false
		if(click_lock_v == false && lock_flag == true){
			click_slider_v_btn = true 
		}else{
			console.log("okay")
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
				t = new Date(). getTime();
				// console. log(t)
			} , TIME_POPUP)
		}
	})
	slider_t_b. mousePressed( function (){
		clickInst = false
		if(click_lock_t == false && lock_flag == true){
			click_slider_t_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
	})

	slider_m. touchStarted( function (){
		clickInst = false
		if(lock_flag == true){
			click_slider_m_btn = true 
		}else{

			text_popup_show = true
			clearTimeout(pop);
			pop = setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		} 
	})
	slider_p_b. touchStarted( function (){
		clickInst = false
		if(click_lock_p == false && lock_flag == true){
			click_slider_p_btn = true 
		}else{

			text_popup_show = true
			clearTimeout(pop);
			pop = setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
	})
	slider_v_b. touchStarted( function (){
		clickInst = false
		if(click_lock_v == false && lock_flag == true){
			click_slider_v_btn = true 
		}else{
			console.log("okay")
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
				t = new Date(). getTime();
				// console. log(t)
			} , TIME_POPUP)
		}
	})
	slider_t_b. touchStarted( function (){
		clickInst = false
		if(click_lock_t == false && lock_flag == true){
			click_slider_t_btn = true 
		}else{
			text_popup_show = true
			clearTimeout(pop);

			pop=setTimeout( function (){
				text_popup_show = false
			} , TIME_POPUP)
		}
	})

	lock_p_btn. mouseClicked( function (){
		clickInst = false
		lock_flag = true
		text_popup_show = false

		lock_p_btn. style("cursor" , "default");
		lock_v_btn. style("cursor" , "pointer");
		lock_t_btn. style("cursor" , "pointer");

		slider_p_btn. style("pointer-events" , "none");
		slider_p_b. style("pointer-events" , "none");
		slider_v_btn. style("pointer-events" , "auto");
		slider_t_btn. style("pointer-events" , "auto");
		// lock_p_btn. style("opacity" , "1");
		// lock_v_btn. style("opacity" , "0.6");
		// lock_t_btn. style("opacity" , "0.6");
		click_lock_p = true;
		click_lock_v = false;
		click_lock_t = false;
		lock_p_btn. style("background-image" , "url('img/Lock.png')");
		lock_v_btn. style("background-image" , "url('img/unlock.png')");
		lock_t_btn. style("background-image" , "url('img/unlock.png')");

		// disble slider_p btn
		SLIDER_P. style("opacity" , "0.3");
		SLIDER_P. style("pointer-events" , "none")
		SLIDER_V. style("opacity" , "1");
		SLIDER_V. style("pointer-events" , "auto")
		SLIDER_T. style("opacity" , "1");
		SLIDER_T. style("pointer-events" , "auto")
	})
	lock_v_btn. mouseClicked( function (){
		clickInst = false
		lock_flag = true
		text_popup_show = false
		
		slider_p_btn. style("pointer-events" , "auto");
		slider_v_btn. style("pointer-events" , "none");
		slider_v_b. style("pointer-events" , "none");
		slider_t_btn. style("pointer-events" , "auto");

		lock_p_btn. style("cursor" , "pointer");
		lock_v_btn. style("cursor" , "default");
		lock_t_btn. style("cursor" , "pointer");
		// lock_p_btn. style("opacity" , "0.5");
		// lock_v_btn. style("opacity" , "1");
		// lock_t_btn. style("opacity" , "0.5");
		click_lock_p = false;
		click_lock_v = true;
		click_lock_t = false;
		lock_p_btn. style("background-image" , "url('img/unlock.png')");
		lock_v_btn. style("background-image" , "url('img/Lock.png')");
		lock_t_btn. style("background-image" , "url('img/unlock.png')");

		SLIDER_P. style("opacity" , "1");
		SLIDER_P. style("pointer-events" , "auto")
		SLIDER_V. style("opacity" , "0.5");
		SLIDER_V. style("pointer-events" , "none")
		SLIDER_T. style("opacity" , "1");
		SLIDER_T. style("pointer-events" , "auto")
	})
	lock_t_btn. mouseClicked( function (){
		clickInst = false
		lock_flag = true
		text_popup_show = false
		
		slider_p_btn. style("pointer-events" , "auto");
		slider_v_btn. style("pointer-events" , "auto");
		slider_t_btn. style("pointer-events" , "none");
		slider_t_b. style("pointer-events" , "none");

		lock_p_btn. style("cursor" , "pointer");
		lock_v_btn. style("cursor" , "pointer");
		lock_t_btn. style("cursor" , "default");
		// lock_p_btn. style("opacity" , "0.5");
		// lock_v_btn. style("opacity" , "0.5");
		// lock_t_btn. style("opacity" , "1");
		click_lock_p = false;
		click_lock_v = false;
		click_lock_t = true;
		lock_p_btn. style("background-image" , "url('img/unlock.png')");
		lock_v_btn. style("background-image" , "url('img/unlock.png')");
		lock_t_btn. style("background-image" , "url('img/Lock.png')");

		SLIDER_P. style("opacity" , "1");
		SLIDER_P. style("pointer-events" , "auto");
		SLIDER_V. style("opacity" , "1");
		SLIDER_V. style("pointer-events" , "auto");
		SLIDER_T. style("opacity" , "0.5");
		SLIDER_T. style("pointer-events" , "none");
	})

	// LAW btn
	B_law_btn. mouseClicked( function (){
		clickInst = false
		click_B_law = true;
		text_popup_show = false
		// 
	})
	B_law_btn. mouseOver( function (){
		B_law_btn. style("cursor" , "pointer");
		hoverBbtn = true
	})
	B_law_btn. mouseOut( function (){
		hoverBbtn = false
		resetClick();
	})
	C_law_btn. mouseClicked( function (){
		clickInst = false
		click_C_law = true
		text_popup_show = false
		// 
	})
	C_law_btn. mouseOver( function (){
		C_law_btn. style("cursor" , "pointer");
		hoverCbtn = true
	})
	C_law_btn. mouseOut( function (){
		hoverCbtn = false
		resetClick();
	})
	G_law_btn. mouseClicked( function (){
		clickInst = false
		click_G_law = true
		text_popup_show = false
		// 
	})
	G_law_btn. mouseOver( function (){
		G_law_btn. style("cursor" , "pointer");
		hoverGbtn = true
	})
	G_law_btn. mouseOut( function (){
		hoverGbtn = false
		resetClick();
	})
	law_img_close_btn. mouseOver( function (){
		clickInst = false
		hover_close = true;
		law_img_close_btn. style("cursor" , "pointer")
	})
	law_img_close_btn. mouseOut( function (){
		clickInst = false
		hover_close = false;
		// 
	})
	law_img_close_btn. mouseClicked( function (){
		clickInst = false
		click_G_law = false;
		click_B_law = false;
		click_C_law = false;
	})
	text_popup_close. mouseClicked( function (){
		text_popup_show = false;
		clickInst = false
		// 
	})
	text_popup_close. mouseOver( function (){
		text_popup_close. style("cursor" , "pointer")
		hover_close = true
		// 
	})
	text_popup_close. mouseOut( function (){
		hover_close = false
		// 
	})

	cnv. mouseReleased( function (){
		resetClick();
		// 
	})
	cnv. touchEnded( function (){
		resetClick();
		// 
	})

	lockTemprature();

}
function resizeLoad(){
	contain_img. style("overflow" , "hidden")
	scaleImgCss(contain_img , 0 , y_off_const , ACT_W , 975);
	scaleImgCss(blue_line_1 , 0 , 230 , ACT_W  , 15);
	scaleImgCss(blue_line_2 , 0 , 975 + y_off_const , ACT_W  , 15);
	// SCALE OF SLIDER
	scaleImgCss(slider_m_scl , 1545 , 116 + y_off_const , 1004 , 184)
	scaleImgCss(slider_p_scl , 1545 , 328 + y_off_const , 1004 , 184)
	scaleImgCss(slider_v_scl , 1545 , 541 + y_off_const , 1004 , 184)
	scaleImgCss(slider_t_scl , 1545 , 756 + y_off_const , 1004 , 184)
	// SLIDER
	scaleImgCss(slider_m , 1654 , 236 + y_off_const , 838 , 21)
	// scaleImgCss(slider_p_w , 1654 , 448 + y_off_const , 838 , 21);
	scaleImgCss(slider_p_w , 1654 , 448 + y_off_const , 838 , 21);
	scaleImgCss(slider_p_b , slider_p_points[1] , 448 + y_off_const , slider_p_points[7]-slider_p_points[1] , 15);
	scaleImgCss(slider_v_w , 1654 , 660 + y_off_const , 838 , 21);
	scaleImgCss(slider_v_b , 1734 , 660 + y_off_const , 676 , 15);
	scaleImgCss(slider_t_w , 1654 , 876 + y_off_const , 838 , 21);
	scaleImgCss(slider_t_b , 1764 , 876 + y_off_const , 619 , 15);
	scaleImgCss(slider_t_b , slider_t_points[2] , 876 + y_off_const ,slider_t_points[8] - slider_t_points[2] , 15);
	// Component
	// scaleImgCss(pipe_png , 607 , 837 , 431 , 341)
	scaleImgCssPipe(pipe_png , 607 , 837 , 431 , 341 , 0.79 , 1)
	scaleImgCss(glass_cup , 300 , 232 + y_off_const ,340 , 430)
	scaleImgCss(glass_cup_shadow , 300 , 232 + y_off_const ,340 , 430)
	scaleImgCss(glass_top , 245 , 141 + y_off_const , 449 , 134)
	scaleImgCss(t_meter , 392 , 741 + y_off_const , 146 , 150);
	scaleImgCss(p_meter , 686 , 302 + y_off_const , 193 , 338); // 953 , 448
}

function resetClick(){
	if(click_slider_p_btn == true)
		slider_pX = correctRoundPosition("p" , slider_pX , slider_pW , 0.5 , 5.5)
	if(click_slider_m_btn == true)
		slider_mX = correctRoundPosition("m" , slider_mX , slider_mW , 0.5 , 2)
	if(click_slider_t_btn == true)
		slider_tX = correctRoundPosition("t" , slider_tX , slider_tW , 223 , 323)
	if(click_slider_v_btn == true)
		slider_vX = correctRoundPosition("v" , slider_vX , slider_vW , 0 , 0.055)
	getValue();
	pvnrt();
	if(amount_atom_in_pipe == 0){
		console, log("okkay")
	clearInterval(first_interval)
	clearInterval(second_interval)
	if(click_slider_m_btn == true){
		console. log(amount_atom , round( slider_m_val * 40 ))
		if( (amount_atom_in_glass + amount_atom_in_pipe) < round( slider_m_val * 40 ) ){
			for(var i = amount_atom_in_glass + amount_atom_in_pipe ; i <= ( round( slider_m_val * 40 ) )  ; i++){
				// if(amount_atom_in_glass < amount_atom)
				// if(Atom_current_index[i] == 0 ||  Atom_current_index == 590 ){
					InPipe[i] = false;
					InGlass[i] = false;
					Atom_current_index[i] = 0;
				// }
			}
			// for()	
			move_direction = "bottel->glass"
			i=amount_atom_in_glass;
			clearInterval(second_interval)
			var temp_range_i = round(slider_m_val * 40 )
			first_interval = setInterval( function (){
					if(i >=  temp_range_i){
						clearInterval(first_interval)
					}else{
						InPipe[i] = true
						// console. log(InPipe[i] , i)
						// console. log("bottel->glass" , i)
						i++;
					}
			} , time_move_atom)
		}else{
			// for(var i = amount_atom_in_glass  ; i > ( round( slider_m_val * 40 ) )  ; i--){
			for(var i = amount_atom_in_glass  ; i >= 0  ; i--){
				
				if(i >  round( slider_m_val * 40 ) ){
					InPipe[i] = false;
					InGlass[i] = true;
				}
				Atom_current_index[i] = ( (rotate_of_cahnge_index) * floor(range_index / rotate_of_cahnge_index) ) + (rotate_of_cahnge_index)

				// console. log(i)
			}	
			console. log(Atom_current_index)
			move_direction = "glass->bottel"
			j= amount_atom_in_glass - 1;
			// console. log()
			var temp_range_i = round( slider_m_val * 40 )  
			console. log(j , round( slider_m_val * 40 ))
			clearInterval(first_interval)
			second_interval = setInterval( function (){
					if(j <= temp_range_i-1){
						clearInterval(second_interval)
					}else{
						InGlass[j] = false
						InPipe[j] = true
						// console. log(InPipe[j] , j)
						j--;
						// console. log("glass->bottel" , j)
					}
					// console. log("okay" , i , InGlass[i])
			} , time_move_atom)			
		}
		}
	}	
	console. log(move_direction)
	click_slider_m_btn = false;
	click_slider_p_btn = false;
	click_slider_v_btn = false;
	click_slider_t_btn = false;
}

function draw(){
	background(255 , 255 , 255);
	instruction_scl();

	Scaling();
	display_all_img();

	// dmfm
	// console. log(click_slider_m_btn)

	// MAP SPEED OF CHANGE
	// speed = map(frameRate() , 10 , 29 , 0.015 , 0.009)
	speed = map(frameRate() , 10 , 29 , 0.015 , 0.009)
	if(amount_atom_in_pipe == 0){
		rotate_of_cahnge_index = floor( map(frameRate() , 10 , 29 , 15 , 7 ) )
	}
	if(amount_atom_in_pipe != 0 && lock_flag != false){
		lock_move_slider = true;

		slider_m. style("pointer-events" , "none")

		slider_m_btn.style("pointer-events" , "none")
		slider_m. style("pointer-events" , "none")
		slider_m_btn. style("opacity" , "0.5")
		
		// slider_m_.style("pointer-events" , "none")
		slider_p_btn.style("pointer-events" , "none")
		slider_p_b. style("pointer-events" , "none")
		slider_p_btn. style("opacity" , "0.5")
		
		slider_v_btn.style("pointer-events" , "none")
		slider_v_b. style("pointer-events" , "none")
		slider_v_btn. style("opacity" , "0.5")
		
		slider_t_btn.style("pointer-events" , "none")
		slider_t_b. style("pointer-events" , "none")
		slider_t_btn. style("opacity" , "0.5")
	}else{

		lock_move_slider = false;
		if(lock_flag == true){
				slider_m. style("pointer-evens" , "auto")
				slider_m_btn.style("pointer-events" , "auto")
				slider_m. style("pointer-events" , "auto")
				slider_m_btn. style("opacity" , "1")

				if(click_lock_p != true){
					slider_p_b.style("pointer-events" , "auto")
					slider_p_btn.style("pointer-events" , "auto")
				}
				// slider_p_b. style("pointer-events" , "auto")
				slider_p_btn. style("opacity" , "1")
				
				if(click_lock_v != true){
					slider_v_btn.style("pointer-events" , "auto")
					slider_v_b. style("pointer-events" , "auto")
				}
				slider_v_btn. style("opacity" , "1")
				
				if(click_lock_t != true){
					slider_t_btn.style("pointer-events" , "auto")
					slider_t_b. style("pointer-events" , "auto")
				}
				slider_t_btn. style("opacity" , "1")
		}
	}
	
	if(click_slider_m_btn == false){
		amount_atom = round(slider_m_val * 40) ;
	}

	if(clickInst == true){
		compInstPanel. position(100 * scl_x + imgX , 525 * scl_y + imgY);
		compInstPanel. show();
		
		click_B_law = false
		click_G_law = false
		click_C_law = false
		//hide  laes images
		G_law_png. hide();
		C_law_png. hide();
		B_law_png. hide();
		law_img_close_btn. hide();
	}

	if(clickInst == false){
		compInstPanel. hide();
		// 
	}

	if(click_slider_m_btn == true){
		slider_mX = moveElement(slider_mX , slider_mW , slider_m_points[0] - (slider_mW/2) , slider_m_points[3] + (slider_mW / 2) )
	}
	if(click_slider_p_btn == true){
		slider_pX = moveElement(slider_pX , slider_pW , slider_p_points[1] - (slider_pW/2) , slider_p_points[7] + (slider_pW / 2) )
	}
	if(click_slider_v_btn == true){
		slider_vX = moveElement(slider_vX , slider_vW , slider_v_points[1] - (slider_vW/2) , slider_v_points[10] + (slider_vW / 2) )
	}
	if(click_slider_t_btn == true){
		slider_tX = moveElement(slider_tX , slider_tW , slider_t_points[2] - (slider_tW/2) , slider_t_points[8] + (slider_tW / 2) )
	}

	// show formula 
	if(click_B_law == true){
		scaleImgCss(B_law_png , 10 , 5 + y_off_const ,2542 , 968)
		if(hover_close == false){
			scaleImgCss(law_img_close_btn , 2475 , y_off_const + 30 , 41 , 41)
		}else{
			scaleImgCss(law_img_close_btn , 2475 -4.1 , y_off_const + 30 -4.1, 41 + 8.2, 41+8.2)
		}
	}else if(click_C_law == true){
		scaleImgCss(C_law_png , 10 , 5 + y_off_const ,2542 , 968)
		if(hover_close == false){
			scaleImgCss(law_img_close_btn , 2475 , y_off_const + 30 , 41 , 41)
		}else{
			scaleImgCss(law_img_close_btn , 2475 -4.1 , y_off_const + 30 -4.1, 41 + 8.2, 41+8.2)
		}
	}else if(click_G_law == true){
		scaleImgCss(G_law_png , 10 , 5 + y_off_const ,2542 , 968)
		if(hover_close == false){
			scaleImgCss(law_img_close_btn , 2475 , y_off_const + 30 , 41 , 41)
		}else{
			scaleImgCss(law_img_close_btn , 2475 -4.1 , y_off_const + 30 -4.1, 41 + 8.2, 41+8.2)
		}
	}else{
		G_law_png. hide();
		C_law_png. hide();
		B_law_png. hide();
		law_img_close_btn. hide();
	}

	// show popup
	if( text_popup_show == true){
		scaleImgCss(text_popup , 828, 261 + y_off_const, 1024 , 346)
		// scaleImgCss(text_popup_close , 1782 , 531 , 41 , 41)
		if(hover_close == false){
			scaleImgCss(text_popup_close , 1782 , 531 , 41 , 41)
		}else{
			scaleImgCss(text_popup_close , 1782 - 4.1 , 531 -4.1, 41 + 8.2, 41+8.2)
		}	
	}else{
		text_popup. hide();
		text_popup_close. hide();
	}

	// ROTATE NEEDLE
	p_needle. style("transform" , "rotate("+p_needle_deg+"deg)")
	p_needle. style("transform-origin" , "50% 75%")
	scaleImgCss(p_needle , 772 , 600 , 22 , 91)
	t_needle. style("transform" , "rotate("+t_needle_deg+"deg)")
	t_needle. style("transform-origin" , "50% 71%")
	scaleImgCss(t_needle , 454 , 1002 , 22 , 85)

	// PISTON MOVE
	// scaleImgCss(piston , 303 , 5 + y_off_const, 334 , 533)
	scaleImgCss(piston , 303 , current_piston , 334 , 610 , contain = false , child = true)
	if(click_lock_v == false){
		clip_piston. style("background-image" , "url('img/L2.png')");
		scaleImgCss(clip_piston , 412 , 77 + y_off_const, 164 , 62)
	}else{
		clip_piston. style("background-image" , "url('img/L1.png')");
		scaleImgCss(clip_piston , 415 , 77 + y_off_const, 140 , 62)
	}

	// find space
	spaceX = 303; 
	spaceY = current_piston + y_off_const + (610 * 0.9);
	// spaceH = 862 - spaceY;
	spaceH = 872 - spaceY;
	spaceW = 334;
	scaleImgCss(space , spaceX , spaceY , spaceW , spaceH)

	// MAP SPEED OF CHANGE
	// console. log(speed)
	// if(slider_t_val > 272){
	// if(amount_atom_in_pipe == 0){
	// 	var tempX = speed
	// }
	speed = map(slider_t_val , 273 , 323 , speed , speed + 0.005)
	// }else{
		// speed = map(slider_t_val , 223 , 273 , speed , speed - 0.006)
	// }
	//map change ratate of index
	if(amount_atom_in_pipe == 0){
		rotate_of_cahnge_index = floor(map(slider_t_val , 223 , 323 , 5 , 5 + 5 ))
		// rotate_of_cahnge_index = floor(map(slider_t_val , 223 , 323 , rotate_of_cahnge_index , rotate_of_cahnge_index + 5 ))
		console. log(rotate_of_cahnge_index)
		// rotate_of_cahnge_index = floor(map(speed , tempX , tempX + 0.005 , 8 , 15)) 
	}
	// IN PIPE MOVEMENT 
	for(i = 0 ; i < 80 ; i++){
		if(InPipe[i] == false && InGlass[i] == false){
			Atom[i]. hide();
		}
		if(InPipe[i] == true){
			// scaleImgCss( Atom[i] , pipeX[Atom_current_index[i]] + noise(start_point_x1[i], start_point_y1[i]) * 20, pipeY[Atom_current_index[i]]+ 230 + noise(start_point_x2[i], start_point_y2[i]) * 20 ,11 , 11)
			scaleImgCss( Atom[i] , pipeX[Atom_current_index[i]] - 6.5 + noise(start_point_x1[i], start_point_y1[i]) * 8, pipeY[Atom_current_index[i]]-6.5  + noise(start_point_x2[i], start_point_y2[i]) * 8 ,11 , 11)
			if(move_direction == "bottel->glass"){
				Atom_current_index[i]+=rotate_of_cahnge_index

				// amount_atom_in_glass += 1;
				// console. log(Atom_current_index[i] , i , "b-g")
			}else{
				Atom_current_index[i]-=rotate_of_cahnge_index
				// console. log(Atom_current_index[i] , i , "g-b")
				// amount_atom_in_glass -= 1;
			}
			if(Atom_current_index[i] > range_index && move_direction == "bottel->glass" ){
				InPipe[i] = false;
				InGlass[i] = true;
				amount_atom_in_glass += 1;
				amount_atom_in_pipe -= 1;
				// console. log(amount_atom_in_glass , "PUSH" , amount_atom_in_pipe)
			}
			if(Atom_current_index[i] == rotate_of_cahnge_index && move_direction == "bottel->glass"){
				amount_atom_in_pipe += 1
				// console.log(amount_atom_in_pipe , "AMOUNT ATOM") 
			}
			if(Atom_current_index[i] == (rotate_of_cahnge_index) * floor(range_index / rotate_of_cahnge_index)  && move_direction == "glass->bottel" ){
				amount_atom_in_glass -= 1;
				amount_atom_in_pipe += 1;
				console. log(Atom_current_index[i])
				// console.log(amount_atom_in_glass , "POP"+ i , amount_atom_in_pipe)
			}
			if(Atom_current_index[i] == 0 && move_direction == "glass->bottel" ){
				InPipe[i] = false;
				InGlass[i] = false;
				amount_atom_in_pipe -= 1;
				// console. log(amount_atom_in_pipe , i + "AMOUNT ATOM 2")
				// amount_atom_in_glass -= 1;
			}
			start_point_x1[i] += 2 * speed;
			start_point_x2[i] += 2 * speed;
			start_point_y1[i] += 2 * speed;
			start_point_y2[i] += 2 * speed;
		}else{
			if(move_direction == "bottel->glass"){
				Atom[i]. hide();
			}
		}
	}

	// ATOM MOVEMENT
	for(i = 0 ; i < 80 ; i++){
		if(InGlass[i] == true){

			// if(i > 20){
			// 	console. log(InGlass)
			// }

			// console. log("(*(&**")
			// #best
			// var tempX = map(noise(start_point_x1[i], start_point_y1[i]) , 0.2 , 0.8 , spaceX - 50 , spaceX + spaceW + 50);
			// var tempY = map(noise(start_point_x2[i], start_point_y2[i]) , 0.2 , 0.8 , spaceY + 50 , spaceY + spaceH + 50);

			// #BEST2
			// var tempX = map(noise(start_point_x1[i], start_point_y1[i]) , 0.2 , 0.8 , spaceX - 50 , spaceX + spaceW + 50);
			// var tempY = map(noise(start_point_x2[i], start_point_y2[i]) , 0.2 , 0.8 , spaceY + 50 , spaceY + spaceH + 10);
			
			var tempX = map( (noise(start_point_x1[i], start_point_y1[i]) ) , 0.2 , 0.8 , spaceX - 10 , spaceX + spaceW + 50);
			var tempY = map(noise(start_point_x2[i], start_point_y2[i]) , 0.2 , 0.8 , spaceY + 50 , spaceY + spaceH );
			
			if(tempX > spaceX + spaceW - 22){
				tempX = spaceX + spaceW - 22
			}else if(tempX < spaceX){
				tempX = spaceX
			}

			if(tempY > spaceY + spaceH + 20){
				tempY = spaceY + spaceH 
				console. log("yup")
			}else if(tempY < spaceY){
				tempY = spaceY
			}
			

			scaleImgCss( Atom[i] , tempX , tempY ,11 , 11)
			// console. log(noise(start_point_x1[i], start_point_y1[i]))
			// start_point_x1[i] += 1 * speed;
			// start_point_x2[i] += -1 * speed;
			// start_point_y1[i] += -1 * speed;
			// start_point_y2[i] +=  1 * speed;
		
			start_point_x1[i] += 1 * speed;
			start_point_x2[i] += 1 * speed;
			start_point_y1[i] += 1 * speed;
			start_point_y2[i] += 1 * speed;
	 	}
 	}

 	// FIND PIPE POINTS
 	// if (keyIsDown(RIGHT_ARROW)) {
  //   	c_p_iX += 1
  //   	pipePointsX. push(c_p_iX );
  //   	pipePointsY. push(c_p_iY) 
  // 	}
  // 	if (keyIsDown(DOWN_ARROW)) {
  // 		c_p_iY += 1
  //   	pipePointsX. push(c_p_iX);
  //   	pipePointsY. push(c_p_iY+ 1) 
  // 	}
  // 	if (keyIsDown(LEFT_ARROW)) {
  // 		c_p_iX -= 1
  //   	pipePointsX. pop();
  //   	pipePointsY. pop();
  // 	}
  // 	if (keyIsDown(UP_ARROW)) {
  // 		c_p_iY -= 1
  //   	pipePointsX. pop();
  //   	pipePointsY. pop();
  // 	}
  // 	scaleImgCss( Atom[0] , c_p_iX-6.5 , c_p_iY -6.5,11 , 11)
 	
 	// 642	 , 860 
	// 862 
	// stroke(255, 0 , 0)
	// for(i = 0 ; i < 10 ; i++){
	// 	line(slider_p_points[i] * scl_x + imgX , 0 , slider_p_points[i] * scl_x + imgX, 1440)
	// }
}

function display_all_img(){
	//background - img
	scaleImg(bg , 0 , 0 , ACT_W , ACT_H) ;

	fill(255);
	textHeadX = 93 , textHeadY = 52 , textHeadS = 46;
	textSize( textHeadS * scl_y );
	textFont( fontLatoBold );
	textAlign(LEFT,CENTER);
	text("Investigate the relationships between pressure, volume and temperature for a fixed amount of gas", textHeadX * scl_x + imgX , textHeadY * scl_y + imgY);

	fill("#676767");
	textSubHX = 124 , textSubHY = 152 , textSubHS = 37;
	textSize(textSubHS * scl_y);
	textFont(fontLatoReg);
	textAlign(LEFT,CENTER);
	text("Choose a fixed amount of gas. Then use the sliders to investigate the relationships between pressure, volume and temperature.", textSubHX * scl_x + imgX , textSubHY * scl_y + imgY);

	text7X=31,text7Y=1400,text7S=40;
	fill(0)
	textSize(text7S*scl_x);
	textFont(fontRobotoLit);
	textAlign(LEFT,CENTER);
	text("Physical Sciences    ",text7X*scl_x+imgX,text7Y*scl_y+imgY);
	textFont(fontRobotMedian);
	text("  Grade 11",340*scl_x+imgX,text7Y*scl_y+imgY);

	if(hover_m_slider == false){
		scaleImgCssSlider(slider_m_btn , slider_mX - 4 , slider_mY -5 , slider_mW ,slider_mH , 1.2 , 1.2)
	}else{
		scaleImgCssSlider(slider_m_btn , slider_mX - 4 - 0.07 * slider_mW , slider_mY -5 - 0.07 * slider_mW, slider_mW * 1.1 ,slider_mH * 1.1, 1.2 , 1.2)
	}
	if(hover_p_slider == false){
		scaleImgCssSlider(slider_p_btn , slider_pX - 4 , slider_pY -5 , slider_pW ,slider_pH , 1.2 , 1.2)
	}else{
		scaleImgCssSlider(slider_p_btn , slider_pX - 4 - 0.07 * slider_pW , slider_pY -5 - 0.07 * slider_pW, slider_pW * 1.1 ,slider_pH * 1.1, 1.2 , 1.2)
	}
	// scaleImgCssSlider(slider_p_btn , slider_pX , slider_pY -7, slider_pW ,slider_pH , 1.2 , 1.2)
	if(hover_v_slider == false){
		scaleImgCssSlider(slider_v_btn , slider_vX - 4 , slider_vY -5 , slider_vW ,slider_vH , 1.2 , 1.2)
	}else{
		scaleImgCssSlider(slider_v_btn , slider_vX - 4 - 0.07 * slider_vW , slider_vY -5 - 0.07 * slider_vW, slider_vW * 1.1 ,slider_vH * 1.1, 1.2 , 1.2)
	}
	// scaleImgCssSlider(slider_v_btn , slider_vX , slider_vY -5, slider_vW ,slider_vH , 1.2 , 1.2)
	if(hover_t_slider == false){
		scaleImgCssSlider(slider_t_btn , slider_tX - 4 , slider_tY -5 , slider_tW ,slider_tH , 1.2 , 1.2)
	}else{
		scaleImgCssSlider(slider_t_btn , slider_tX - 4 - 0.07 * slider_tW , slider_tY -5 - 0.07 * slider_tW, slider_tW * 1.1 ,slider_tH * 1.1, 1.2 , 1.2)
	}
	// scaleImgCssSlider(slider_t_btn , slider_tX , slider_tY -7, slider_tW ,slider_tH , 1.2 , 1.2)

	if(hoverReset_btn == false){
		scaleImgCss(reset_btn , 2062 , 1253 , 315 , 106);
	}else{
		scaleImgCss(reset_btn , 2062 - 15.5, 1253 - 5.3  , 315 + 31.5, 106 + 10.6);
	}
	// get slider values
	getValue();
	// #LAWS BTN
	if(hoverBbtn == false){
		scaleImgCss(B_law_btn , 1244 , 21 + y_off_const, 408, 68)
	}else{
		scaleImgCss(B_law_btn , 1244 - 40.8 * 0.3 , 21 + y_off_const - 6.8 * 0.3 , 408 + 81.6*0.3 , 68 + 13.6 * 0.3)
	}
	if(hoverCbtn == false){
		scaleImgCss(C_law_btn , 1669 , 21 + y_off_const, 408, 68)
	}else{
		scaleImgCss(C_law_btn , 1669 - 40.8 * 0.3 , 21 + y_off_const - 6.8 * 0.3 , 408 + 81.6*0.3 , 68 + 13.6 * 0.3)
	}
	if(hoverGbtn == false){
		scaleImgCss(G_law_btn , 2094 , 21 + y_off_const, 408, 68)
	}else{
		scaleImgCss(G_law_btn , 2094 - 40.8 * 0.3 , 21 + y_off_const - 6.8 * 0.3 , 408 + 81.6*0.3 , 68 + 13.6 * 0.3)
	}

	// #INSTRUCTION 
	if(hoverInst == false){
		scaleImgCss(compInst , compInstX , compInstY , compInstW , compInstH);
	}else{
		scaleImgCss(compInst , compInstX - compInstW * 0.05 , compInstY - compInstH * 0.05 , compInstW * 1.09 , compInstH * 1.08);
	}
	//box value color
	if(click_lock_p == true){
		scaleImgCss( constant_highlighter , slider_pX + 27.01 , slider_pY - 28 , 7 , 20 )
		box_p. style("color" , "rgb(255 , 27 , 27)");
		box_v. style("color" , "rgb(0 , 0 , 0)");
		box_t. style("color" , "rgb(0 , 0 , 0)");
	}else if(click_lock_v == true){
		scaleImgCss( constant_highlighter , slider_vX + 27.01 , slider_vY - 28 , 7 , 20 )
		box_v. style("color" , "rgb(255 , 27 , 27)");
		box_p. style("color" , "rgb(0 , 0 , 0)");
		box_t. style("color" , "rgb(0 , 0 , 0)");
	}else if(click_lock_t == true){
		scaleImgCss( constant_highlighter , slider_tX + 27.01 , slider_tY - 28 , 7 , 20 )
		box_t. style("color" , "rgb(255 , 27 , 27)");
		box_v. style("color" , "rgb(0 , 0 , 0)");
		box_p. style("color" , "rgb(0 , 0 , 0)");
	}else{
		constant_highlighter. hide()
		box_p. style("color" , "rgb(0 , 0 , 0)");
		box_v. style("color" , "rgb(0 , 0 , 0)");
		box_t. style("color" , "rgb(0 , 0 , 0)");
	}

	// LOCK IMG
	scaleImgCss(lock_p_btn , 1560 , 413 + y_off_const , 54 , 65 , contain = true )//2166 , 595
	scaleImgCss(lock_v_btn , 1560 , 628 + y_off_const , 54 , 65 , contain = true )
	scaleImgCss(lock_t_btn , 1560 , 845 + y_off_const , 54 , 65 , contain = true )

	pvnrt();

	box_m. style("font-size" ,  57 * scl_x + "px")
	box_m. html(`<span style = "font-family:MathJexReg">${slider_m_val_str} </span>`)
	box_p. style("font-size" ,  57 * scl_x + "px")
	// box_p. html(`<span style = "font-family:MathJexReg">${slider_p_val_str} </span>`)
	box_p. html(`<span style = "font-family:MathJexReg">${P_val. toFixed(2). replace("." , ","). replace(",00" , ""). replace(",10" , ",1"). replace(",20" , ",2"). replace(",30" , ",3"). replace(",40" , ",4"). replace(",50" , ",5"). replace(",60" , ",6"). replace(",70" , ",7"). replace(",80" , ",8"). replace(",90" , ",9")}&times10<sup>5</sup>&nbsp</span>`)
	box_v. style("font-size" ,  57 * scl_x + "px")
	box_v. html(`<span style = "font-family:MathJexReg">${slider_v_val_str} </span>`)
	box_t. style("font-size" ,  57 * scl_x + "px")
	// box_t. html(`<span style = "font-family:MathJexReg">${slider_t_val_str} </span>`)
	box_t. html(`<span style = "font-family:MathJexReg">${T_val. toFixed(0)}&nbsp; </span>`)

	scaleImgCss(box_m , 1212 , 451 , 243 , 73)
	scaleImgCss(box_p , 1212 , 664 , 243 , 73)
	scaleImgCss(box_v , 1212 , 877 , 243 , 73)
	scaleImgCss(box_t , 1212 , 1090 , 243 , 73)
	// console.log(click_slider_m_btn)
	SLIDER_P. show();
	SLIDER_V. show();
	SLIDER_T. show();
}	


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	resizeLoad();
}

function Scaling(){
	imgX = 0; imgY = 0;
	scl_x=windowWidth/ACT_W;
	scl_y=windowHeight/ACT_H;
	if(scl_x>1 && scl_y>1){
			// console.log(1)
			scl_x = 1 , scl_y = 1;
			imgX=( windowWidth - ( scl_x * ACT_W ) ) / 2;
			imgY=( windowHeight - ( scl_y * ACT_H ) ) / 2;

	}else{
			// console.log(2)
			if(scl_x<scl_y){
				scl_y = scl_x;
				imgY = ( windowHeight - ( scl_y * ACT_H ) ) / 2;
			}else{
				scl_x = scl_y;
				imgX= ( windowWidth - ( scl_x * ACT_W ) )/2;
			}
	}
}

function scaleImg(tempImg ,tempX , tempY , tempW = 0 , tempH = 0){
	tempX = scl_x * tempX + imgX;
	tempY = scl_y * tempY + imgY;
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;
	if(tempH != 0 && tempW != 0){
		image(tempImg , tempX , tempY , tempW , tempH);
	}else{
		image(tempImg , tempX , tempY);
	}
}

// function scaleImgCss(tempImg ,tempX , tempY , tempW = 0 , tempH = 0 , marginX = 1 , marginY = 1){
// 	tempX = scl_x * tempX + imgX;
// 	tempY = scl_y * tempY + imgY;
// 	tempW = scl_x * tempW;
// 	tempH = scl_y * tempH;

// 	tempImg.size(marginX * tempW , marginY * tempH);
// 	tempImg. style("background-position", "center center")
// 	tempImg.position(tempX , tempY);
// 	tempImg.style('position' , 'absolute');
// 	tempImg.style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
// 	tempImg.style('background-repeat' , 'no-repeat');
// 	tempImg.show();
// }
function scaleImgCss(tempImg ,tempX , tempY , tempW = 0 , tempH = 0  , contain = false , child = false , marginX = 1 , marginY = 1){
	if(child == false){
		tempX = scl_x * tempX + imgX;
		tempY = scl_y * tempY + imgY;
	}else{
		tempX = scl_x * tempX;
		tempY = scl_y * tempY;

	}
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;

	tempImg.size(marginX * tempW , marginY * tempH);
	tempImg. style("background-position", "center center")
	tempImg.position(tempX , tempY);
	tempImg.style('position' , 'absolute');
	if (contain == false) {
		tempImg.style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
	}else{
		tempImg.style('background-size' , "contain");
	}
	tempImg.style('background-repeat' , 'no-repeat');
	tempImg.show();
}
function scaleImgCssSlider(tempImg ,tempX , tempY , tempW = 0 , tempH = 0 , marginX = 1 , marginY = 1){
	tempX = scl_x * tempX + imgX;
	tempY = scl_y * tempY + imgY;
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;

	tempImg. size(marginX * tempW , marginY * tempH);
	tempImg. style("background-position", "center center")
	tempImg. position(tempX , tempY);
	tempImg. style('position' , 'absolute');
	tempImg. style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
	tempImg. style('background-repeat' , 'no-repeat');
	tempImg. show();
}

function scaleImgCssPipe(tempImg ,tempX , tempY , tempW = 0 , tempH = 0 , marginX = 1 , marginY = 1){
	tempX = scl_x * tempX + imgX;
	tempY = scl_y * tempY + imgY;
	tempW = scl_x * tempW;
	tempH = scl_y * tempH;

	tempImg.size(marginX * tempW , marginY * tempH);
	tempImg. style("background-position", "left top")
	tempImg.position(tempX , tempY);
	tempImg.style('position' , 'absolute');
	tempImg.style('background-size' , tempW + 'px' + ' ' + tempH + 'px');	
	tempImg.style('background-repeat' , 'no-repeat');
	tempImg.show();
}

function instruction_scl(){
	var background_x = 0, background_y = 0, background_w = 2560, background_h = 1440;
	var ori_background_x = 0, ori_background_y = 0, ori_background_w = 2560, ori_background_h = 1440;
	var ratio_w = background_w / gcd(background_w, background_h);
	var ratio_h = background_h / gcd(background_w, background_h);
	var window_w = innerWidth;
	var window_h = innerHeight;
	var ratio = null;

	if(window_w < ori_background_w || window_h < ori_background_h){
	    if(window_h < window_w * ratio_h / ratio_w){
	        background_h = window_h;
	        background_w = window_h * ratio_w / ratio_h;
	    }else{
	        background_w = window_w;
	        background_h = window_w * ratio_h / ratio_w;
	    }
	}

	ratio = background_w / ori_background_w;


	//instruction div
	var inst_x = 0, inst_y = 0, inst_w = 0, inst_h = 0, border_radius = 0;
	var ori_inst_x = 0, ori_inst_y = 0;
	var ori_inst_w = 2498*0.7;
	var ori_inst_h = 992*0.7;
	var ori_border_radius = 20;
	var ori_shadow_h = 10;
	var ori_shadow_w = 10;
	var ori_shadow_spread = 10;
	border_radius = ori_border_radius * ratio;
	inst_x = ori_inst_x * ratio;
	inst_y = ori_inst_y * ratio;
	inst_w = ori_inst_w * ratio;
	inst_h = ori_inst_h * ratio;
	document.getElementById(`inst-div`).style.backgroundSize = inst_w + "px " + inst_h + "px";
	document.getElementById(`inst-div`).style.left = inst_x + "px";
	document.getElementById(`inst-div`).style.top = inst_y + "px";
	document.getElementById(`inst-div`).style.width = inst_w + "px";
	document.getElementById(`inst-div`).style.height = inst_h + "px";
	document.getElementById(`inst-div`).style.borderRadius = border_radius + "px";
	document.getElementById(`inst-div`).style.boxShadow = (ori_shadow_h * ratio )+ "px " + (ori_shadow_w * ratio) + "px " + (ori_shadow_spread * ratio) + "px " + (ori_shadow_spread * 0.1 * ratio) + "px " +  "#333";

	//instruction numbers
	var numbers_x = 0  , numbers_y = 0, numbers_w = 50, numbers_h = 100, inst_font_size = 0;
	var ori_numbers_x = 120, ori_numbers_y = 140, ori_numbers_w = 1380, ori_numbers_h = 500, ori_inst_font_size = 40;
	numbers_w = ori_numbers_w * ratio;
	numbers_h = ori_numbers_h * ratio;
	numbers_x = ori_numbers_x * ratio;
	numbers_y = ori_numbers_y * ratio;
	inst_font_size = ori_inst_font_size * ratio;
	// document.getElementById(`numbers`).style.backgroundColor = "black";
	document.getElementById(`numbers`).style.left = numbers_x + "px";
	document.getElementById(`numbers`).style.top = numbers_y + "px";
	document.getElementById(`numbers`).style.width = numbers_w + "px";
	document.getElementById(`numbers`).style.height = numbers_h + "px";
	document.getElementById(`numbers`).style.fontSize = inst_font_size + "px";


	// //reset-btn-inst
	var reset_btn_inst_x = 0  , reset_btn_inst_y = 0, reset_btn_inst_w = 50, reset_btn_inst_h = 100;
	var ori_reset_btn_inst_x = 100, ori_reset_btn_inst_y = 335, ori_reset_btn_inst_w = 200, ori_reset_btn_inst_h = 60;
	reset_btn_inst_w = ori_reset_btn_inst_w * ratio;
	reset_btn_inst_h = ori_reset_btn_inst_h * ratio;
	reset_btn_inst_x = ori_reset_btn_inst_x * ratio;
	reset_btn_inst_y = ori_reset_btn_inst_y * ratio;
	document.getElementById(`reset-btn-inst`).style.backgroundSize = reset_btn_inst_w + "px " + reset_btn_inst_h + "px";
	document.getElementById(`reset-btn-inst`).style.left = `${reset_btn_inst_x}px`;
	document.getElementById(`reset-btn-inst`).style.top = `${reset_btn_inst_y}px`;
	document.getElementById(`reset-btn-inst`).style.width = `${reset_btn_inst_w}px`;
	document.getElementById(`reset-btn-inst`).style.height = `${reset_btn_inst_h}px`;

	//instruction close
	var instclose_x = 0  , instclose_y = 0, instclose_w = 50, instclose_h = 100;
	// ori_instclose_x = 1200, ori_instclose_y = 30, ori_instclose_w = 127, ori_instclose_h = 85;
	instclose_w = ori_instclose_w * ratio;
	instclose_h = ori_instclose_h * ratio;
	instclose_x = ori_instclose_x * ratio;
	instclose_y = ori_instclose_y * ratio;
	document.getElementById(`instclosecss`).style.backgroundSize = instclose_w + "px " + instclose_h + "px";
	document.getElementById(`instclosecss`).style.left = instclose_x + "px";
	document.getElementById(`instclosecss`).style.top = instclose_y + "px";
	document.getElementById(`instclosecss`).style.width = instclose_w + "px";
	document.getElementById(`instclosecss`).style.height = instclose_h + "px";
}

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function moveElement(currentX , width , minX , maxX ){
	var compX =  (mouseX - imgX)/scl_x   - (width / 2);

	if(compX < minX){
		compX = minX;
	}

	if(compX + width > maxX){
		compX = maxX - width;
	}  

	return compX;
}

function correctRoundPosition(selector , compX , width , starting_val , ending_val){

	// console.log("ok")

	// map between 0 - 1000 m
	if(selector == "p" || selector == "P"){
		// console. log("ok")
		mapX = map( compX + (width / 2)  , slider_p_points[0] , slider_p_points[10] , starting_val , ending_val);
		return( slider_p_points[round( (mapX-0.5)/0.5)] - (width/2) );	
	}
	if(selector == "m" || selector == "M"){
		mapX = map( compX + (width / 2)  , slider_m_points[0] , slider_m_points[3] , starting_val , ending_val);
		return( slider_m_points[round( (mapX-0.5)/0.5)] - (width/2) );	
	}
	if(selector == "t" || selector == "T"){
		mapX = map( compX + (width / 2)  , slider_t_points[0] , slider_t_points[10] , starting_val , ending_val);
		return( slider_t_points[round( (mapX-223)/10)] - (width/2) );
	}
	if(selector == "v" || selector == "V"){
		mapX = map( compX + (width / 2)  , slider_v_points[0] , slider_v_points[11] , starting_val , ending_val);
		return( slider_v_points[round( (mapX)/0.005)] - (width/2) );
	}
}

function pvnrt(){
	var update_value;
	if (click_lock_p == true) {
		if(click_slider_v_btn == true) {
			update_value = slider_p_val * (10**5) * slider_v_val / ( slider_m_val * 8.3145);
			T_val = update_value;
			update_value = outRange(update_value , 223 , 323)
			// slider_tX = map(update_value , 233 , 313 , 1660 , 2487) - RADIUS_SLIDER
			slider_tX = map(update_value , 223 , 323 , 1660 , 2487) - RADIUS_SLIDER
			// console. log(slider_tX)
		}
		if(click_slider_t_btn == true) {
			update_value = slider_m_val * slider_t_val * 8.3145 / (slider_p_val * (10**5)) ;
			V_val = update_value;
			update_value = outRange(update_value , 0 , 0.055)
			// console. log(update_value)
			slider_vX = map(update_value , 0 , 0.055 , 1660 , 2487) - RADIUS_SLIDER
		}
	}

	if(click_lock_t == true){
		if(click_slider_v_btn == true){
			update_value = slider_m_val * slider_t_val * 8.3145 / (slider_v_val * (10**5) ) ;
			P_val = update_value;
			// console. log(update_value)
			update_value = outRange(update_value , 0 , 5.5)
			slider_pX = map(update_value , 0.5 , 5.5 , 1660 , 2487) - RADIUS_SLIDER
		}
		if(click_slider_p_btn == true){
			update_value = slider_m_val * slider_t_val * 8.3145 / (slider_p_val * (10**5)) ;
			V_val = update_value;
			// console. log(update_value)
			update_value = outRange(update_value , 0 , 0.055)
			slider_vX = map(update_value , 0 , 0.055 , 1660 , 2487) - RADIUS_SLIDER
		}
	}

	if(click_lock_v == true){
		if(click_slider_p_btn == true){
			update_value = slider_p_val * (10**5) * slider_v_val / ( slider_m_val * 8.3145);
			T_val = update_value;
			// console. log(update_value)
			update_value = outRange(update_value , 223 , 323)
			// slider_tX = map(update_value , 233 , 313 , 1660 , 2487) - RADIUS_SLIDER
			slider_tX = map(update_value , 223 , 323 , 1660 , 2487) - RADIUS_SLIDER
		}
		if(click_slider_t_btn == true){
			update_value = slider_m_val * slider_t_val * 8.3145 / (slider_v_val * (10**5) ) ;
			P_val = update_value;
			update_value = outRange(update_value , 0.5 , 5.5)
			// console. log(update_value , slider_v_val , slider_m_val)
			slider_pX = map(update_value , 0.5 , 5.5 , 1660 , 2487) - RADIUS_SLIDER
		}
	}

	// change in mole
	if(click_slider_m_btn == true){
		if(click_lock_p == true || click_lock_t == true){  //lock P
			// if lock p is true then change the position of the volume 
			update_value = slider_m_val * slider_t_val * 8.3145 / (slider_p_val * (10**5)) ;
			V_val = update_value;
			update_value = outRange(update_value , 0 , 0.055)
			// console. log(update_value)
			slider_vX = map(update_value , 0 , 0.055 , 1660 , 2487) - RADIUS_SLIDER
		}
		if ( click_lock_v ==true) {
			update_value = slider_p_val * (10**5) * slider_v_val / ( slider_m_val * 8.3145);
			// console. log(update_value)
			T_val = update_value;
			update_value = outRange(update_value , 223 , 323)
			slider_tX = map(update_value , 223 , 323 , 1660 , 2487) - RADIUS_SLIDER
		}
	}
}

function getValue(){
	if(click_slider_p_btn == true){
		P_val = map( slider_pX + (slider_pW / 2)  , slider_p_points[0] , slider_p_points[10] , 0.5 , 5.5)
	}
	if(click_slider_v_btn == true){
		V_val = map( slider_vX + (slider_vW / 2)  , slider_v_points[0] , slider_v_points[11] , 0.000 , 0.055)	
	}
	if(click_slider_t_btn == true){
		// T_val = map( slider_tX + (slider_tW / 2)  , slider_t_points[0] , slider_t_points[8] , 233 , 313)
		T_val = map( slider_tX + (slider_tW / 2)  , slider_t_points[0] , slider_t_points[10] , 223 , 323)
	}
	slider_m_val = map( slider_mX + (slider_mW / 2)  , slider_m_points[0] , slider_m_points[3] , 0.5 , 2)
	slider_p_val = map( slider_pX + (slider_pW / 2)  , slider_p_points[0] , slider_p_points[10] , 0.5 , 5.5)
	slider_v_val = map( slider_vX + (slider_vW / 2)  , slider_v_points[0] , slider_v_points[11] , 0.000 , 0.055)
	// slider_t_val = map( slider_tX + (slider_tW / 2)  , slider_t_points[0] , slider_t_points[8] , 233 , 313)
	slider_t_val = map( slider_tX + (slider_tW / 2)  , slider_t_points[0] , slider_t_points[10] , 223 , 323)	

	// NUMBER -> STRING
	slider_m_val_str = slider_m_val. toFixed(1). replace("." , ","). replace(",0" , "") + "&nbsp;";
	slider_p_val_str = slider_p_val. toFixed(2). replace("." , ","). replace(",00" , ""). replace(",10" , ",1"). replace(",20" , ",2"). replace(",30" , ",3"). replace(",40" , ",4"). replace(",50" , ",5"). replace(",60" , ",6"). replace(",70" , ",7"). replace(",80" , ",8"). replace(",90" , ",9") +"&times10<sup>5</sup>" + "&nbsp;";
	slider_v_val_str = slider_v_val. toFixed(3). replace("." , ",") + "&nbsp;";
	slider_t_val_str = slider_t_val. toFixed() + "&nbsp;";

	// DEG OF NEEDLE
	p_needle_deg = map(slider_p_val , 0.5 , 5.5 , -120 , 120);
	t_needle_deg = map(slider_t_val , 223 , 323 , -120 , 120);

	current_piston = map(slider_v_val , 0 , 0.055 , MIN_PISTON , MAX_PISTON)
}

function outRange(val, start , end){
	if(val < start ){
		return  (start) ;
	}
	if( val > end){
		return (end);
	}
	return val;
}

function reset_element(){

	amount_atom = 40

	clickInst = false;
	click_lock_p = false;
	click_lock_v = false;
	click_lock_t = false;
	click_slider_m_btn = false;
	click_slider_p_btn = false;
	click_slider_v_btn = false;
	click_slider_t_btn = false;
	click_B_law = false;
	click_G_law = false;
	click_C_law = false;
	text_popup_show = true;

	T_val = 273;
	P_val = 1;
	V_val = 0.022698585 //0.023;
	p_needle_deg = -120;
	t_needle_deg = -120;
	current_piston = 0;

	amount_atom_in_pipe = 0
	amount_atom_in_glass = 0

	// // InPipe= [];
	// // InGlass = [];
	// Atom_current_index = [];

	slider_mX = slider_m_points[1] - RADIUS_SLIDER, slider_mY = 236 + y_off_const -22 , slider_mW = 61 , slider_mH = 61;
	slider_pX = slider_p_points[1] - RADIUS_SLIDER + 5, slider_pY = 448 + y_off_const -22 , slider_pW = 61 , slider_pH = 61;
	// slider_vX = slider_v_points[1] - RADIUS_SLIDER, slider_vY = 660 + y_off_const -22 , slider_vW = 61 , slider_vH = 61;
	slider_vX = map(0.022698585 , 0 , 0.055 , 1660 , 2487) - RADIUS_SLIDER, slider_vY = 660 + y_off_const -22 , slider_vW = 61 , slider_vH = 61;
	slider_tX = slider_t_points[5] - RADIUS_SLIDER + 5, slider_tY = 876 + y_off_const -22 , slider_tW = 61 , slider_tH = 61;

	// lock_p_btn. style("background-image" , )
	lock_p_btn. style("background-image" , "url('img/unlock.png')");
	lock_t_btn. style("background-image" , "url('img/unlock.png')");
	lock_v_btn. style("background-image" , "url('img/unlock.png')");
	// lock_p_btn. style("opacity" , "0.5")
	// lock_t_btn. style("opacity" , "0.5")
	// lock_v_btn. style("opacity" , "0.5")

	for(var i = 0; i < 80 ; i++){
		InPipe[i] = false;
		InGlass[i] = false;
		Atom_current_index[i] = 0
	}	
	trmp_i=0;
	clearInterval(myVar)
	move_direction = "bottel->glass"
	var myVar = setInterval( function (){
			if(trmp_i >= amount_atom){
				clearInterval(myVar)
			}else{
				InPipe[i] = false
				InPipe[trmp_i] = true
				// console. log("okay" , InPipe[trmp_i] )
				trmp_i++;
			}
			console. log(trmp_i , amount_atom)
	} , time_move_atom)


	lock_flag = false;

	clearTimeout(pop);
	pop =  setTimeout( function (){
					text_popup_show = false
	} , TIME_POPUP); //reset time 

	// console. log(InPipe)
	SLIDER_P. style("opacity" , "1");
	SLIDER_P. style("pointer-events" , "auto")
	SLIDER_V. style("opacity" , "1");
	SLIDER_V. style("pointer-events" , "auto")
	SLIDER_T. style("opacity" , "1");
	SLIDER_T. style("pointer-events" , "auto")

}
function lockTemprature(){
	clickInst = false
	lock_flag = true
	text_popup_show = false
	
	slider_p_btn. style("pointer-events" , "auto");
	slider_v_btn. style("pointer-events" , "auto");
	slider_t_btn. style("pointer-events" , "none");
	slider_t_b. style("pointer-events" , "none");

	lock_p_btn. style("cursor" , "pointer");
	lock_v_btn. style("cursor" , "pointer");
	lock_t_btn. style("cursor" , "default");
	// lock_p_btn. style("opacity" , "0.5");
	// lock_v_btn. style("opacity" , "0.5");
	// lock_t_btn. style("opacity" , "1");
	click_lock_p = false;
	click_lock_v = false;
	click_lock_t = true;
	lock_p_btn. style("background-image" , "url('img/unlock.png')");
	lock_v_btn. style("background-image" , "url('img/unlock.png')");
	lock_t_btn. style("background-image" , "url('img/Lock.png')");

	SLIDER_P. style("opacity" , "1");
	SLIDER_P. style("pointer-events" , "auto");
	SLIDER_V. style("opacity" , "1");
	SLIDER_V. style("pointer-events" , "auto");
	SLIDER_T. style("opacity" , "0.5");
	SLIDER_T. style("pointer-events" , "none")

}
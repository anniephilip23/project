function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get('https://api.covid19india.org/data.json'))
var arra = json_obj.statewise
/// on load function
function myfunction(){
  var divmain1 = document.createElement("div");
  divmain1.className ="row";
  var div1 = document.createElement("div");
    div1.className ="col-sm-10" 
   div1.style ="text-align:center; margin-top: 2%;font-weight: bold; font-family: system-ui; padding-top:30px; height: 30%; color: rgb(19, 216, 200);margin-bottom: 2%;";
    var heading = document.createElement("h1")
    heading.innerHTML = "COVID19 INDIA"
    div1.appendChild(heading);
    var div11 = document.createElement("div");
    div11.className ="col-sm-2" 
    div11.style = "height: 30%;text-align:center;margin-top: 2%;margin-bottom: 2%;"
    var home =  document.createElement("img")
    home.src ="https://i.ya-webdesign.com/images/black-house-png.png";
    home.style = "height: 20%;width: 20%;"
    home.className= "img-fluid"
    home.setAttribute("onclick", "upDate("+ 0 +")")
    div11.appendChild(home)
    divmain1.appendChild(div1)
    divmain1.appendChild(div11)
    var divmain2 = document.createElement("div");
    divmain2.className ="row";
    var divmain3 = document.createElement("div");
    divmain3.className ="col-sm-8" 
    divmain3.style ="text-align:center;justify-content: center;"
    //"display: flex; width:60%;flex-direction: column;"
    var divx = document.createElement("div");
    divx.className ="row";
    divx.style="justify-content: space-evenly;"
    var text1 = document.createElement("h5")
    text1.innerHTML = "Click on the state to know covid19 details for that state"
    text1.style="font-family: cursive;margin: 2%; color: white;"
    var div21 = document.createElement("div");
    div21.style= " display: flex; text-align:center;justify-content: center; margin-top:5%; padding-top:5%;"
    var imag = document.createElement("img")
    imag.src= "http://www.pngmart.com/files/7/India-Map-PNG-Pic.png"
   //imag.src= "https://www.seekpng.com/png/full/213-2139430_india-map-png-background-image-kerala-in-india.png"
   // imag.className= "img-fluid"
   //imag.style = "width:25%; height:25%;";
    imag.id ="mapp"
    imag.useMap ="#workmap"
    var mapp = document.createElement("map");
    mapp.name="workmap";
    // cooridinates for mapping
  var mapArr =[{1:"112,452,125,439,156,403,166,418,167,422,199,430,222,417,235,427,299,420,304,440,306,468,311,478,299,497,286,474,259,472,249,464,228,508,195,531,175,526,174,542,143,553,143,578,124,570,105,449,105,449"},
  {2:"18,393,0,347,73,326,122,339,153,384,146,397,145,408,136,416,148,420,135,430,136,441,136,441,125,442,124,457,110,453,98,394,99,421,61,436,54,430"},
  {3:"216,222,221,222,231,234,226,240,215,232,212,232,220,223,217,221"},
  {4:"192,688,222,684,227,657,248,653,274,647,286,640,300,629,298,661,282,679,289,725,262,733,273,755,242,764,219,787,210,766,220,744,211,719,206,724,204,706,195,693"},
  {5:"40,274,72,329,126,343,154,383,166,349,167,328,189,334,186,359,201,346,219,352,216,331,226,323,225,320,204,315,209,299,222,295,251,280,225,276,234,267,224,254,215,254,217,245,208,249,201,242,196,254,194,241,176,208,164,206,160,190,150,185,109,225,90,244,62,243,46,258"},
  {6:"167,333,164,365,143,401,174,425,207,430,220,415,233,416,233,424,277,419,305,424,321,394,335,389,343,371,331,364,329,357,358,359,358,348,358,335,348,338,319,320,312,330,301,324,295,322,291,314,286,326,272,322,262,316,260,311,258,330,266,350,246,344,250,316,270,294,261,275,251,276,205,308,207,317,218,320,226,318,225,327,207,331,220,338,214,343,212,349,195,347,190,362,175,351,187,354,190,334,175,332,175,325,169,329,166,325"},
  {7:"235,187,230,182,245,191,243,211,254,204,263,210,380,265,396,286,382,288,404,307,372,320,375,340,365,357,358,353,356,335,344,335,322,321,308,326,295,320,284,326,266,316,257,316,252,343,247,330,250,315,267,308,274,297,267,282,255,276,235,275,228,257,228,231,223,202,239,183,231,181,231,181"},
  {8:"219,570,209,590,216,598,205,607,212,627,234,627,256,649,280,647,299,631,298,566,315,577,328,558,352,556,359,532,418,481,391,491,378,485,365,500,370,507,350,501,352,510,317,522,224,575"}
  ,{9:"150,190,166,141,202,129,192,141,209,161,217,176,211,193,196,200,180,202,160,193"},
  {10:"436,373,460,351,472,352,483,330,477,311,483,303,476,288,483,279,482,267,479,263,479,261,501,263,528,276,525,292,516,292,504,286,494,284,485,294,507,312,486,327,502,341,510,370,515,391,520,406,494,409,477,415,448,384,451,383"},
  {11:"226,526,237,481,249,465,247,462,269,476,289,475,296,501,305,501,319,524,223,575"},
  {12:"189,128,144,107,141,64,161,55,125,28,150,8,189,3,231,42"},
  {13:"154,656,137,600,144,573,146,551,177,540,184,527,197,534,224,503,230,517,224,568,226,574,215,570,214,591,205,605,217,625,255,649,223,660,226,678,209,686,197,686,164,659"},
  {14:"163,194,175,197,180,204,197,200,205,185,213,192,218,171,232,185,239,186,218,202,225,221,215,229,221,240,232,242,226,253,219,256,212,240,204,242,202,254,192,238,180,222,178,208,163,209"},
  {15:"376,338,371,322,400,307,392,297,384,282,395,278,382,258,414,275,491,284,476,303,487,310,463,320,462,333,447,334,450,341,431,331,418,342,400,343,393,338"},
  {16:"153,655,197,687,208,728,217,724,214,783,186,741,179,700,165,680"},
  {17:"475,413,455,430,467,439,445,467,411,486,388,494,381,483,366,501,361,506,351,501,344,521,324,516,351,484,337,464,339,460,359,468,351,454,360,428,369,434,389,395,412,395,417,404,434,404,443,405,439,390,455,397"},
  {18:"373,357,380,337,408,345,430,339,427,327,453,343,456,335,467,335,467,316,482,312,479,350,462,356,444,363,446,366,432,369,450,381,462,401,444,395,432,390,442,405,437,408,416,403,413,391,399,397,388,393,400,382,387,364"},
  {19:""},
  {20:"236,183,243,177,243,158,267,160,279,154,316,188,298,207,292,229,265,217,251,200,248,208,239,204,242,189"},
  {21:"303,433,317,396,337,392,346,368,323,364,332,354,352,355,356,357,375,352,393,373,396,390,386,402,370,433,359,428,348,442,352,466,361,466,359,463,349,463,333,460,348,479,347,491,326,523,326,523,316,520,294,491,304,477,313,481,315,481,303,464,303,442"},
  {22:"529,300,538,268,578,267,620,257,658,226,668,226,669,246,654,254,611,296,617,307,606,331,592,341,584,323,595,312,598,300,580,293,580,287,559,298,541,292,528,296,526,279,537,267"},
  {23:"178,123,228,33,238,43,282,28,301,44,278,94,284,127,265,129,249,120,238,115,223,117,217,107,186,130"},
  {24:"194,136,207,163,212,162,217,176,234,181,242,182,240,167,261,163,267,164,271,159,261,153,255,122,239,117,239,113,228,121,216,107,200,113,189,132"},
  {25:"588,328,562,349,579,375,585,352,591,350"},
  {26:"526,303,546,288,563,299,585,284,581,295,598,302,593,317,589,324,583,311,552,313,529,312"},
  {27:"285,681,291,680,293,670,283,668,282,673,283,677"},
  {28:"122,570,146,575,137,602"},
  {29:"638,345,651,307,639,292,607,312,608,338"},
  {30:"591,339,599,396,621,399,617,340,600,330"},
  {31:"566,246,596,235,586,228,633,193,681,187,676,214,692,222,691,230,694,245,659,262,659,252,670,246,667,226,636,241,621,246,614,264,580,262,573,250"},
  {32:"611,298,659,250,663,261,652,298,622,297,616,311"},
  {33:"478,262,473,257,490,232,509,251,491,268"}]
  // mapping
    for (j = 0; j<mapArr.length; j++) {
        var area = document.createElement("area");
        area.setAttribute ("shape","poly");
        var cord = Object.values(mapArr[j])
        area.coords =cord[0]
        var code = Object.keys(mapArr[j])
        var val = code[0]
        area.setAttribute("onclick", "upDate("+ val +")")
        mapp.appendChild(area)
      }
    divx.appendChild(text1)
    div21.appendChild(imag)
    divmain3.appendChild(divx)
    divmain3.appendChild(div21)
    divmain3.appendChild(mapp)
  var divmain4 = document.createElement("div");
    divmain4.className ="col-sm-4" 
    var div5= document.createElement("div");
    div5.style ="display: flex;flex-direction:row;text-align:center;justify-content: center;margin-bottom:5%;margin-top:5%";
    var text2 = document.createElement("h5")
    text2.style="font-family: cursive;color: white;"
    text2.innerHTML = "last updated on : "
    var text3 = document.createElement("h5")
    text3.style="font-family: cursive;color: white;"
    text3.id = "lastupdatedtime";
    text3.innerHTML = arra[0].lastupdatedtime;
    div5.appendChild(text2)
    div5.appendChild(text3)
    divmain4.appendChild(div5)
    var div6= document.createElement("div");
    div6.style ="display: flex;flex-direction:row;text-align:center;justify-content: center;margin-bottom:10%"
    var text4 = document.createElement("h5")
    text4.style="font-family: cursive;color: white;"
    text4.innerHTML = "India ~   "
    var text5 = document.createElement("h5")
    text5.style="font-family: cursive;color: white;"
    text5.id ="state";
    text5.innerHTML = arra[0].state;
    div6.appendChild(text4)
    div6.appendChild(text5)
    divmain4.appendChild(div6)
    // array for card
    var arr=[{Confirmed:"card text-white bg-info mb-3"},{Active:"card text-white bg-danger mb-3"},{Recovered:"card text-white bg-success mb-3"},{Deaths:"card text-white bg-dark mb-3"}]
    // creating card
    for (i = 0; i<arr.length; i++) {
    var div4 = document.createElement("div");
    div4.className=Object.values(arr[i]);
    div4.style="max-width: 18rem; margin-left:15%;margin-right:20%;margin-bottom:10%"
    var div41 = document.createElement("div");
    div41.className="card-header"
    div41.style="text-align:center;justify-content: center;"
    var heading41 = document.createElement("h5")
    heading41.innerHTML =Object.keys(arr[i])
    var div42 = document.createElement("div");
    div42.className="card-body"
    div42.style="text-align:center;justify-content: center;"
    var para41 = document.createElement("p");
    para41.className="card-text"
    var x = Object.keys(arr[i])
    var strg = x[0].toLowerCase()
    var obj = arra[0]
    para41.id = strg
    para41.innerHTML =obj[strg]
    div41.appendChild(heading41)
    div4.appendChild(div41)
    div42.appendChild(para41)
    div4.appendChild(div42)
    divmain4.appendChild(div4)}
    divmain2.appendChild(divmain4)
    divmain2.appendChild(divmain3)
    document.body.appendChild(divmain1)
    document.body.appendChild(divmain2)
}
// array for mapping state code
var country = [{0:"TT"},{1:"MH"},{2:"GJ"},{3:"DL"},{4:"TN"},{5:"RJ"},{6:"MP"},{7:"UP"},{8:"AP"},{9:"PB"},{10:"WB"},{11:"TG"},{12:"JK"},{13:"KA"},
{14:"HR"},{15:"BR"},{16:"KL"},{17:"OR"},{18:"JH"},{19:"CH"},{20:"UT"},{21:"CT"},
{22:"AS"},{23:"LA"},{24:"HP"},{25:"TR"},{26:"ML"},{27:"PY"},{28:"GA"},{29:"MN"},{30:"MZ"},
{31:"AR"},{32:"NL"},{33:"SK"},{34:""},{35:""},{36:""},{37:""}
]
// function to update data
function upDate(x){
  var stCode = country.filter(function (value){if (x in value){return value}})
  var stCod = Object.values(stCode[0])
  var stco = stCod[0]
  var newobj = arra.filter(function(val) { if(Object.values(val).indexOf(stco) > -1) {return val}  })
 var newObject = newobj[0]
 document.getElementById("confirmed").innerHTML = newObject.confirmed;
 document.getElementById("active").innerHTML = newObject.active;
 document.getElementById("recovered").innerHTML = newObject.recovered;
 document.getElementById("deaths").innerHTML = newObject.deaths;
 document.getElementById("lastupdatedtime").innerHTML = newObject.lastupdatedtime;
 document.getElementById("state").innerHTML = newObject.state;
}

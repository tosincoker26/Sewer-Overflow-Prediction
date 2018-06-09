 var locations = [
["1","0642-01D Station d'épur. CUM - Cdte de dériv. d'urgence",45.6653806815436,-73.4646540034421,1],
["2","0672-01D T.-P. 101è avenue",45.6827137586788,-73.5312939846466,2],
["3","0672-02D S.P. Riv.-des-Prairies - T.P. d'urgence",45.6942020102478,-73.5217279834598,1],
["4","0672-03D Régul. 89è avenue (Montréal)",45.6739282855525,-73.5408183772808,2],
["5","Émissaire d'urgence (801-01D)",45.5204722827374,-73.5262078808267,1],
["6","Entrée de la station (801-02D)",45.5174410472803,-73.528595047527,0],
["7","No 4 (801-03D)",45.5078333701315,-73.528149687734,1],
["8","No 5 (801-04D)",45.5029084877666,-73.5240042308023,0],
["9","Versant est (801-05D)",45.5223260503241,-73.5390915922844,0],
["10","No 1 (801-06D)",45.5223260503241,-73.5390915922844,2],
["11","No 2 (801-07D)",45.5223260503241,-73.5390915922844,0],
["12","Ouest Vieux Fort (801-08D)",45.5223260503241,-73.5390915922844,0],
["13","Terrain Jeux (801-09D)",45.5223260503241,-73.5390915922844,0],
["14","3230-01D Ouv. de régul. St-Jean-Baptiste Nord (RdP)",45.6713753198126,-73.5507192572704,1],
["15","3240-01D S.P. 71è avenue - T.-P. d'urgence",45.6645825624067,-73.5605897644218,1],
["16","3240-02D S.P. 71è Av. - Trop-plein d'orage pompé",45.6645825624067,-73.5605897644218,2],
["17","3240-03D S.P. 71è Av. - Trop-plein d'orage gravitaire",45.6645825624067,-73.5605897644218,1],
["18","3240-04D Trop-plein Rodolphe-Forget-Gouin",45.6536952366673,-73.5835181183469,2],
["19","3240-05D Trop-plein d'urgence Bassin de rétention Perras",45.5118974935891,-73.7545436720545,0],
["20","3250-01D Ouv. de régulation Avenue 54",45.6583648949071,-73.5752923782975,1],
["21","3250-02D Trop-plein Riv-des-Prairies/Henri-Bourassa",45.6583626434178,-73.5752953266139,2],
["22","3260-01D Ouv. de régul. Rodolphe-Forget (41è Av.)",45.6536282553372,-73.5834425736506,2],
["23","3270-01D Ouv. de régulation Avenue 25",45.6441874203693,-73.5982810544546,2],
["24","3275-01D S.P. Av 13. - Trop-plein d'orage gravitaire",45.6373671418393,-73.6075624883131,2],
["25","3275-02D S.P. Av 13. - Trop-plein d'orage pompé",45.6373671418393,-73.6075624883131,2],
["26","3280-01D Ouv. de régulation Marc-Aurèle-Fortin",45.636423801295,-73.6085742634312,2],
["27","3280-02D Trop-plein Renaude-Lapointe/Henri-Bourassa",45.613542608717,-73.5999230493006,0],
["28","3290-01D Ouv. de régulation Langelier",45.6264226124973,-73.6248024365849,0],
["29","3305-01D Racc. Gouin-Langelier",45.6264226124973,-73.6248024365849,1],
["30","3305-02D Racc. Gouin-Rolland",45.6239442960817,-73.6291135066657,1],
["31","3305-03D Ouv. Lacordaire - Trop-plein d'orage",45.6199158303584,-73.6332257372849,0],
["32","3305-04D Ouv. Lacordaire - Trop-plein d'urgence",45.6199158303584,-73.6332257372849,2],
["33","3305-05D Dériv. Gouin-Lanthier",45.6167313984095,-73.6354042851996,1],
["34","3305-06D Dériv. Gouin-Salk",45.6139291091707,-73.6367333111471,2],
["35","3305-07D Dériv. Gouin-Brunet",45.6117325653659,-73.6379883023324,1],
["36","3310-01D Ouv. de régulation Lanthier",45.616788666175,-73.6353714694581,1],
["37","3340-01D Ouv. d'Interc. Plaza",45.5950361591248,-73.6481376309899,0],
["38","3350-01D Ouv. de régulation Lausanne",45.5910682732204,-73.6513643947496,1],
["39","3350-02D Ouv. de racc. Étienne-Brûlé",45.5793552728127,-73.6592425423213,0],
["40","3350-03D Émissaire 07",45.5793552728127,-73.6592425423213,1],
["41","3350-04D Trop-plein Du Pressoir",45.5761770456683,-73.6604167257454,0],
["42","3350-05D Trop-plein Barrage Simon-Sicard",45.5708140797228,-73.6624315092284,1],
["43","3350-06D Trop-plein St-Denis",45.5553544700881,-73.6742298885238,2],
["44","3350-07D Trop-plein Salaberry",45.5476057553905,-73.6919474022914,0],
["45","3350-08D Trop-plein Bohlé",45.5417015873819,-73.7097957292012,0],
["46","3350-08D Trop-plein Bohlé",45.541666908979,-73.7098635964445,0],
["47","3350-09D S.P. Lavigne - Trop-plein d'orage",45.5376927852086,-73.7137900106765,0],
["48","3350-09D S.P. Lavigne - Trop-plein d'orage",45.5377207420386,-73.7137569531746,1],
["50","3350-11D Trop-plein Notre-Dame-de-Grâce",45.5376909824308,-73.7137916684185,2],
["51","3350-11D Trop-plein Notre-Dame-de-Grâce",45.5377133655786,-73.7137557728281,2],
["52","3370-01D Ouv. de régulation Curotte",45.5653527338834,-73.6634972479334,0],
["53","3380-01D Ouv. de régulation Auteuil",45.5548013156888,-73.6748358047897,0],
["54","3390-01D Ouv. de régulation St-Laurent",45.5521561938143,-73.6769762222008,2],
["55","3400-01D Ouv. de régulation Meilleur",45.5495973139504,-73.6820832251513,0],
["56","3400-01D Ouv. de régulation Meilleur",45.5496156578794,-73.6820347453996,1],
["57","3410-02D Trop-plein Décarie-Raimbault",45.541666908979,-73.7098635964445,2],
["58","3450-01D S.P. Saraguay - Trop-plein d'orage pompé",45.5118974935891,-73.7545436720545,2],
["59","3460-01D Ouv. de régulation Pitfield",45.5070592852918,-73.7591975471947,1],
["60","3480-01D Lot 28 - Trop-plein d'urgence",45.5095669109522,-73.7831758080819,1],
["61","3480-02D T.-P. S.P. Spring Garden no 1",45.5097534672873,-73.7826230987575,0],
["62","3480-03D T.-P. S.P. Spring Garden no 2",45.5097534672873,-73.7826230987575,1],
["63","3480-04D T.-P. S.P. Spring Garden no 3",45.5097534672873,-73.7826230987575,0],
["64","3480-05D T.-P. S.P. Spring Garden no 4",45.5097534672873,-73.7826230987575,0],
["65","3490-01D Trop-plein 8è rue/Prince-Edward",45.5156329879445,-73.8132755014038,1],
["66","3490-02D Trop-plein 9è rue/13è avenue",45.5156329879445,-73.8132755014038,0],
["67","3500-01D Ch. de vannes Desjardins - T.-P. d'urgence",45.5129082714788,-73.8488259260633,2],
["68","3500-02D Trop-plein Richer/Allard",45.5166803390219,-73.8268196286409,2],
["69","3500-03D S.P. Fléming/Léger (Pierrefonds)",45.5129082714788,-73.8488259260633,2],
["70","3520-01D Dériv. Bourget",45.4878088789072,-73.8633052621297,2],
["71","3530-01D S.P. Marcellin",45.5035060696381,-73.8620760012134,2],
["72","3540-01D Dériv. St-Martin",45.4791738633407,-73.8746706016104,0],
["73","3540-02D T.-P. Lavigne/Gatien-Claude",45.4870785135434,-73.86689653532,1],
["74","3560-01D Usine de filt. Pierrefonds - T.-P. d'urgence",45.4669939854741,-73.8936103451308,2],
["75","3580-01D P.P. Terrasse Maxime (Marc-Antoine)",45.4083573661028,-73.9572464221934,2],
["76","3750-01D S.P. Hénault",45.608995186739,-73.6399262225254,1],
["77","3762-01D S.P. Ile-de-la-Visitation - T.-P. d'urgence",45.576523734148,-73.661514141332,2],
["78","3767-01D S.P. de St-Réal",45.5459062734461,-73.7021495016805,2],
["79","3768-01D S.P. Bois-de-Boulogne",45.5452949279756,-73.7026554580828,2],
["80","3780-01D S.P. Du Pont",45.4858357054069,-73.8690848394043,1],
["81","3781-01D S.P. Beaulieu",45.4727138349402,-73.877628639521,2],
["82","3782-01D S.P. St-Jean-Baptiste",45.4726410982676,-73.8782085492568,1],
["83","3790-01D S.P. Ste-Anne-de-Bell. - Trop-plein Kent",45.4024131354361,-73.9464959226715,0],
["84","3790-02D S.P. Ste-Anne-de-Bell. - Déviat. d'urgence",45.4022454262252,-73.9460289972006,2],
["85","4210-01D Dériv. Henri-Bourassa",45.6820786236215,-73.4897191146864,1],
["86","4230-01D T.-P. La Gauchetière/40è avenue",45.6588650819734,-73.4889208504608,0],
["87","4230-02D Dériv. Avenue 52 (PAT)",45.6691737711265,-73.4912124446509,1],
["88","4230-03D Dériv. 54è avenue (PAT)",45.6703803243272,-73.4910713315822,1],
["89","4230-04D Dériv. Avenue 55 (PAT)",45.6711980775102,-73.4910708165109,2],
["90","4230-05D Dériv. 57è avenue (PAT)",45.6726804085937,-73.4907404605326,2],
["91","4230-06D Conduite en rive du fleuve - T.-P. d'urgence",45.6820786236215,-73.4897191146864,1],
["92","4230-07D Trop-plein Avenue 81 (PAT)",45.688457471002,-73.4853605974936,1],
["93","4230-08D Trop-plein 93è avenue/Bellerive (PAT)",45.6973535035412,-73.4796840546041,0],
["94","4230-09D SP 96è AVE",45.6989659951695,-73.4799457643984,0],
["95","4240-01D Ouv. de régulation Avenue 24 (PAT)",45.6498598865326,-73.4865379242573,2],
["96","4240-02D Émissaire d'urgence Avenue 24 (PAT)",45.6499299758872,-73.4864819688394,2],
["97","4250-01D Ouv. de régul. St-Jean-Baptiste Sud (PAT)",45.6395517008487,-73.4871393132623,0],
["98","4260-01D Ouv. de régulation Laurendeau",45.6301899762762,-73.4939780637115,2],
["99","4265-01D Ouv. de régulation Richard",45.6259606522636,-73.4968462010833,1],
["100","4270-01D Ouv. de régulation Gonthier - Dériv. Gonthier",45.6109083052319,-73.5069565791895,1],
["101","4270-02D Ouv. de régulation Gonthier - Dériv. Georges V",45.6109083052319,-73.5069565791895,2],
["102","4280-01D Ouv. de régulation Parc Clément-Jetté",45.6014149546458,-73.502646846061,2],
["103","4280-02D TP coll. Mercier",45.5986499031307,-73.509089818655,0],
["104","4290-01D Ouv. de régulation De Boucherville",45.5840967072594,-73.5062752276393,2],
["105","4300-01D Ouv. de régulation Clarence-Gagnon",45.5690770984901,-73.5174008899587,0],
["106","4310-01D Ouv. de régulation Dickson",45.5639868823771,-73.5198587838683,2],
["107","4315-01D Ouv. d'interc. Lot 13",45.5624587360008,-73.521135534143,0],
["108","4317-01D Ouv. d'interc. Viau",45.5540459983047,-73.5230332341237,0],
["109","4320-01D Ouv. de régulation De La Salle",45.5479736827068,-73.5280671345287,0],
["110","4330-01D Joliette - Dériv. Nicolet",45.5407874883955,-73.5349543745453,2],
["111","4330-02D Joliette - Dériv. Dézéry",45.5380709879463,-73.5377255052149,1],
["112","4340-01D Parc Bellerive - Dériv. Mont-Royal",45.525544550553,-73.5432169784026,0],
["113","4340-02D Parc Bellerive - Dériv. Parc Lafontaine",45.525544550553,-73.5432169784026,1],
["114","4340-03D Ouv. de raccordement Papineau",45.5194803873192,-73.5447537454147,1],
["115","4350-01D Ouv. de régulation McGill",45.5000009566767,-73.5523988111171,0],
["116","4360-01D Ouv. de régulation Riverside",45.4916346607152,-73.5495643527454,2],
["117","4370-01D Ouv. de régulation St-Pierre - Bas-niveau",45.4711692775517,-73.559367856796,0],
["118","4370-02D Ouv. de régulation St-Pierre - Haut-niveau",45.4711692775517,-73.559367856796,0],
["119","4370-03D Station de pompage Avenue 48 - pompe #3",45.4359968749383,-73.7093856591804,0],
["120","4370-04D Station de pompage Avenue 48 - pompe #4",45.4359968749383,-73.7093856591804,2],
["121","4370-05D Trop-plein Rockfield",45.4373961335875,-73.6531427533496,2],
["122","4380-01D Ouv. de régulation Rhéaume",45.4696629288373,-73.5563534431022,2],
["123","4390-01D Ouv. d'interc. Ile-des-Soeurs",45.4616933160895,-73.5569192644934,0],
["124","4400-01D Ouv. de régulation Avenue 1",45.4585917885948,-73.5602814216596,2],
["125","4400-02D Trop-plein Beatty/Av. Verdun",45.4500299062245,-73.5665702309477,0],
["126","4420-01D Ouv. de régulation Stephens",45.4424940313537,-73.5749534423804,2],
["127","4420-02D Dériv. Stephens I",45.4424940313537,-73.5749534423804,1],
["128","4420-04D Trop-plein Richard/Boul. Lasalle",45.4479486380386,-73.5687002969263,2],
["129","4430-01D Ouv. de régulation Alepin",45.4322623763532,-73.5876671516922,2],
["130","4430-02D Trop-plein Sénécal/Boul. Lasalle",45.4341195823937,-73.5855344552147,0],
["131","4430-03D Dérivation Canal de l'Aqueduc",45.4145443541486,-73.6290682136038,2],
["132","4430-03D Dérivation Canal de l'Aqueduc",45.414746127964,-73.6303134971214,0],
["133","4430-04D Dérivation Orchard",45.419219950603,-73.6485886095848,1],
["134","4430-04D Dérivation Orchard",45.4195953028221,-73.648917086326,2],
["135","4430-05D Déversoir Highlands",45.4237739855284,-73.6573580090809,1],
["136","4430-06D S.P. Lyette",45.4281143041047,-73.6654135569842,0],
["137","4520-01D S.P. St-Charles",45.4369874981669,-73.7279204940025,0],
["138","4530-02D S.P. no 4 (Dorval) (Bord-du-Lac)",45.4405565150568,-73.7710856384275,2],
["139","4560-01D Trop-plein Chester",45.4476915683232,-73.7850808739822,1],
["140","4560-02D Trop-plein regard 1254",45.4476915683232,-73.7850808739822,2],
["141","4560-03D Trop-plein Vincennes",45.4476915683232,-73.7850808739822,1],
["142","4600-01D Dériv. Victoria I",45.4292577834165,-73.8212945314538,1],
["143","4600-03D Trop-plein Crewe",45.431867682303,-73.8182873995221,0],
["144","4610-01D S.P. no 1",45.4297926270275,-73.8454166099615,2],
["145","4610-06D S.P. no 6  (Amovible)",45.4282975489121,-73.8499297003533,2],
["146","4620-01D S.P. no 7",45.4153120908585,-73.8845495508252,1],
["147","4620-02D S.P. no 9",45.4146923838702,-73.8876834027278,1],
["148","4620-03D S.P. no 10 (Amovible)",45.4146923838702,-73.8876834027278,2],
["149","4620-04D Trop-plein de la Vanne B (anc. Woodland-Lakesh)",45.4154397764617,-73.8839623033296,0],
["150","4620-05D S.P. no 8  (Amovible)",45.4259599782438,-73.8905764043247,1],
["151","4620-06D S.P. no 11 (Amovible)",45.4212023228433,-73.869126808962,2],
["152","4710-01D S.P. 134è avenue (PAT)",45.6980396591723,-73.4966935816307,2],
["153","4710-02D S.P. 134è avenue - Émissaire d'urgence",45.6980396591723,-73.4966935816307,0],
["154","4720-01D S.P. Delphis-Delorme (PAT)",45.7004911983981,-73.4893511699193,2],
["155","4770-01D S.P. Avenue 35 (PAT)",45.6572014572807,-73.4885133896309,1],
["156","4790-01D S.P. Cité du Havre",45.4897238676333,-73.5403481312554,1],
["157","4795-01D S.P. Moffat",45.4496348882409,-73.5668496183518,0],
["158","4795-01D S.P. Moffat",45.4496348882409,-73.5668496183518,0],
["159","4630-01D TP St-Régis",45.4916445406445,-73.7703273154061,0],
["160","4310-02D TP Bombardier",45.6292752609957,-73.6211801929942,1],
["161","4530-03D S.P. Thorncrest",45.4390110549523,-73.7581883469912,0],
["163","4620-07D Woodland",45.4158148508797,-73.8823026266441,0]];

var debordement = ["#439bc8", "#290363","#87001d"]

var fillDebordement = [.5, .75, 1];

var map = L.map('map').setView([45.545322, -73.608923], 10);
        
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        
L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);



    for (var i = 0; i < locations.length; i++) {
      circle = new L.circle([locations[i][2],locations[i][3]],{
        color: debordement[locations[i][4]],
        fillColor: debordement[locations[i][4]],
        fillOpacity: fillDebordement[locations[i][4]],
        radius: 500
      }).addTo(map);
    }
   
   
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["Aucun deversement", "Déversement moins que 30 minutes", "Déversement sévere, plus que 1h"],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + debordement[i] + '"></i> ' +
            grades[i]  + '<br>' ;
    }

    return div;
};

legend.addTo(map);
            
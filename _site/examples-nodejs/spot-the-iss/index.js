var request = require("request");
var IssReader = require('spotthestation-rss-reader');
var fs = require('fs');
var issReader = new IssReader();
var locations = ["Aachen", "Achim", "Amberg", "Augsburg", "Bad Neustadt", "Balve", "Bamberg", "Bayreuth", "Bergisch Gladbach", "Berlin", "Bielefeld", "Birkenfeld", "Bochum", "Bonn", "Bottrop", "Braunschweig", "Bremen", "Bremerhaven", "Buxtehude", "Celle", "Chemnitz", "Cologne", "Columbus Control Center Oberpfaffenhofen", "Cottbus", "Dahlenburg", "Darmstadt", "Deggendorf", "Dortmund", "Dresden", "Duisburg", "Dusseldorf", "Eltville", "Emlichheim", "Erfurt", "Erkelenz", "Erlangen", "Essen", "Flensburg", "Frankfurt am Main", "Frankfurt an der Oder", "Freiburg im Breisgau", "Furth", "Gelsenkirchen", "Giebelstadt", "Giessen", "Gorlitz", "Gottingen", "Greifswald", "Gundelfingen", "Gutersloh", "Hagen", "Halle-Saale", "Hamburg", "Hamm", "Hanau", "Hannover", "Heidelberg", "Heilbronn", "Helmstedt", "Heppenheim", "Herne", "Herrenberg", "Herten", "Hildesheim", "Hof", "Holzkirchen", "Idar-Oberstein", "Ingolstadt", "Isen", "Jena", "Kaiserslautern", "Karlsruhe", "Kassel", "Kempen", "Kiel", "Koblenz", "Konstanz", "Krefeld", "Kropp", "Landau", "Landshut", "Leichlingen", "Leipzig", "Leonberg", "Leverkusen", "Lubeck", "Ludenscheid", "Ludwigshafen", "Luneburg", "Magdeburg", "Mainz", "Mannheim", "Marburg", "Meppen", "Meuselwitz", "Minden", "Moers", "Monchengladbach", "Mulheim", "Munchen", "Munster", "Naumburg", "Netphen", "Neuss", "Neustadt", "Northeim", "Nuremberg", "Nurtingen", "Offenbach", "Oldenburg", "Osnabruck", "Osterhofen", "Paderborn", "Pforzheim", "Potsdam", "Ramstein", "Rastede", "Recklinghausen", "Regensburg", "Remscheid", "Reutlingen", "Rheda-Wdbrck", "Rodgau", "Rostock", "Saarbrucken", "Salzgitter", "Schleswig", "Schwelm", "Senftenberg", "Siegen", "Solingen", "Spangdahlem Air Base", "Stuttgart", "Trier", "Trostberg", "Tubingen", "Ulm", "Villingen", "Walldorf", "Weinheim", "Wiesbaden", "Winsen", "Witten", "Wolfsburg", "Wuerzburg", "Wuppertal"];
var RSS_URI = 'http://spotthestation.nasa.gov/sightings/indexrss.cfm?' + 'country=Germany&region=None&city=';
var i = 0;
var res = [];
var timer = setInterval(function() {
  console.log(i);
  request(RSS_URI + locations[i], function(error, response, body) {
    if (!error && response.statusCode == 200)
      issReader.parseRSS(body, function(err, data) {
        // console.log(data.constructor.name);
        res.push(data);
        i++;
        if (i == 5) {
          fs.writeFile('iss-spotting.json', JSON.stringify(res), 'utf8', function(err) {
            if (err) throw err;
            console.log('wrote data to file');
            clearInterval(timer);
          });
        }
      });
  });
}, 2000);
var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString);
var path = "/customers/customer[1]/city";
var city = xmlDoc.getNoteText(path);
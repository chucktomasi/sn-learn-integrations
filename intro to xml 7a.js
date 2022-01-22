var xmlDoc = new XMLDocument2();
xmlDoc.parseXML(xmlString); 
gs.info(xmlDoc.getNodeText("//two"));
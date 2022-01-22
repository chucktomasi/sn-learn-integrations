var strList = inputs.body.split('\n');

var obj = {
    "first_name" : "",
    "last_name" : "",
    "name" : "",
    "client_id" : "",
    "email" : "",
    "phone" : "",
    "active" : false
};

for (var i = 0; i < strList.length; i++) {

    var part = strList[i].split(':');
    if (part.length != 2) {
        continue;
    }

    switch (part[0]) {
        "first_name":
        "last_name":
        "name":
        "client_id":
        "email":
        "phone":
            obj[part[0]] = part[1];
            break;
        "active":
            obj[part[0]] = part[1] == "true";
            break;
    }

}

outputs.client = obj;

function fillMenu(){
    var positionForm = document.forms["form1"]["option"].value;
    var titleForm = document.forms["form1"]["titleInput"].value;
    var dishForm = document.forms["form1"]["dishInput"].value;
    var priceForm = document.forms["form1"]["priceInput"].value;

    if (positionForm==1){
        //set title
        var table = document.getElementById("tableTL");

        if (titleForm != "") {

            var title = document.createElement("th");

            title.innerHTML = titleForm;

            table.appendChild(title);

        }

        if (dishForm !="" && priceForm!=""){
            var row = document.createElement("tr");

            var tdDish = document.createElement("td");
            var tdSpace = document.createElement("td");
            var tdPrice = document.createElement("td");
            
            tdDish.innerHTML = dishForm;
            tdSpace.innerHTML=" ";
            tdPrice.innerHTML = priceForm;

            row.appendChild(tdDish);
            row.appendChild(tdSpace);
            row.appendChild(tdPrice);

            table.appendChild(row);
        }

    }else if (positionForm==2){

        //set title
        var table = document.getElementById("tableTR");

        if (titleForm != "") {

            var title = document.createElement("th");

            title.innerHTML = titleForm;

            table.appendChild(title);

        }

        if (dishForm !="" && priceForm!=""){
            var row = document.createElement("tr");

            var tdDish = document.createElement("td");
            var tdSpace = document.createElement("td");
            var tdPrice = document.createElement("td");
            
            tdDish.innerHTML = dishForm;
            tdSpace.innerHTML=" ";
            tdPrice.innerHTML = priceForm;

            row.appendChild(tdDish);
            row.appendChild(tdSpace);
            row.appendChild(tdPrice);

            table.appendChild(row);
        }

    }else if (positionForm==3){

        //set title
        var table = document.getElementById("tableBL");

        if (titleForm != "") {

            var title = document.createElement("th");

            title.innerHTML = titleForm;

            table.appendChild(title);

        }

        if (dishForm !="" && priceForm!=""){
            var row = document.createElement("tr");

            var tdDish = document.createElement("td");
            var tdSpace = document.createElement("td");
            var tdPrice = document.createElement("td");
            
            tdDish.innerHTML = dishForm;
            tdSpace.innerHTML=" ";
            tdPrice.innerHTML = priceForm;

            row.appendChild(tdDish);
            row.appendChild(tdSpace);
            row.appendChild(tdPrice);

            table.appendChild(row);
        }

    }else{

        //set title
        var table = document.getElementById("tableBR");

        if (titleForm != "") {

            var title = document.createElement("th");

            title.innerHTML = titleForm;

            table.appendChild(title);

        }

        if (dishForm !="" && priceForm!=""){
            var row = document.createElement("tr");

            var tdDish = document.createElement("td");
            var tdSpace = document.createElement("td");
            var tdPrice = document.createElement("td");
            
            tdDish.innerHTML = dishForm;
            tdSpace.innerHTML=" ";
            tdPrice.innerHTML = priceForm;

            row.appendChild(tdDish);
            row.appendChild(tdSpace);
            row.appendChild(tdPrice);

            table.appendChild(row);
        }

    }
}
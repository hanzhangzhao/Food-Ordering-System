var selectItemN;
var selectItemP;
var title;
var totalP = 0.00;
var items = [];
var itemPs = [];
var curr = null;
var orderCount1 = 0;
var orderCount2 = 0;
var orderCount3 = 0;
var orderCount4 = 0;
		
var numOrders = 0;
var indivItems = 0;
var orders = [];
////////////////////////// GET //////////////////////////
orders[numOrders] = {name: name, order: [], price: 0};
function fillorder(itemname,price,desc,imgname){
    if(title == null){
        title = document.getElementById("itemList1").value;
    }

    // var oitems=document.getElementById("textheaders").value;
    $("#textheaders").text(itemname);
    $("#textdescriptions").text(desc);
    $("#itemprice").text(price);
    //document.getElementById("textdescriptions").html(desc);
    document.getElementById("bigImage").src = "images/"+imgname;
    selectItemN = itemname;
    selectItemP = price;
}		

///////////////////////////// ADD FUNCTION FOR DINERS ///////////////////////////////////
function addCart1(itemname,price){
    if(orderCount1 >= 5){
        window.alert("Sorry, a maximum of 5 items is allowed per custmer currently!")
    }
	else{   		
        if(itemname != null){
            
            var output = "";

            for(var i = 0; i < items.length; i++)
                output += items[i] +"\n";
            
            document.getElementById("itemList1").value = title + "\n" + output;
            
            itemPs.push(selectItemP);
            totalP = 0;
            for(var i = 0; i < itemPs.length; i++)
                totalP = parseFloat(totalP) + parseFloat(itemPs[i]);

            orderCount1++;
            var btn = document.createElement("Button");
            btn.setAttribute("class", "menuitemordered");
            btn.appendChild(document.createTextNode(itemname+". . ."+selectItemP));
            orders[numOrders].order[indivItems++] = itemname+". . ."+selectItemP;
            
            btn.onclick = function(){curr = btn;};	
            document.getElementById("itemList1").appendChild(btn);
            items.push(btn);
        }
    }
}

function addCart2(itemname,price){
    if(orderCount2 >= 5){
        window.alert("Sorry, a maximum of 5 items is allowed per custmer currently!")
    }
	else{   		
        if(itemname != null){
            
            var output = "";

            for(var i = 0; i < items.length; i++)
                output += items[i] +"\n";
            
            document.getElementById("itemList2").value = title + "\n" + output;
            
            itemPs.push(selectItemP);
            totalP = 0;
            for(var i = 0; i < itemPs.length; i++)
                totalP = parseFloat(totalP) + parseFloat(itemPs[i]);

            orderCount2++;
            var btn = document.createElement("Button");
            btn.setAttribute("class", "menuitemordered");
            btn.appendChild(document.createTextNode(itemname+". . ."+selectItemP));
            orders[numOrders].order[indivItems++] = itemname+". . ."+selectItemP;
            
            btn.onclick = function(){curr = btn;};	
            document.getElementById("itemList2").appendChild(btn);
            items.push(btn);
        }
    }
}

function addCart3(itemname,price){
    if(orderCount3 >= 5){
        window.alert("Sorry, a maximum of 5 items is allowed per custmer currently!")
    }
	else{   		
        if(itemname != null){
            
            var output = "";

            for(var i = 0; i < items.length; i++)
                output += items[i] +"\n";
            
            document.getElementById("itemList3").value = title + "\n" + output;
            
            itemPs.push(selectItemP);
            totalP = 0;
            for(var i = 0; i < itemPs.length; i++)
                totalP = parseFloat(totalP) + parseFloat(itemPs[i]);

            orderCount3++;
            var btn = document.createElement("Button");
            btn.setAttribute("class", "menuitemordered");
            btn.appendChild(document.createTextNode(itemname+". . ."+selectItemP));
            orders[numOrders].order[indivItems++] = itemname+". . ."+selectItemP;
            
            btn.onclick = function(){curr = btn;};	
            document.getElementById("itemList3").appendChild(btn);
            items.push(btn);
        }
    }
}

function addCart4(itemname,price){
    if(orderCount4 >= 5){
        window.alert("Sorry, a maximum of 5 items is allowed per custmer currently!")
    }
	else{   		
        if(itemname != null){
            
            var output = "";

            for(var i = 0; i < items.length; i++)
                output += items[i] +"\n";
            
            document.getElementById("itemList4").value = title + "\n" + output;
            
            itemPs.push(selectItemP);
            totalP = 0;
            for(var i = 0; i < itemPs.length; i++)
                totalP = parseFloat(totalP) + parseFloat(itemPs[i]);

            orderCount4++;
            var btn = document.createElement("Button");
            btn.setAttribute("class", "menuitemordered");
            btn.appendChild(document.createTextNode(itemname+". . ."+selectItemP));
            orders[numOrders].order[indivItems++] = itemname+". . ."+selectItemP;
            
            btn.onclick = function(){curr = btn;};	
            document.getElementById("itemList4").appendChild(btn);
            items.push(btn);
        }
    }
}

function select(btn){
	    curr = btn;
}

function remove(){
    if(curr != null){
		orderCount--;
		itemPs.splice(items.indexOf(curr),1);
        items.splice(items.indexOf(curr),1);
        curr.parentNode.removeChild(curr);

        totalP = 0;
		
        for(var i = 0; i < itemPs.length; i++){
			totalP = parseFloat(totalP) + parseFloat(itemPs[i]);
		}
				
		document.getElementById("TOTAL_PRICE_ORDER").value = parseFloat(Math.round(totalP * 100) / 100).toFixed(2);
		document.getElementById("CALCTOTAL_PRICE_ORDER").value =  '$' + parseFloat(Math.round(totalP * 100) / 100).toFixed(2);
		
		orders[numOrders].price = parseFloat(document.getElementById("TOTAL_PRICE_ORDER").value).toFixed(2);
    }
}
    

/////////////forwhom toggle//////////////////
var toggle = function() {
    var mydiv = document.getElementById('forwhom');
    if (mydiv.style.display === 'block' || mydiv.style.display === ''){
        mydiv.style.display = 'none';
    }
    else{
        mydiv.style.display = 'block'
    }
}


$(document).ready(function(){
    
    $("#eventicon1").click(function(){
        $("#enterdinnernum").show();
        $("#fade").show();
    });
    
    $("#numdiner").change(function(e){
        e.stopImmediatePropagation();
        var numd = $('#numdiner').val();
        for (i=1; i <= numd; i++){
            $("#enterdinnernum").append('<div>' + '<div class="nameform" id="nameform">' + '<label>Diner' + i + ":" + '</label>' + "&nbsp" + '<input type="text" name="name" id="namefield" value="" placeholder="Your Name Please"/>' + '</div>' ); 
        }
        $("#enterdinnernum").append('<div>' + '<input type="button" class="nameformsubmit" id="nameformsubmit" value="OK"/>' + '</div>');
 
        
    });
                          
//    $('#nameform').submit(function() {
//    // Get all the forms elements and their values in one step
//        var values = $(this).serialize();
//
//    });
    var nameArr = [];
    $("body").on("click","#nameformsubmit",function(){
       // var na = $('#namefield').val();
        
        var txt = $('#enterdinnernum').find(':text');
        for (var i = 0; i < txt.length; i++) {
            nameArr.push(txt.eq(i).val());
        }
        
        $("#s1").append(nameArr[0]);
        $("#s2").append(nameArr[1]);
        $("#s3").append(nameArr[2]);
        $("#s4").append(nameArr[3]);
        $("#dinerName1").append(nameArr[0]+"'s order")
        $("#dinerName2").append(nameArr[1]+"'s order")
        $("#dinerName3").append(nameArr[2]+"'s order")
        $("#dinerName4").append(nameArr[3]+"'s order")
        
        
        console.info(nameArr);
        if(nameArr.length==0){
            alert("Please enter your names");
        }
        else{
            $("#enterdinnernum").hide();
            $("#fade").hide();
            $("#eventicon1").hide();
            $("#eventicon2").show();
        }
         
        $("#for1").append(nameArr[0]);
        $("#for2").append(nameArr[1]);
        $("#for3").append(nameArr[2]);
        $("#for4").append(nameArr[3]);
    });
    
    
    $("#eventicon2").click(function(){
        $("#welcomepage").hide();
        $("#mainpage").show();
        $("#searchbar").show();
        $("body").css("animation","none");
    });
    
    //console.log($("#textdescriptions").text());
    
    $("#orderButton").click(function(){
        $("#forwhom").toggle();
    });



    /////////////////////////////////////////////////////////////////////
    
    
    ///////////////////////////////////////////////////////////////////////////////////////
//    function getItemPicture( categoryNum, itemNum, target ) {
//        var z= "";
//        z += jsonDEMO2[categoryNum].category[itemNum].image;
//        document.getElementById(target).src = z; 
//    }
//
//    /*  get the item name of a dish from an external file
//        categoryNum - position of a category in the external file
//        itemNum - position of a dish under a category in the external file
//        target - id of an element where the item name goes
//    */
//
//
//    function getItem( categoryNum, itemNum, target )
//    {
//        var z= "";
//        z += jsonDEMO2[categoryNum].category[itemNum].item + "<br>";
//        document.getElementById(target).innerHTML = z; 
//    }
//
//    /*  get the item description of a dish from an external file
//        categoryNum - position of a category in the external file
//        itemNum - position of a dish under a category in the external file
//        target - id of an element where the item description goes
//    */
//
//    function getItemDescription( categoryNum, itemNum, target )
//    {
//        var z= "";
//        z += jsonDEMO2[categoryNum].category[itemNum].description + "<br>";
//        document.getElementById(target).innerHTML = z; 
//    }
//
//    /*  get the sides of a dish from an external file
//        categoryNum - position of a category in the external file
//        itemNum - position of a dish under a category in the external file
//        target - id of an element where the sides goes
//    */
//
//    function getSides( categoryNum, itemNum, target )
//    {
//    // empties the current option list before appending a new batch of options for a new item       
//        document.getElementById(target).options.length = 0; 
//            /* create sides dropdown*/
//        var select = document.getElementById(target);
//        var options = jsonDEMO2[categoryNum].category[itemNum].sides;
//        for(var i = 0; i < options.length; i++) {
//            var opt = options[i];
//            var el = document.createElement("option");
//            el.textContent = opt;
//            el.value = opt;
//            select.appendChild(el);
//        }
//    }
//
//    /*  clear the options for the sides
//        target - id of an element where the sides goes
//    */
//
//    function clearSides( target )
//    { 	
//        document.getElementById(target).options.length = 0;
//    }
//
//    /*  get the extras of a dish from an external file
//        categoryNum - position of a category in the external file
//        itemNum - position of a dish under a category in the external file
//        target - id of an element where the extras goes
//    */
//
//    function getExtras( categoryNum, itemNum, target )
//    {
//            /* empties the checkbox options*/        
//        $('#'+target).empty();   
//
//        var checkBox = document.getElementById(target); 
//        var options = jsonDEMO2[categoryNum].category[itemNum].extras;
//            /* create checkbox*/
//        for(var i = 0; i < options.length; i++) {
//            var input = document.createElement("input"); 
//            var label = document.createElement("label");
//            input.type = "checkbox";
//            input.value = options[i];
//            checkBox.appendChild(input);
//            checkBox.appendChild(label);
//            label.appendChild(document.createTextNode(options[i]));
//            checkBox.appendChild(document.createElement('br'));  
//        } 
//    }
//
//    /*  clear the options for the extras
//        target - id of an element where the extras goes
//    */
//    function clearExtras( target )
//    {
//        $('#'+target).empty();
//    }
//
//    /*  get the price of a dish from an external file
//        categoryNum - position of a category in the external file
//        itemNum - position of a dish under a category in the external file
//        target - id of an element where the price goes
//    */  
//    function getPrice( categoryNum, itemNum, target )
//    {
//        var y = "" + jsonDEMO2[categoryNum].category[itemNum].price;  
//        document.getElementById(target).innerHTML = y;
//    }
//
//    /*  hides a tab when a div that has a close class is clicked
//        target - id of an element that hides
//    */  
//    function hideTab( target )
//    {
//        $('.' + target).hide();
//
//    }
    ///////////////////////////////////////////////////
    
    //assist button toggle    
    $('#ASSIST_BUTTON').click(function() {
        $(this).toggleClass('clicked');
            
        if ($(this).text() == "Request Assistance") {
            $(this).text("Server Alerted");
        } else {
            $(this).text("Request Assistance");
        }
    });
   
    $("#eventicon2").click(function(){
        $("#enternames").show();
        $("#fade").show();
    });

    $('.maincat a.cat').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
  
        
    //sides drop down
    function DropDown(el) {
        this.sdd = el;
        this.placeholder = this.sdd.children('span');
        this.opts = this.sdd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;
            
            obj.sdd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });
            
            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }                      
    $(function() {
        var sdd = new DropDown( $('#sdd') );                       
        $(document).click(function() {
            // all dropdowns
            $('.sides-dropdown').removeClass('active');
        });
    });	

    //extra drop down
    function DropDown(el) {
        this.edd = el;
        this.placeholder = this.edd.children('span');
        this.opts = this.edd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;
            
            obj.edd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });
            
            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }                     
    $(function() {
        var edd = new DropDown( $('#edd') );                       
        $(document).click(function() {
            // all dropdowns
            $('.sides-dropdown').removeClass('active');
        });
    });	
 }) 
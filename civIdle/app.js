// TODO
// finish socialdivision div and dynamic
// tool mechanics X
// Tech Mechanics
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// Polish GameX
// refactor and clean code




// PREGAME FUNCTIONS

const makeBarPercentageDiv = function(percentage, width, parentGetter){
    $(parentGetter).append("<div class=testclass></div>");

    let finalDiv=$(".testclass");
    finalDiv.html("hello world");
    // let finalDiv=document.querySelector(".classtest");
    // finalDiv.css("position", "absolute");
    console.log(finalDiv);
    finalDiv.css("left", "+=100");
    finalDiv.css("top", "+=100");
}

const stringifyDict = function(dict, intermidiary){
    dictKeys=Object.keys(dict);
    text="";
    for(keyNum=0;keyNum<dictKeys.length;keyNum++){
        text+=dictKeys[keyNum] + " " + intermidiary + " " + dict[dictKeys[keyNum]] + " - ";
    }
    return text;
}

const stringifyManydicts=function(metaDict, intermidiary){
    metaDictkeys=Object.keys(metaDict);
    text=""
    for(dictNum=0;dictNum<metaDictkeys.length;dictNum++){
        text+=metaDictkeys[dictNum]+ " " + intermidiary + " " + stringifyManydicts(metaDictkeys[metaDictkeys[dictNum]]);
    }
}






//LISTS

// RESOURCE LISTS
let resourceCategories = ["Food", "Consumption", "Utility", "Construction",
"Metal", "Precious"]
let laborCategories = ["Food Production", "Tool Making", "Construction",
"Utility Making"]

let foodRes=["Fruit", "Roots", "Meat", "Vegetables", "Seeds"];
let consumptionRes=["Water", "Oil", "Herbs"];
let utilityRes=["Leather", "Fiber", "Clay", "Sand", "Resin"];
let constructionRes=["Wood", "Bone", "Stone"];
let metalRes=["Copper", "Tin", "Iron", "Lead"];
let preciousRes=["Gold", "Silver", "Jewels"];

//LABOR LISTS
let foodproductionLabors=["Hunt", "Grow Roots"];
let toolMakingLabors=[];
let constructionLabors=[];
let utilitymakingLabors=[];
// let FoodproductionLabors=[];

// TOOLS LISTS




//BUILDINGS LISTS









// Main style parts
const popbtn=document.querySelector("#pop-btn");
const laborbtn=document.querySelector("#labor-btn");
const admbtn=document.querySelector("#administration-btn");
const specbtn=document.querySelector("#specialized-btn");

const popdiv=document.querySelector("#pop-div");
const labordiv=document.querySelector("#labor-div");
const admdiv=document.querySelector("#administration-div");
const specdiv=document.querySelector("#specialized-div");

const resourcesbtn=document.querySelector("#resources-btn");
const toolsbtn=document.querySelector("#tools-btn");
const buildingsbtn=document.querySelector("#buildings-btn");

const resourcesdiv=document.querySelector("#resources-div");
const toolsdiv=document.querySelector("#tools-div");
const buildingsdiv=document.querySelector("#buildings-div");

const laborOrdersdiv=document.querySelector(".labor-orders");
labordiv.appendChild(laborOrdersdiv);

let styleLaborListDiv = function(){
    laborListdiv.classList.add("labor", "list");
    labordiv.appendChild(laborListdiv);
    laborListdiv.style.position="absolute";
    laborListdiv.style.backgroundColor="#" + "e80909";
    laborListdiv.style.top= 10 + "%";
    laborListdiv.style.bottom= 30 + "%";
}
// const laborListdiv=document.createElement("div");
// styleLaborListDiv();

const laborInfodiv=document.querySelector(".labor-info");
// console.log(laborInfodiv);
// console.log(labordiv.children)
// console.log(laborOrdersdiv.outerHTML)
// let 

// 
// let foodresources_text=document.querySelector(".foodresources-txt")
// let consumptionresources_text=document.querySelector(".consumptionresources-txt")


// /SELECTORS


//NW = WORK-POP
// Useful Collections 
const workbtns=[popbtn, laborbtn, admbtn, specbtn];
const workdivs=[popdiv, labordiv, admdiv, specdiv];
// Useful Collections

//Buttons
popbtn.addEventListener("click", function(){
    Open_WorkWindow(0);
});

laborbtn.addEventListener("click", function(){
    Open_WorkWindow(1);
});

admbtn.addEventListener("click", function(){
    Open_WorkWindow(2);
});

specbtn.addEventListener("click", function(){
    Open_WorkWindow(3);
});






function Resource(name, availability, capacity, resource_categories){
    this.name=name;
    // this.replenish=replenish;
    this.availability=availability;
    this.capacity=capacity;
    this.resource_categories=resource_categories;
    // this.text=this.name + ": " + availability.toString()+ "/" + this.capacity.toString();

    this.getCategories = function(){
        return this.resource_categories;
    }

    this.addPlayer = function(player){
        this.player = player;
        this.player.Stuff.resources.push(this);
    }

    this.updateText = function(){
        this.text=this.name + ": " + this.availability.toString()+
         "/" + this.capacity.toString();
        this.div.innerHTML=this.text;
        // console.log(this.text);
        // console.log(this.availability);
        // console.log(this.div.innerHTML);
    }

    this.createstyleDiv = function(){
        this.div = document.createElement("div");
        this.div.resource=this;
        resourcesdiv.appendChild(this.div);
        this.div.innerHTML=this.name + ": " + availability.toString()+
        "/" + this.capacity.toString();
        this.div.style.display="none";
        // console.log(this.div.style.display);
    }

    this.createstyleDiv();
    this.updateText();

}

// Food
let Fruit = new Resource(name="Fruit",  availability=50, 
capacity=100, resource_categories=["Food"]);
let Meat = new Resource(name="Meat",  availability=20,
 capacity=50, resource_categories=["Food"]);
let Vegetables = new Resource(name="Vegetables",
  availability=20, capacity=50, resource_categories=["Food"]);
let Roots = new Resource(name="Roots",  availability=20,
 capacity=50, resource_categories=["Food"]);
let Seeds = new Resource(name="Seeds",  availability=20,
 capacity=50, resource_categories=["Food"]);

// Consumption
let Water = new Resource(name="Water",  availability=100, 
capacity=200, resource_categories=["Consumption"]);
let Oil = new Resource(name="Oil",  availability=100,
 capacity=200, resource_categories=["Consumption"]);
let Herbs = new Resource(name="Herbs",  availability=100,
 capacity=200, resource_categories=["Consumption"]);

 // let Ink
// 

// Utility
let Leather = new Resource(name="Leather",  availability=100,
 capacity=200, resource_categories=["Utility"]);
let Fiber = new Resource(name="Fiber",  availability=100, 
capacity=200, resource_categories=["Utility"]);
let Clay = new Resource(name="Clay",  availability=100,
 capacity=200, resource_categories=["Utility"]);
let Sand = new Resource(name="Sand",  availability=100,
 capacity=200, resource_categories=["Utility"]);
let Resin = new Resource(name="Resin",  availability=100,
 capacity=200, resource_categories=["Utility"]);

//Construction
let Wood = new Resource(name="Wood",  availability=100, 
capacity=200, resource_categories=["Construction"]);
let Bone = new Resource(name="Bone",  availability=100, 
capacity=200, resource_categories=["Construction"]);
let Stone = new Resource(name="Stone",  availability=100, 
capacity=200, resource_categories=["Construction"]);

// Metal
// Precious
// 
//
//
//
//

function Tool(name, availability, capacity, requirements, cost, toolCategory, labors, inputEffect, outputEffect, durability){
    this.name=name;
    this.availability=availability;
    this.capacity=capacity;
    this.requirements=requirements;
    this.cost=cost;
    this.toolCategory=toolCategory;
    this.labors=labors;
    this.inputEffect=inputEffect;
    this.outputEffect=outputEffect;
    this.durability=durability;
    this.Option=document.createElement("option");
    this.Option.text=this.name;
    this.Option.value=this.name;
    

    this.addPlayer=function(player){
        this.player=player;
        this.player.Stuff.tools.push(this);
        this.player.Population.toolSelect.add(this.Option);
    }

    

}

let noTool = new Tool(name="No Tool", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=["all"], inputEffect=1, outputEffect=1,durability=-1);

let boneSpear = new Tool(name="Bone Spear", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=["Hunt"], inputEffect=0.5, outputEffect=1.00,durability=20); 
let woodenSpear = new Tool(name="Wooden Spear", availability=0,capacity=20,requirements=0,cost={"Wood":2}, toolCategory=0, labors=["Hunt"], quality=0);
let stoneSpear = new Tool(name="Stone Spear", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=["Hunt"], quality=0);
let boneSickle = new Tool(name="Bone Sickle", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=["growVegetables"], quality=0); 
let woodenSickle = new Tool(name="Wooden Sickle", availability=0,capacity=20,requirements=0,cost={"Wood":2}, toolCategory=0, labors=0, quality=0);
let stoneSickle = new Tool(name="Stone Sickle", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let boneAxe = new Tool(name="Bone Axe", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=["fellTrees"], quality=0); 
let woodenAxe = new Tool(name="Wooden Axe", availability=0,capacity=20,requirements=0,cost={"Wood":2}, toolCategory=0, labors=0, quality=0);
let stoneAxe = new Tool(name="Stone Axe", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let bonePickaxe = new Tool(name="Bone Pickaxe", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=0, quality=0); 
let woodenPickaxe = new Tool(name="Wooden Pickaxe", availability=0,capacity=20,requirements=0,cost={"Wood":2}, toolCategory=0, labors=0, quality=0);
let stonePickaxe = new Tool(name="Stone Pickaxe", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let boneHammer = new Tool(name="Bone Hammer", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=0, quality=0); 
let woodenHammer = new Tool(name="Wooden Hammer", availability=0,capacity=20,requirements=0,cost={"Wood":2}, toolCategory=0, labors=0, quality=0);
let stoneHammer = new Tool(name="Stone Hammer", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let boneKnife = new Tool(name="Bone Knife", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Bone":1}, toolCategory=0, labors=0, quality=0); 
let woodenKnife = new Tool(name="Wooden Knife", availability=0,capacity=20,requirements=0,cost={"Wood":2}, toolCategory=0, labors=0, quality=0);
let stoneKnife = new Tool(name="Stone Knife", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);

let trap = new Tool(name="trap", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let fishingNet = new Tool(name="Fishing Net", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let clayVessel = new Tool(name="clay vessel", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let Hoe = new Tool(name="Hoe", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);
let Rope = new Tool(name="Rope", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);

let Forge = new Tool(name="Rope", availability=0,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, toolCategory=0, labors=0, quality=0);



function Building(name, availability, requirements, cost, specalists, effect, buildingCategory){
    this.name=name;
    this.availability=availability;
    this.requirements=requirements;
    this.cost=cost;
    this.specalists=specalists;   
    this.effect=effect;
    this.buildingCategory=buildingCategory;
}

let house = new Building(name="House", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let farm = new Building(name="Farm", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let blacksmith = new Building(name="Blacksmith", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let aqueduct = new Building(name="Aqueduct", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let workerGuild = new Building(name="Worker Guild", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let hunterGuild = new Building(name="Hunter Guild", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let builderGuild = new Building(name="Builder Guild", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let Harbor = new Building(name="Harbor", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);
let townHall = new Building(name="Harbor", availability=10,capacity=20,requirements=0,cost={"Wood":1, "Stone":1}, specialists=0, effect=0, buildingCategory=0);




function population(number, capacity, work, laborOrders, specialists, 
    administration, placeHolder5){
    this.number=number;
    this.capacity=capacity;
    this.work=work;
    this.laborOrders=laborOrders;
    this.specialists=specialists;
    this.administration=administration;
    this.placeHolder5=placeHolder5;
    this.div=document.querySelector("#NW")
    // this.society={"general":{"free":100, "Occupied":0}, "work":{"Hunt":0, "Grow Roots": 0}};
    this.socialDivision={"General":{}, "Labor":{}};
    // this.div=document.createElement("div");
    // this.div.classList.add("pop")
    this.societyDiv=document.querySelector(".society-div");
    this.societyText="Social Division";
    this.generalDiv=document.querySelector(".general-div");
    this.generalDivtext="General-";
    this.laborCategoryselect=document.querySelector("#laborCategory-list")
    this.selectedLaborcategory=this.laborCategoryselect.value;
    this.laborCategoryselect.pop=this;
    this.laborlistSelect=document.querySelector("#labor-list");
    this.selectedLabor=this.laborlistSelect.value;
    this.laborlistSelect.pop=this;
    this.toolSelect=document.querySelector("#laborTool-list");
    this.selectedTool=this.toolSelect.value;
    this.toolSelect.pop=this;
    this.laborersNumberInput=document.querySelector("#laborers-number");
    this.laborersNumberInput.pop=this;
    this.addlaborButton = document.querySelector("#add-labororder");
    this.addlaborButton.pop=this;
    this.addlaborButton.addEventListener("click", function(){
        this.pop.addLaborOrder();
    })
    // this.addlaborButton.addEventListener("click", function(){
    //     let work1=PLAYER.Population.getSelectedWork();
    //     let labnum=laborersNumberInput.value;    
    //     PLAYER.Population.laborOrders.push([work1, labnum]);
    //     tempLaborDiv=document.createElement("div");
    //     laborOrdersdiv.appendChild(tempLaborDiv);
    //     tempLaborDiv.innerHTML = work1.name + " " + labnum;
    //     // console.log(PLAYER.Population.laborOrders);
    // });

    this.makePercentage=function(laborersNumber){
        // return Math.floor(laborersNumber*100/this.getPopulationNumber()).toString();
        return Math.floor(laborersNumber*100/this.getPopulationNumber());
    }

    this.makeLaborOrderDiv=function(usedPercentage, laborersNumber){
        let percentage=this.makePercentage(laborersNumber);
        if(usedPercentage===0){
            usedPercentage=1;
        }

        // CREATE tempDiv with jquery for tooltip method;
        tempDiv=document.createElement("div");
        // tempDiv.classList.add("")
        tempDiv.style.position="absolute";
        tempDiv.style.backgroundColor="#" + "de9097";
        tempDiv.style.bottom= 10 + "%";
        tempDiv.style.top= 6 + "%";     
        tempDiv.style.left= usedPercentage + "%";
        tempDiv.style.width=percentage+"%";
        // tempDiv.addEventListener("hover", )
        // tempDiv.innerHTML="aaa";
        laborOrdersdiv.appendChild(tempDiv);
        // tempDiv.addEventListener("mouseover", function(){
        //     // console.log("banana");
        // })
        return tempDiv;
    }

    this.getPopulationNumber=function(){
        return this.number;
    }

    this.getUsedPercentage=function(){
        previousOrders=this.laborOrders;
        usedPercentage=0;
        for(orderNum=0;orderNum<previousOrders.length;orderNum++){
            usedPercentage+=previousOrders[orderNum][1];
        }
        return usedPercentage;
    }

    this.addLaborOrder=function(){
        usedPercentage=this.getUsedPercentage();
        let labor1=this.getSelectedLabor();
        let laborersNumber=parseInt(this.getLaborersNumber(), 0);
        let laborToolName = this.getToolfromSelect();
        console.log(laborToolName);
        this.laborOrders.push([labor1,laborersNumber,laborToolName]);
        let tempDiv=this.makeLaborOrderDiv(usedPercentage, laborersNumber);
        // tempDiv.tooltip
        // let laborOrderInfo =  $("#labortooltip-text")
        // let laborOrderHover=document.createElement("div");
        // laborOrderInfo=document.createElement("p");
        // laborOrderInfo.innerHTML+="banana";
        // laborOrderHover.appendChild(laborOrderInfo);
        tempDiv.addEventListener("mouseover", function(){
            // console.log(laborOrderInfo.css("visibility"));
            // laborOrderInfo.css("visibility", "visible");
            // console.log(laborOrderInfo.css("visibility"));
        })
    }
    
// WORKING

    this.getSelectedTool=function(){
        return this.getToolfromSelect();
    }

    this.getSelectedLabor=function(){
        return this.getWorkfromName(this.laborlistSelect.value);
    }

    this.getLaborersNumber=function(){
        return this.laborersNumberInput.value;
    }

    this.laborCategoryselect.addEventListener("change", function(){
        this.pop.selectedLaborcategory=this.pop.laborCategoryselect.value;
        this.pop.fillLaborlist(this.pop.selectedLaborcategory);
    })

    this.laborlistSelect.addEventListener("change", function(){
        this.pop.selectedLabor=this.pop.getWorkfromName(this.pop.laborlistSelect.value); 
        this.pop.selectedLabor.fillInfodiv();
    })

    this.toolSelect.addEventListener("change", function(){
        tool=this.pop.getToolfromSelect();
        $(".tool-info").html("tool effect> " + tool.quality);
    })



    this.getToolfromSelect=function(){
        // console.log($("#laborTool-list").val());
        // console.log(val())
        let toolName=$("#laborTool-list").val();
        // console.log($("#laborTool-list").value);
        if(toolName!==undefined){
            // return this.player.Stuff.getToolfromName(toolName);
            return toolName;
        }
        // console.log(toolName);
    }

    this.getLabors=function(category){
        workList=[]
        for(workNum=0;workNum<this.work.length;workNum++){  
            work=this.work[workNum];
            if(work.laborCategory===category){
                workList.push(work);                
            }
        }
        return workList;
    }

    this.fillLaborlist=function(category){
        for(laborNum=0;laborNum<this.work.length;laborNum++){
            this.work[laborNum].Option.disabled=true;
            // this.work[laborNum].Option.hide();
            // console.log(this.work[laborNum].name);
            // console.log(this.work[laborNum].Option.disabled)
        }
        laborCategorylist=this.getLabors(category);
        // console.log(laborCategorylist);
        // console.log(workNum);
        
        for(workNum=0;workNum<laborCategorylist.length;workNum++){
            console.log(workNum);
            console.log(laborCategorylist);
                laborCategorylist[workNum].Option.disabled=false;
        }
    }

    this.getToolsfromlabor=function(laborName){
        playerTools=this.player.Stuff.tools;
        let tools=[];
        // console.log(playerTools);
        for(toolNum=0;toolNum<tools.length;toolNum++){
            if(playerTools[toolNum].tools[0]===laborName){
                tools.push(playerTools[toolNum]);
                console.log(tools);
            }
        }
        return tools;
    }

    this.fillToollist=function(){

    }

    this.getSelectedWork = function(){
        for(worknum=0;worknum<this.work.length;worknum++){
            if(this.work[worknum].selected===true){
                return this.work[worknum];
            }
        }
    }

    this.getWorkfromName=function(workName){
        works=this.work;
        for(workNum=0;workNum<works.length;workNum++){
            // console.log(works[workNum]);
            if(works[workNum].name===workName){
                return works[workNum];
            }
        }
    }

    this.selectWork = function(laborName){
        selectedWork = this.getSelectedWork();
        selectedWork.selected=true;

    }

    this.updateGeneraldivtext=function(){
        this.generalDivtext=stringifyDict(this.socialDivision["General"], ":");
        this.generalDiv.innerHTML=this.generalDivtext;
        // console.log(this.generalDivtext);
    }

    this.makeSocietytext=function(){
        
        this.societyText2=stringifyDict(this.society["work"], ":");
        // socKeys=Object.keys(this.society);
        // for(socKeynum=0; socKeynum<socKeys.length;socKeynum++){
        //     this.societyText+=socKeys[socKeynum] + " : " + 
        //     this.society[socKeys[socKeynum]].toString();
        // }
        return [this.societyText1, this.societyText2];
    }

    this.updateSocietydiv=function(text){
        this.societyDiv.innerHTML=text;
        // console.log(text);
    }

    this.changeCap = function(qtt){
        this.capacity+=qtt;
    }

    this.changePop = function(qtt){
        this.number += qtt; 
    }

    this.addPlayer = function(player){
        this.player = player;
    }

    this.runLabororders = function(){
        for(labordNum=0;labordNum<this.laborOrders.length;labordNum++){
            labOrder=this.laborOrders[labordNum];
            labOrder[0].performLabor(labOrder[1],labOrder[2]);
        }
    }

    this.updateGeneraldiv=function(){

    }

    this.addSocietyinfoGeneral=function(infoName, quantity){
        this.socialDivision["General"][infoName]=quantity;
        // console.log(this.socialDivision["General"])
    }
    this.addSocietyinfoGeneral("Free", 100);
    this.addSocietyinfoGeneral("Occupied", 0);

}

function labor(name, requirements, laborers, inputStuff, outputStuff,
    style, tools, laborCategory){
    this.name=name;
    this.requirements=requirements;
    this.laborers=laborers;
    this.inputStuff=inputStuff;
    this.outputStuff=outputStuff;
    this.tools=tools;
    this.selected=false
    this.style=style;
    this.tools=tools;
    this.laborCategory=laborCategory;
    this.Option=document.createElement("option");
    this.Option.text=this.name;
    this.Option.value=this.name;
    // this.Option.disabled=true;
    
    // this.div=document.createElement("div")
    // this.div.innerHTML=this.name
    // this.div.lab=this;
    // this.div.addEventListener("click", function(){
    //     this.lab.player.deselectLabors();
    //     laborInfodiv.innerHTML="";
    //     this.lab.selected=true;
    //     this.style.color="#ffffff";        
    //     this.lab.fillInfodiv();
    // })
    // laborListdiv.appendChild(this.div);
    
    //workinghere
    this.performLabor = function(numWorkers, toolName){
        // let tool=this.player.Stuff.getToolfromName(toolName);
        let tool=this.player.Stuff.tools.find(tool => {
            return tool.name===toolName;
        })
        
        // console.log(toolName);
        console.log(tool.inputEffect, tool.name);
        // if(tool.quality[0]==="output"){
        //     toolEffect=[1,tool.quality[1]];
        // }else{
        //     toolEffect=[tool.quality[1], 1];
        // }
        if(this.checkInputAll(numWorkers, tool.inputEffect) === true){
            // tool=this.player.Population.getToolsfromlabor(this.name);
            this.consumeInputStuff(numWorkers,tool.inputEffect);
            this.produceOutputStuff(numWorkers,tool.outputEffect);
            console.log("banana");
        }
    }

    this.lookforLabors = function(){

    }

    this.checkInputEach = function(iS,numWorkers, inputEffect){
        tobeChecked=this.inputStuff[iS];
        if(this.player.getResource(tobeChecked[0]).availability
        >=tobeChecked[1]*numWorkers*inputEffect){
            return true;
        }else{
            return false;
        }
    }

    this.checkInputAll = function(numWorkers, inputEffect){
        for(iS=0; iS<this.inputStuff.length; iS++){
            if(this.checkInputEach(iS,numWorkers, inputEffect)===false){
                return false;
            }
        }
        return true;
    }

    this.consumeInputStuff = function(numWorkers, inputEffect){
        for(iS=0; iS<this.inputStuff.length; iS++){
            this.player.getResource(inputStuff[iS][0]).availability-=
            this.inputStuff[iS][1]*numWorkers*inputEffect;
            this.player.getResource(inputStuff[iS][0]).updateText();
        }

        // if(this.checkInputAll() === true){
        //     // var iS;
        //     for(iS=0; iS<this.inputStuff.length; iS++){
        //         this.player.getResource(inputStuff[iS][0]).availability-=
        //         this.inputStuff[iS][1]*numWorkers;
        //         this.player.getResource(inputStuff[iS][0]).updateText();
        //     }
    }

    this.produceOutputStuff = function(numWorkers, outputEffect){

        for(iS=0; iS<this.outputStuff.length; iS++){
            if(this.player.getResource(outputStuff[iS][0]).availability
            +this.outputStuff[iS][1]*numWorkers*outputEffect<=this.player.getResource(outputStuff[iS][0]).capacity){
                this.player.getResource(outputStuff[iS][0]).availability
                +=this.outputStuff[iS][1]*numWorkers*outputEffect;
            }else{this.player.getResource(outputStuff[iS][0]).availability=this.player.getResource(outputStuff[iS][0]).capacity;
            }
            this.player.getResource(outputStuff[iS][0]).updateText();
        }
    }

    this.addPlayer = function(player){
        this.player = player;
        this.player.Population.work.push(this);
        this.player.Population.laborlistSelect.add(this.Option);
        this.player.Tech.technique.laborsExperience[this.name]=0;
        // console.log(this.player.Tech.technique);
    }

    this.fillInfodiv = function(){
        console.log($(".labor-inputinfo").html);
        $(".labor-inputinfo").html("input> " + this.inputStuff);
        $(".labor-outputinfo").html("output> " + this.outputStuff);
    }

}


function LaborOrder(laborName, laborersNum, tools){
    this.laborName=laborName;
    this.laborersNum=laborersNum;
    this.tools=tools;
}


function stuff(resources, tools, buildings){
    this.resources = resources;
    this.tools = tools;
    this.buildings=buildings;

    this.getToolfromName=function(toolName){
        this.tools.find(tool => { 
            console.log("Banana");
            return tool.name=toolName;
        })
        
        for(toolNum=0;toolNum<this.tools.length;toolNum++){
            // console.log(this.tools[toolNum]);
            if(this.tools[toolNum].name===toolName){
                return this.tools[toolNum];
            }
        }
    }

    this.addPlayer = function(player){
        this.player = player;
    }
    this.resources.selector=
    document.querySelector("#resourcelist-selector");
    // this.resources.selection
    this.resources.selector.resources=this.resources;

    this.resources.selector.addEventListener("change", function(){
        let shownCategory=this.value;
        // console.log(this.resources[2].resource_categories[0]
        //     ==shownCategory);
        // console.log(shownCategory);
        // console.log(Oil.resource_categories[0]);
        // console.log(Leather.resource_categories[0]);
        for(resNum=0;resNum<this.resources.length;resNum++){
            // console.log(this.resources[resNum])
            if(this.resources[resNum].resource_categories[0]
                ===shownCategory){
                    this.resources[resNum].div.style.display="block";
                }else{
                    this.resources[resNum].div.style.display="none";
                }
        }
        
        // console.log(this.stuff.resources[2].resource_categories[0]
        //     ==="Food");
        // for(resNum=0;resNum<this.stuff.resources.length;resNum++){
        //     if(this.stuff.resources[resNum].resource_categories===
        //     shownCategory){
        //         this.stuff.resources[resNum].style.display="block";
        //     }else{
        //         this.stuff.resources[resNum].style.display="none";
        //     }
        // }
    });
    
    // ("change", function(){
    //     this.resources.updateDiv();
    //     console.log(this.resources[0]);
    // })

    this.resources.updateDiv = function(){
        let shownCategory=this.selectionbtn.value;
        console.log(shownCategory);
        for(resNum=0;resNum<this.resources.length;resNum++){
            if(this.resources[resNum].resource_categories===
            shownCategory){
                this.resources[resNum].style.display="block";
            }else{
                this.resources[resNum].style.display="none";
            }
        }
    }
    // this.resources.updateDiv();
}

function tech(masters, technique, technology, academia){
    this.masters=masters;
    this.technique=technique;
    this.technology=technology;
    this.academia=academia;

    this.addPlayer = function(player){
        this.player = player;
    }
}

//basically works like an Experience/levelup system
function technique(laborsExperience, toolsExperience){
    this.toolsExperience=toolsExperience;
    this.laborsExperience=laborsExperience;

    // def levelXPs(n):
    // return (n**3)+2*(n**2)+3*n

    this.getLVLfromEXP=function(){
        
    }

    this.changetoolExperience= function(toolName,qtt){
        this.toolsExperience[toolName]+=qtt;
    }
    this.changelaborExperience= function(laborName,qtt){
        this.laborExperience[laborName]+=qtt;
    }

    this.addPlayer=function(player){
        this.player=player;
    }
}


function Player(State, Population, Stuff, Tech, Nature, Prestige){
    this.State=State;
    this.Population=Population;
    this.Stuff=Stuff;
    this.Tech=Tech;
    this.Nature=Nature;
    this.Prestige=Prestige;

    this.getResource = function(resourceName){
        for(resnum=0; resnum<this.Stuff.resources.length;resnum++){
            if(this.Stuff.resources[resnum].name===resourceName){
                return this.Stuff.resources[resnum];
            }
        }
    }

    this.deselectLabors = function(){
        for(worknum=0;worknum<this.Population.work.length;worknum++){
            this.Population.work[worknum].selected=false;
            this.Population.work[worknum].div.style.color="#000000"; 
        }
    }
    this.passTurn = function(){
        this.Population.runLabororders();
        this.Population.laborOrders=[]
        laborOrdersdiv.innerHTML="";    
        // console.log(this.Population.laborOrders);
        // console.log(PLAYER.Stuff.resources);
    };
}





// /NW = WORK-POP

const constructionbtns=[resourcesbtn, toolsbtn, buildingsbtn];
const constructiondivs=[resourcesdiv, toolsdiv, buildingsdiv];

resourcesbtn.addEventListener("click", function(){
    Open_ConstructionWindow(0);
});

toolsbtn.addEventListener("click", function(){
    Open_ConstructionWindow(1);
});

buildingsbtn.addEventListener("click", function(){
    Open_ConstructionWindow(2);
});


// const Open_Populationdiv = function(){
//     console.log("banana");
//     Close_WorkWindows();
//     // console.log(workbtns)
//     // if(popdiv.style.display ==="none"){
//     //     popdiv.style.display="block";
//     //    }else{
//     //     popdiv.style.display="none";
//     }
// // };

const Open_WorkWindow = function(windownumber){
    Close_WorkWindows();
    workdivs[windownumber].style.display="block";
    // console.log(Food_Resources[1].name);
}

const Close_WorkWindows = function(){
    i=0;
    while(i<workdivs.length){
        if(workdivs[i].style.display==="block"){
            workdivs[i].style.display="none";
            // console.log(Food.name);
        };
        i++;
    };
};


const Open_ConstructionWindow = function(windownumber){
    Close_ConstructionWindows();
    constructiondivs[windownumber].style.display="block";
    console.log(Food_Resources[1].name);
}

const Close_ConstructionWindows = function(){
    i=0;
    while(i<constructiondivs.length){
        if(constructiondivs[i].style.display==="block"){
            constructiondivs[i].style.display="none";
            // console.log(Food_Resources[0].name + " " + Food_Resources[0].text);
        };
        i++;
    };
};

let Food_Resources = [];
Food_Resources.push(Fruit, Meat, Vegetables, Roots, Seeds);

let Consumption_Resources = [];
Consumption_Resources.push(Water, Oil, Herbs);

let Utility_Resources = [];
Utility_Resources.push(Leather, Fiber, Clay, Sand, Resin);

let Construction_Resources = [];
Construction_Resources.push(Wood, Bone, Stone);

function Update_FoodResourcesText(){
    i=0
    while(i<Food_Resources.length){
        foodresources_text.innerHTML+=" " + Food_Resources[i].text;
        i++;
    }
};

function Update_ConsumptionResourcesText(){
    i=0
    while(i<Consumption_Resources.length){
        consumptionresources_text.innerHTML+=" " + Consumption_Resources[i].text;
        i++;
    }
};

// function updateResourcetext(resourceName){
//     updatingResource=PLAYER.getResource(resourceName);
//     updatingResource.text=
// }

let Technique = new technique(laborsExperience={},toolsExperience={});

let Population = new population(number=100, capacity=100, work=[], 
    laborOrders=[], administration=0, specialists=0, placeHolder5=0);
let Stuff = new stuff(resources=[], tools=[], buildings=[]);
let Tech = new tech(masters=0, technique=Technique, technology=0, academia=0);


const Hunt = new labor(name="Hunt", requirements=0, laborers="Hunters", 
inputStuff=[["Wood", 1.8], ["Meat", 1.9]], 
outputStuff=[["Meat", 2.4], ["Bone", 0.4]], style=0,
tools=["Bone Spear", "Wooden Spear", "Stone Spear", "trap"], laborCategory="Food");
const growRoots = new labor(name = "Grow Roots", requirements = 0, 
laborers=0, inputStuff=[["Roots", 1.5]], outputStuff=[["Roots", 2.1]], style=0,tools=[], laborCategory="Building");
const plantFruitTrees = new labor(name="Plant Fruit Trees", requirements=0,
laborers=0, inputStuff=[["Seeds", 2.8]], outputStuff=[["Fruit"], 4.2], style=0,tools=[], laborCategory="Tool");
const extractSeeds = new labor(name="Extract Seeds", requirements=0,
laborers=0, inputStuff=[["Fruit", 18], ["Vegetables", 31]], 
outputStuff=[["Seeds"], 73], style=0, tools=[], laborCategory="Food");
const growVegetables = new labor(name="Grow Vegetables", requirements=0,
laborers=0, inputStuff=[["Seeds", 1.9]], outputStuff=[["Vegetables"], 3], style=0, tools=0  , laborCategory="Food");
const gatherWood = new labor(name="Gather Wood", requirements=0,
laborers=0, inputStuff=[["Meat", 0.4]], outputStuff=[["Wood", 0.9]], laborCategory="Food");
const gatherStone = new labor(name="Gather Stone", requirements=0,
laborers=0, inputStuff=[["Meat", 1.2]], outputStuff=[[0.7]], laborCategory="Food");
const fellTrees = new labor(name="Fell Trees", requirements=0,
laborers=0, inputStuff=[["Meat", 2.2]], outputStuff=[["Wood", 4.9]], laborCategory="Food");


const PLAYER = new Player(state=0, Population=Population, Stuff=Stuff, 
    Tech=Tech, Nature=0, Prestige=0);


Population.addPlayer(PLAYER);
Stuff.addPlayer(PLAYER);
Tech.addPlayer(PLAYER);
Hunt.addPlayer(PLAYER);
growRoots.addPlayer(PLAYER);
plantFruitTrees.addPlayer(PLAYER);
extractSeeds.addPlayer(PLAYER);
growVegetables.addPlayer(PLAYER);
gatherWood.addPlayer(PLAYER);
gatherStone.addPlayer(PLAYER);
fellTrees.addPlayer(PLAYER);

noTool.addPlayer(PLAYER);
boneSpear.addPlayer(PLAYER);
boneSickle.addPlayer(PLAYER);
woodenSpear.addPlayer(PLAYER);
stoneSpear.addPlayer(PLAYER);

Stuff.resources.push(Fruit,Meat,Vegetables,Roots,Seeds,Water,Oil,
    Herbs, Leather, Fiber, Clay, Sand, Resin, Wood, Bone, Stone);

const passturnDiv = document.querySelector("#pass-turn");
passturnDiv.addEventListener("click", function(){
    PLAYER.passTurn();
})

PLAYER.passTurn();
// console.log(PLAYER.getResource("Meat"));
// Hunt.performLabor(4);
// console.log(PLAYER.getResource("Meat"));
// console.log(PLAYER.Population.work);

document.onkeydown = function(pressed){
    // https://css-tricks.com/snippets/javascript/javascript-keycodes/
    if(pressed.which===81){
        Open_WorkWindow(0);        
    }
    if(pressed.which===87){
        Open_WorkWindow(1);        
    }

    if(pressed.which===69){
        Open_WorkWindow(2);        
    }

    if(pressed.which===82){
        Open_WorkWindow(3);        
    }

    if(pressed.which===84){
        Open_WorkWindow(4);        
    }

    // if(pressed.which===81){
    //     Open_WorkWindow(0);        
    // }

    // if(pressed.which===81){
    //     Open_WorkWindow(0);        
    // }

    
}

$("#test-btn").on("click", function(){
    // PLAYER.Stuff.getToolfromName("Bone Spear");
    // PLAYER.Population.makeLaborOrderDiv(34);
    // PLAYER.Population.getUsedPercentage();
    // console.log(PLAYER.getResource("Bone").availability);
    // console.log(PLAYER.Population.laborOrders);
    // console.log(PLAYER.Stuff.tools.find(tool =>{
    //     return tool.name==="Bone Spear";
    // }));
    // console.log(PLAYER.Tech);
    makeBarPercentageDiv(0,0,"#SE");
})
PLAYER.Population.updateGeneraldivtext();



















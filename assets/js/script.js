var cardDivGeneric = $(".generic-card");
var cardDivDetailed = $(".detailed-card")
var cardListElement = $(".card-lists");
var columnDivGeneric = $(".columns-generic")
var columnDivDetailed = $(".columns-detailed")
var searchBtn = $("#search-button");

//This creates the cards for the search function
function generateSearchCards(searchData) {
    for(var i = 0; i < searchData.length-1; i++) {
      cardDivGeneric.clone().appendTo(columnDivGeneric);
    }
}


//This creates the cards for the My Plants Page
function generateMyPlantCards() {
 
    for(var i = 0; i < localStorage.length-1; i++) {
      cardDivDetailed.clone().appendTo(columnDivDetailed);
    }
}
generateMyPlantCards();




//This function was created to generate cards that show information based on our fake data 
function generateSearchCardData(searchData) {
    var plantCardId = $(".plant-card-id");
    plantCardId.each(function(index){
        $(this).text(searchData[index].id)
    })

    var plantCardTitle = $(".plantcard-title");
    plantCardTitle.each(function(index){
        $(this).text(searchData[index].common_name)
    })

    var image = $(".img-generic");
    image.each(function(index) {
        if(searchData[index].default_image === null) {
            $(this).attr("src", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
        } else {
            $(this).attr("src", searchData[index].default_image.original_url);
        }
        
    })

    var scientificNameLiElement = $(".scientific-name");
    scientificNameLiElement.each(function(index) {
        $(this).text("Scientific Name: " + searchData[index].scientific_name[0])
    })

    var cycleLiElement = $(".cycle");
    cycleLiElement.each(function(index) {
        $(this).text("Cycle: " + searchData[index].cycle)
    })

    var wateringLiElement = $(".watering");
    wateringLiElement.each(function(index) {
        $(this).text("Watering: " + searchData[index].watering)
    })


};

var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');

});




//This function renders data onto the My Plants Page Cards
function myPlantsPageCardInfo(plantDetails) {

    var detailedPlantCardTitle = $(".plantcard-title-detailed");
    detailedPlantCardTitle.each(function(index){
        
        $(this).text(plantDetails[index].common_name)
    })

    var careLevel = $(".care-level");
    careLevel.each(function(index){
        $(this).text("Care Level: " + plantDetails[index].care_level)
    })
  
    var image = $(".img-detailed");
    image.each(function(index) {
        if(plantDetails[index].default_image === null) {
            $(this).attr("src", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
        } else {
            $(this).attr("src", plantDetails[index].default_image.original_url);
        }
    })
    
    var plantDescription = $(".description");
    plantDescription.each(function(index){
        $(this).text("Description: " + plantDetails[index].description)
    })

    var idDetailed = $(".id-detailed");
    idDetailed.each(function(index){
        $(this).text(plantDetails[index].id)
    })

    var scientificNameDetailed = $(".scientific-name-detailed");
    scientificNameDetailed.each(function(index){
        $(this).text("Scientific Name: " + plantDetails[index].scientific_name[0])
    })

    var family = $(".family");
    family.each(function(index){
        $(this).text("Family: " + plantDetails[index].family)
    })

    var plantType = $(".type");
    plantType.each(function(index){
        $(this).text("Plant Type: " + plantDetails[index].type)
    })

    var cycleDetailed = $(".cycle-detailed");
    cycleDetailed.each(function(index){
        $(this).text("Cycle: " + plantDetails[index].cycle)
    })
    
    var wateringDetailed = $(".watering-detailed");
    wateringDetailed.each(function(index){
        $(this).text("Watering: " + plantDetails[index].watering)
    })

    var depthWaterRequirement = $(".depth-water-requirement")
    depthWaterRequirement.each(function(index) {
        $(this).text("Wather Depth Requirement: " + plantDetails[index].depth_water_requirement.value + " " + plantDetails[index].depth_water_requirement.unit )
    })

    var volumeWaterRequirement = $(".volume-water-requirement")
    volumeWaterRequirement.each(function(index) {
        $(this).text("Wather Volume Requirement: " + plantDetails[index].volume_water_requirement.value + " " + plantDetails[index].volume_water_requirement.unit )
    })

    var wateringPeriod = $(".watering-period")
    wateringPeriod.each(function(index) {
        $(this).text("Water in the " + plantDetails[index].watering_period)
    })

    var wateringGeneralBenchmark = $(".watering-general-benchmark")
    wateringGeneralBenchmark.each(function(index) {
        $(this).text("Water Every " + plantDetails[index].watering_general_benchmark.value + " " + plantDetails[index].watering_general_benchmark.unit )
    })
    
    var sunlight = $(".sunlight")
    sunlight.each(function(index) {
        $(this).text("Sunlight Requirements: " + plantDetails[index].sunlight)
    })
    var pruningMonth = $(".pruning-month")
    pruningMonth.each(function(index) {
        $(this).text("Prune Months: " + plantDetails[index].pruning_month.join(", "))
    })
    var pruningCount = $(".pruning-count")
    pruningCount.each(function(index) {
        $(this).text("Prune amount: " + plantDetails[index].pruning_count.amount + ". Pruning Interval: " + plantDetails[index].pruning_count.interval)
    })
}

//This saves the plant info we want to add to plant page to local storage
function savePlant() {
    $(".save-button").on("click", function() {
        var plantId = $(this).parent().find(".plant-card-id").text();
        var plantName = $(this).parent().find(".plantcard-title").text();

        localStorage.setItem(plantId, plantName);
        $(this).addClass('is-hidden');
    });
}
//This gets the data from API that fills out our search
function getSearchData (keyword, cycleInfo, wateringInfo, sunlightInfo) {
    var searchURL = "https://perenual.com/api/species-list?key=&q=" + keyword + cycleInfo + wateringInfo + sunlightInfo
   return fetch(searchURL)
    .then(function(response) {
        return response.json();
    })
}
//This posts the error message when something goes wrong with the API call
function searchErrorMessage(){
    $(".search-error").removeClass("is-hidden")
    $(".search-alrt").on("click", function() {
        $(".search-error").attr("class", "is-hidden")
    })
}
function generateSearchData(keyword, cycleInfo, wateringInfo, sunlightInfo) {
    getSearchData(keyword, cycleInfo, wateringInfo, sunlightInfo)
        .then(function(data) {
            const basicFlowers = data.data.filter(flower => flower.id <= 3000)
            generateSearchCards(basicFlowers)
            generateSearchCardData(basicFlowers)
        })
        .then(() => {savePlant()})
        .catch(searchErrorMessage)
}
function generateMyPlantsPage() {
    var myPlantList = []
    for(var i = 0; i < localStorage.length; i++) {
        fetch("https://perenual.com/api/species/details/" + localStorage.key(i) + "?key=sk-ne1G64b71de56ecfd1541")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            myPlantList.push(data)
            myPlantsPageCardInfo(myPlantList); 
        })
        .catch(function(){
            $(".plant-page-error").removeClass("is-hidden")
            $(".plant-page-alrt").on("click", function() {
                $(".plant-page-error").attr("class", "is-hidden")
            })
        })
    }
        
}

generateMyPlantsPage();
searchBtn.on("click", function(event) {
    event.preventDefault();
    var keyword = $(".input").val();
    var cycleInfo = $("#cycle").val();
    var wateringInfo = $("#watering").val();
    var sunlightInfo = $("#sunlight").val();
    //clearSeachHistory()
    generateSearchData(keyword,cycleInfo,wateringInfo,sunlightInfo)

    
})

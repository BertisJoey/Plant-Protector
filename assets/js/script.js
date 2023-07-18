var cardDivGeneric = $(".generic-card");
var cardDivDetailed = $(".detailed-card")
var cardListElement = $(".card-lists");
var columnDivGeneric = $(".columns-generic")
var columnDivDetailed = $(".columns-detailed")
var searchBtn = $("#search-button");
var fakePlantListAPI = [
    {
        id: 1,
        common_name: "European Silver Fir",
        scientific_name: [
            "Abies alba"
        ],
        "other_name": [
            "Common Silver Fir"
        ],
        cycle: "Perennial",
        watering: "Frequent",
        "sunlight": [],
        default_image: {
            "image_id": 9,
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            original_url: "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
            regular_url: "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    },
    {
        id: 2,
        common_name: "Pyramidalis Silver Fir",
        scientific_name: [
            "Abies alba 'Pyramidalis'"
        ],
        cycle: "Perennial",
        watering: "Frequent",
        "sunlight": [],
        "other_name": null,
        default_image: {
            "image_id": 9,
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
            regular_url: "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    },
    {
        id: 3,
        common_name: "Pyramidalis Silver Fir 3",
        scientific_name: [
            "Abies alba 'Pyramidalis2'"
        ],
        cycle: "Perennial 2",
        watering: "Frequent2 ",
        "sunlight": [],
        "other_name": null,
        default_image: {
            "image_id": 9,
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
            regular_url: "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    },
    {
        id: 4,
        common_name: "Pyramidalis Silver Fir 4",
        scientific_name: [
            "Abies alba 'Pyramidalis3'"
        ],
        cycle: "Perennial3",
        watering: "Frequent3",
        "sunlight": [],
        "other_name": null,
        default_image: {
            "image_id": 9,
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
            regular_url: "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    }
]

var fakePlantDetailAPI = [
    {
        id: 1,
        common_name: "European Silver Fir",
        scientific_name: [
            "Abies alba"
        ],
        other_name: [
            "Common Silver Fir"
        ],
        family: "hey!",
        origin: null,
        type: "tree",
        dimensions: {
            "type": null,
            "min_value": 1,
            "max_value": 1.5,
            "unit": "feet"
        },
        cycle: "Perennial",
        watering: "Frequent",
        depth_water_requirement: {
            unit: "mm",
            value: "50"
        },
        volume_water_requirement: {
            unit: "feet",
            value: "1"
        },
        watering_period: "morning",
        watering_general_benchmark: {
            value: "5-7",
            unit: "days"
        },
        plant_anatomy: {
            bark:"brown",
            leaves:"green"
        },
        sunlight: [
            "Part shade"
        ],
        pruning_month: [
            "March",
            "April"
        ],
        pruning_count: {
            amount: 1,
            interval: "yearly"
        },
        "seeds": 0,
        "attracts":[
          "bees",
          "birds",
          "rabbits"
        ],
        "propagation":[
            "seed",
            "cutting"
        ],
        "hardiness": {
            "min": "7",
            "max": "7"
        },
        "flowers": true,
        "flowering_season": "Spring",
        "color": "",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "soil": [],
        "pest_susceptibility": null,
        "cones": true,
        "fruits": false,
        "edible_fruit": false,
        "fruit_color": null,
        "fruiting_season": null,
        "harvest_season": null,
        "harvest_method": "cutting",
        "leaf": true,
        "leaf_color": [
            "green"
        ],
        "edible_leaf": false,
        "growth_rate": "High",
        "maintenance": "Low",
        "medicinal": true,
        "poisonous_to_humans": false,
        "poisonous_to_pets": false,
        "drought_tolerant": false,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "rare": false,
        "rare_level": "3",
        "tropical": false,
        "cuisine": false,
        "indoor": false,
        care_level: "Medium",
        description: "Amazing garden plant that is sure to capture attention...",
        default_image: {
          "image_id": 9,
          "license": 5,
          "license_name": "Attribution-ShareAlike License",
          "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
          "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
          regular_url: "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
          "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
          "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
          "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    },
    {
        id: 2,
        common_name: "European Silver Fir",
        scientific_name: [
            "Abies alba"
        ],
        other_name: [
            "Common Silver Fir"
        ],
        family: "",
        origin: null,
        type: "tree",
        dimensions: {
            "type": null,
            "min_value": 1,
            "max_value": 1.5,
            "unit": "feet"
        },
        cycle: "Perennial",
        watering: "Frequent",
        depth_water_requirement: {
            unit: "mm",
            value: "50"
        },
        volume_water_requirement: {
            unit: "feet",
            value: "1"
        },
        watering_period: "morning",
        watering_general_benchmark: {
            value: 5-7,
            unit: "days"
        },
        plant_anatomy: {
            bark:"brown",
            leaves:"green"
        },
        sunlight: [
            "Part shade"
        ],
        pruning_month: [
            "March",
            "April"
        ],
        pruning_count: {
            "amount": 1,
            "interval": "yearly"
        },
        "seeds": 0,
        "attracts":[
          "bees",
          "birds",
          "rabbits"
        ],
        "propagation":[
            "seed",
            "cutting"
        ],
        "hardiness": {
            "min": "7",
            "max": "7"
        },
        "flowers": true,
        "flowering_season": "Spring",
        "color": "",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "soil": [],
        "pest_susceptibility": null,
        "cones": true,
        "fruits": false,
        "edible_fruit": false,
        "fruit_color": null,
        "fruiting_season": null,
        "harvest_season": null,
        "harvest_method": "cutting",
        "leaf": true,
        "leaf_color": [
            "green"
        ],
        "edible_leaf": false,
        "growth_rate": "High",
        "maintenance": "Low",
        "medicinal": true,
        "poisonous_to_humans": false,
        "poisonous_to_pets": false,
        "drought_tolerant": false,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "rare": false,
        "rare_level": "3",
        "tropical": false,
        "cuisine": false,
        "indoor": false,
        care_level: "Medium",
        description: "Amazing garden plant that is sure to capture attention...",
        "default_image": {
          "image_id": 9,
          "license": 5,
          "license_name": "Attribution-ShareAlike License",
          "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
          "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
          "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
          "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
          "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
          "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    },
    {
        id: 3,
        common_name: "European Silver Fir",
        scientific_name: [
            "Abies alba"
        ],
        other_name: [
            "Common Silver Fir"
        ],
        family: "",
        origin: null,
        type: "tree",
        dimensions: {
            "type": null,
            "min_value": 1,
            "max_value": 1.5,
            "unit": "feet"
        },
        cycle: "Perennial",
        watering: "Frequent",
        depth_water_requirement: {
            unit: "mm",
            value: "50"
        },
        volume_water_requirement: {
            unit: "feet",
            value: "1"
        },
        watering_period: "morning",
        watering_general_benchmark: {
            value: 5-7,
            unit: "days"
        },
        plant_anatomy: {
            bark:"brown",
            leaves:"green"
        },
        sunlight: [
            "Part shade"
        ],
        pruning_month: [
            "March",
            "April"
        ],
        pruning_count: {
            "amount": 1,
            "interval": "yearly"
        },
        "seeds": 0,
        "attracts":[
          "bees",
          "birds",
          "rabbits"
        ],
        "propagation":[
            "seed",
            "cutting"
        ],
        "hardiness": {
            "min": "7",
            "max": "7"
        },
        "flowers": true,
        "flowering_season": "Spring",
        "color": "",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "soil": [],
        "pest_susceptibility": null,
        "cones": true,
        "fruits": false,
        "edible_fruit": false,
        "fruit_color": null,
        "fruiting_season": null,
        "harvest_season": null,
        "harvest_method": "cutting",
        "leaf": true,
        "leaf_color": [
            "green"
        ],
        "edible_leaf": false,
        "growth_rate": "High",
        "maintenance": "Low",
        "medicinal": true,
        "poisonous_to_humans": false,
        "poisonous_to_pets": false,
        "drought_tolerant": false,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "rare": false,
        "rare_level": "3",
        "tropical": false,
        "cuisine": false,
        "indoor": false,
        care_level: "Medium",
        description: "Amazing garden plant that is sure to capture attention...",
        "default_image": {
          "image_id": 9,
          "license": 5,
          "license_name": "Attribution-ShareAlike License",
          "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
          "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
          "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
          "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
          "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
          "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    }
];

//This creates the cards for the search function
var generateCards = function() {
 
    for(var i = 0; i < fakePlantListAPI.length-1; i++) {
      cardDivGeneric.clone().appendTo(columnDivGeneric);
    }
}
generateCards();

//This creates the cards for the My Plants Page
var generateMyPlant = function() {
 
    for(var i = 0; i < fakePlantDetailAPI.length-1; i++) {
      cardDivDetailed.clone().appendTo(columnDivDetailed);
    }
}
generateMyPlant();




//This function was created to generate cards that show information based on our fake data 
var generateFakeCard = function() {
    var plantCardId = $(".plant-card-id");
    plantCardId.each(function(index){
        $(this).text(fakePlantListAPI[index].id)
    })

    var plantCardTitle = $(".plantcard-title");
    plantCardTitle.each(function(index){
        $(this).text(fakePlantListAPI[index].common_name)
    })

    var image = $(".img-generic");
    image.each(function(index) {
        $(this).attr("src", fakePlantListAPI[index].default_image.regular_url);
    })

    var scientificNameLiElement = $(".scientific-name");
    scientificNameLiElement.each(function(index) {
        $(this).text("Scientific Name: " + fakePlantListAPI[index].scientific_name[0])
    })

    var cycleLiElement = $(".cycle");
    cycleLiElement.each(function(index) {
        $(this).text("Cycle: " + fakePlantListAPI[index].cycle)
    })

    var wateringLiElement = $(".watering");
    wateringLiElement.each(function(index) {
        $(this).text("Watering: " + fakePlantListAPI[index].watering)
    })


};

var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');

});


generateFakeCard();

//This function renders data onto the My Plants Page Cards
var myPlantsPageCardInfo = function() {
    var detailedPlantCardTitle = $(".plantcard-title-detailed");
    detailedPlantCardTitle.each(function(index){
        $(this).text(fakePlantDetailAPI[index].common_name)
    })

    var careLevel = $(".care-level");
    careLevel.each(function(index){
        $(this).text("Care Level: " + fakePlantDetailAPI[index].care_level)
    })
  
    var image = $(".img-detailed");
    image.each(function(index) {
        $(this).attr("src", fakePlantDetailAPI[index].default_image.regular_url);
    })
    
    var plantDescription = $(".description");
    plantDescription.each(function(index){
        $(this).text("Description: " + fakePlantDetailAPI[index].description)
    })

    var idDetailed = $(".id-detailed");
    idDetailed.each(function(index){
        $(this).text(fakePlantDetailAPI[index].id)
    })

    var scientificNameDetailed = $(".scientific-name-detailed");
    scientificNameDetailed.each(function(index){
        $(this).text("Scientific Name: " + fakePlantDetailAPI[index].scientific_name[0])
    })

    var family = $(".family");
    family.each(function(index){
        $(this).text("Family: " + fakePlantDetailAPI[index].family)
    })

    var plantType = $(".type");
    plantType.each(function(index){
        $(this).text("Plant Type: " + fakePlantDetailAPI[index].type)
    })

    var cycleDetailed = $(".cycle-detailed");
    cycleDetailed.each(function(index){
        $(this).text("Cycle: " + fakePlantDetailAPI[index].cycle)
    })
    
    var wateringDetailed = $(".watering-detailed");
    wateringDetailed.each(function(index){
        $(this).text("Watering: " + fakePlantDetailAPI[index].watering)
    })

    var depthWaterRequirement = $(".depth-water-requirement")
    depthWaterRequirement.each(function(index) {
        $(this).text("Wather Depth Requirement: " + fakePlantDetailAPI[index].depth_water_requirement.value + " " + fakePlantDetailAPI[index].depth_water_requirement.unit )
    })

    var volumeWaterRequirement = $(".volume-water-requirement")
    volumeWaterRequirement.each(function(index) {
        $(this).text("Wather Volume Requirement: " + fakePlantDetailAPI[index].volume_water_requirement.value + " " + fakePlantDetailAPI[index].volume_water_requirement.unit )
    })

    var wateringPeriod = $(".watering-period")
    wateringPeriod.each(function(index) {
        $(this).text("Water in the " + fakePlantDetailAPI[index].watering_period)
    })

    var wateringGeneralBenchmark = $(".watering-general-benchmark")
    wateringGeneralBenchmark.each(function(index) {
        $(this).text("Water Every " + fakePlantDetailAPI[index].watering_general_benchmark.value + " " + fakePlantDetailAPI[index].watering_general_benchmark.unit )
    })
    
    var sunlight = $(".sunlight")
    sunlight.each(function(index) {
        $(this).text("Sunlight Requirements: " + fakePlantDetailAPI[index].sunlight)
    })
    var pruningMonth = $(".pruning-month")
    pruningMonth.each(function(index) {
        $(this).text("Prune Months: " + fakePlantDetailAPI[index].pruning_month.join(", "))
    })
    var pruningCount = $(".pruning-count")
    pruningCount.each(function(index) {
        $(this).text("Prune amount: " + fakePlantDetailAPI[index].pruning_count.amount + ". Pruning Interval: " + fakePlantDetailAPI[index].pruning_count.interval)
    })
}

myPlantsPageCardInfo();
$(".save-button").on("click", function() {
    var plantId = $(this).parent().find(".plant-card-id").text();
    var plantName = $(this).parent().find(".plantcard-title").text();

    localStorage.setItem(plantId, plantName);
});

import React from "react";
import { Container } from '@mui/material';
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from 'react';









export default function UploadDetails(){
    const { addCrop,getCrop } =useUserAuth();
    //const [imageUpload,setImageUpload]=useState(null)
    const cropData = { 
category:"Horticulture",
cropname: "Capsicum",
bannerImageUrl:["https://firebasestorage.googleapis.com/v0/b/farmland-89e6d.appspot.com/o/crops%2FCapsicum%2Frens-d-hosG6-qjRak-unsplash.jpg?alt=media&token=8263ca7c-0914-45fb-88af-1c00ff2b83cd",
"https://firebasestorage.googleapis.com/v0/b/farmland-89e6d.appspot.com/o/crops%2FCapsicum%2Frens-d-hosG6-qjRak-unsplash.jpg?alt=media&token=8263ca7c-0914-45fb-88af-1c00ff2b83cd"
],
cropImageUrl:"https://firebasestorage.googleapis.com/v0/b/farmland-89e6d.appspot.com/o/crops%2FCapsicum%2Fvd-photography-10P3udtKxeE-unsplash.jpg?alt=media&token=08e53901-5148-48de-965e-077619498f74",
soiltype:"Red Sandy Soil",
temperature:"19",
irrigation:"Water Logging",
location:"Tropical cold",
price:"59",
description:"Capsicum is the genus of pepper plants, which includes sweet peppers such as bell peppers. These peppers are a part of the nightshade family along with eggplant, potatoes and tomatoes. This vegetable is native to the Americas but is produced and used worldwide in international cuisines and as natural remedies. Capsicums are sweet and tangy, though the green varieties tend to taste more bitter.  Red capsicums, for example contain more phytonutrients than any of the other capsicums, making them the type with the highest antioxidants content. It has 11 times more beta-carotene, and one and a half times more vitamin C than green varieties.",
subcrops:["Maize","Sesame","Greengram","Blackgram"],
variety:["Ratna giri","Kuttanad","Pant dhan","Padma","Kiron"],
soilPreparation:["Plough the field thoroughly to incorporate the weeds in the field.",
"Ensure a smooth, level field for transplanting the seeding. It would be better to transplant 10-15 days after incorporating organic manure.",
"Before sowing specified for the region and variety apply the fertilizer on the drained soil at the time of final ploughing and leveling."
],
seeding:["The seed bed need to prepare by plouging the field two to three times until the soil is thoroughly puddled and levelled.",
"Prepare raised beds 5 to 10cm high 1 to 1.5m wide and of convenient length with drainage channels between the beds.",
"Apply cattle manure 1kg per square meter and mix it well. Then soak the paddy seed in the water for 12-16 hours.",
"The soaked seed then need to place it on the wet bed for week. The seed will germinate within 3 days and the seed always need to kept wet."
],
waterManagement:["Maintain water level at about 1.5cm during transplanting. Therefore increase it gradually to about 5cm untill maximum tillering.",
"In the areas where water for irrigation is assured and where acidity is high,draining and reflooding every 15days are recommended."
],
organicFertilizer:[
{
"0-5days":"Apply green leaf 5 ton/hectare and incorporate into the soil while ploghing, also add vermicompost 2.5 tons/hectare."
},
{
"10-18days":"Azospirillum is good bio fertilizer which fixes the nitrogen to the plant. Mix 2kg culture with 60 liter water and apply to 1 hectare."
},
{
"20-25days":"Blue green algae is applied 10kg/hectare to maintain the pH level of the soil. "
},
{
"28-33days":"Cow dung, Neem cake and other organic fertilizer applied at regular interval of time like 45th day and 70th day."
}
],
chemicalFertilizer:[
{
"0-5days":"Apply 0.5-1 ton NPK(30-10-10) per hectare after planting small paddyy."
},
{
"10-18days":"Apply Urea 1.5 ton per heatare and maintain 7-8cm water level regularly."
},
{
"40-45days":"Apply 0.2-0.3 tons of NPK(40-0-0) or NPK(30-0-0) per hectare."
},
{
"65-70days":"MOP is good for better holding the paddy grains. 20kg per hectare is applied during this time."
}
],
disease:[
{ 
"Blast":"This disease also known as rice fever. This severe disease were farmer can loss upto 80% of his production. The better way to overcome this disease is avoid excess usage of nitrogen."
},
{
"Bacterial Leaf Blight":"The Water-soaked to yellowish stripes on leaf blades or starting at leaf tips then later increase in lengthand width with a wavy margin. Spraying fresh cowdung extract 20% is best medicine."
},
{
"Brown Spot":"This is also called as sesame leaf spot or Helminthosporiose or fungal blight. The leaf spotting is very common. Spraying Metominostrobin @ 500ml/ha will help the management of disease."
}
],
harvesting:["Threshing - separating the paddy grain from the rest of cut crop.",
" Cleaning - removing immature, unfilled, non-grain materials. Hauling - moving the cut crop to the threshing location.",
"Field drying - leaving the cut crop in the field and exposing it to the sun for drying"
],
youtubeLinks:["TEbM1KmcVDA",
"tHNkNxg2NKU",
"lgZBlD-TCFE" //bannerimage
],
state:["Kerala","Karnataka","Tamilnadu","Andhra Pradesh"]
};
   

        const handleSubmit = (e) => {
            try{
                console.log("testing")
                console.log(cropData)
                addCrop(cropData);
                handledata();
                
            }
            catch(err){

            }
            // console.log(imageUpload)

        };
        const handledata = (e) => {
            getCrop()
            console.log("handle data")

        };
    
    return(
            <Container>
                <div>
                    
                    {/* <input type="file" onChange={(event)=>{
                        setImageUpload(event.target.files[0]);
                    }}
                    /> */}
                    <button  onClick={handleSubmit}>
                        upload
                    </button>
                </div>

            </Container>
    );

}
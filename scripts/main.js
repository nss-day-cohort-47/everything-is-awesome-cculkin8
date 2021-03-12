console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} 
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	}
	else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("change", (event) => {
	const material = document.querySelector("#materialSelect").value;
	if (material === "NONE") {
		makeLegoList(useLegos())
	} 
	else { console.log("material", material)
		legosByMaterial(material)
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const legosByMaterial = (whatMaterial) => {
	const materialArray = useLegos().filter(singleLego => {
		if (singleLego.Material === whatMaterial) {
			return singleLego;
		}
	})
	makeLegoList(materialArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();

 navElement.addEventListener("keyup", (event) => {
 	if (event.key === "Enter"){
 		if (event.target.id === "search"){
 			searchBar();
 		}
 	}
 })

 function searchBar() {
 	const legoID = document.getElementById("search").value
 	console.log("legoID", legoID)
 	const legoIDSearch = useLegos().filter(singleLego => {
 		if(singleLego.legoId === legoID){
 			return singleLego
 		}
 	})
 	if (legoIDSearch.length === 0){
 		document.getElementById("all-legos").innerHTML = "<p> Sadly we couldn't find what you are looking for </p>"
 	}
 	else { makeLegoList(legoIDSearch)}
 }
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
	else {
		legosByMaterial(document.querySelector("#materialSelect").value)
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
	const materialArray = use().filter(singleLego => {
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

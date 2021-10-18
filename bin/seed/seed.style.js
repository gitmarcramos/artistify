const mongoose = require("mongoose");
const StylesModel = require("../../model/Styles.model");
require('../../config/mongo');

const styles = [
  {
    name: "Jazz",
    color: "#94d2bd",
    wikiURL: "https://fr.wikipedia.org/wiki/Jazz",
    image:
      "https://images.unsplash.com/photo-1503853585905-d53f628e46ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=986&q=80",
  },
  {
    name: "Blues",
    color: "#005f73",
    wikiURL: "https://fr.wikipedia.org/wiki/Blues",
    image:
      "https://images.unsplash.com/photo-1512248607101-e26c16d28749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Rap",
    color: "#ae2012",
    wikiURL: "https://fr.wikipedia.org/wiki/Rap",
    image:
      "https://images.unsplash.com/photo-1600962815726-457c46a12681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80",
  },
];

(async function feedDb(){
    try {
        await StylesModel.deleteMany()
        const seededStyle = await StylesModel.create(styles)
        console.log(`db has been feed with ${seededStyle.length} styles`)
    } catch (error) {
        console.error(error);
    }
})();

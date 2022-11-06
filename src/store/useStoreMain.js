import { defineStore } from "pinia";
import axios from "axios";

export default defineStore('main', {
	state : ()=> ({
		bannerList : [],
	}),
	getters : {
		getBannerList : state=> state.bannerList,
	},
	actions : {
		async setBannerList(param) {
			this.bannerList = await axios.get('/display/main/banner', {
				params : param
			})
			.then(res=> res.data)
			.catch(error=> console.log(error));
		},
	}
})

import { defineStore } from "pinia";
import axios from "axios";

export const useStoreProduct = defineStore('useStoreProduct', {
	state : ()=> ({
		list : [],
		detail : {},
		cateList : [],
		saveProductResult : false,
	}),
	getters : {
		getList : state=> state.list,
		getDetail : state=> state.detail,
		getCateList : state=> state.cateList,
		getPrdtResult : state=> state.saveProductResult,
	},
	actions : {
		async setList(cateNo) {
			await axios.get('/display/product/list', {
				params : {
					cateNo : cateNo,
					useYn : 'Y',
					dispYn : 'Y',
				}
			})
			.then(res=> this.list = res.data)
			.catch(error=> console.log(error));
		},
		async setDetail(prdtNo) {
			await axios.get(`/product/${prdtNo}`)
			.then(res=> this.detail = res.data)
			.catch(error=> console.log(error));
		},
		async setCateList(param) {
			await axios.get(`/cate/list`, {
				params : param,
			})
			.then(res=> this.cateList = res.data)
			.catch(error=> console.log(error));
		},
		async setProductData(data) {
			const prdtNo = data.get('prdtNo');
			await axios.post(`/product/${prdtNo}`, data, {
				headers : {
					'Content-Type' : 'multipart/form-data',
				}
			})
			.then(res=> this.saveProductResult = res.data || false)
			.catch(error=> console.log(error));
		}
	}
});
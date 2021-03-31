import axios from 'axios'
const control =  () =>{
    return axios.get('/api/jsaf-cloud-bussiness-operation/operation/log/selectByPage',{}) //promise  axios
}
const echartdata=()=>{
    return axios.get('https://www.fastmock.site/mock/006c006287b8911f6b7585e6ee959cda/dx/api/getEchartsData',{}) //promise  axios
}
const controls =  () =>{
    return '我来了s';
}
export default {
    control,
    controls,echartdata
}
import "alpinejs";
// declare global {
//   interface Window {
//     page1: typeof page1;
//   }
// }
// window.page1 = page1;

// function page1(){
//     let tabActive: number;
//     if(location.href.split("#")[1] !== undefined){
//         tabActive = parseInt(location.href.split("#")[1])
//     }else{
//         tabActive = 1;
//     }
//     let where_options = [{
//         name: 'ISRAEL',
//         code: 'ISR'
//     },{
//         name: 'ENGLAND',
//         code: 'ENG'
//     }]
//     let when_options = [{
//         date: '23 JAN',
//         date_full : '23 JAN 2021'
//     },{
//         date: '01 APR',
//         date_full : '01 APR 2021'
//     }]

//     let newForm = {
//         where: where_options[0],
//         what: '',
//         when: when_options[0],
//         who: []
//     }
//     if(localStorage.getItem('form-data-page1')){
//         let jsonData = localStorage.getItem('form-data-page1') || ''
//         newForm = JSON.parse(jsonData)
//     }

//     function saveDataPage1(){
//         // Action data
//         localStorage.setItem("form-data-page1", JSON.stringify(newForm))
//     }
//     return {
//         data : {
//             tab: tabActive,
//             where_options : where_options,
//             when_options : when_options,
//             form: newForm
//         },
//         saveDataPage1
//     }
// }


// import {ButtonHouseTemplate} from "./interfases";
//
// bhList: ButtonHouseTemplate[] = [
//   {id: 1, occupied: false, comfort: 1, numberPlaces: 12, position: {top: '9%', left: '26%', rotation: '-10deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 2, occupied: false, comfort: 1, numberPlaces: 12, position: {top: '51%', left: '47%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 3, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '14%', left: '50%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 4, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '15%', left: '47%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 5, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '17%', left: '44.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 6, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '19%', left: '42.8%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 7, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '21%', left: '40.7%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   { id: 8, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '25%', left: '36.6%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   { id: 9, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '27%', left: '34.5%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   { id: 10, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '29%', left: '32.4%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 11, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '31%', left: '29.0%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 12, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '33%', left: '26.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 13, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '35%', left: '32%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 14, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '38.5%', left: '28%', rotation: '-70deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 15, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '43%', left: '24%', rotation: '-70deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 16, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '18%', left: '50%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 17, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '20%', left: '47.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 18, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '22%', left: '45.8%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 19, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '24%', left: '43.7%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 20, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '28%', left: '39.5%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 21, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '30%', left: '37.4%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 22, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '32%', left: '35.3%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 23, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '24%', left: '51.5%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 24, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '26%', left: '49.4%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 25, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '28%', left: '47.3%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 26, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '30%', left: '45.2%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 27, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '18%', left: '55%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 28, occupied: false, comfort: 1, numberPlaces: 4, position: {top: '20.7%', left: '53.7%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 29, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '32%', left: '43.1%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 30, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '38%', left: '35%', rotation: '-45deg'}, style: {background: 'grey, display: true', display: true, change: false}},
//   {id: 31, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '40%', left: '32.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 32, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '42%', left: '30.8%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 33, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '44%', left: '28.7%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
//
//   //-----------------------------------------------------------------------------------------------------------------------------------------------
//
//   {id: 34, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '52%', left: '68%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 35, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '53%', left: '65%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 36, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '54%', left: '62%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 37, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '55%', left: '59%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 38, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '56%', left: '56%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 39, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '54%', left: '74%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 40, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '55%', left: '71%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 41, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '56%', left: '68%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 42, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '57%', left: '65%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 43, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '58%', left: '62%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 44, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '59%', left: '59%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 45, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '59%', left: '72%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 46, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '60%', left: '69%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 47, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '61%', left: '66%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 48, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '62%', left: '63%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 49, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '63%', left: '60%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//
//   //-----------------------------------------------------------------------------------------------------------------------------------------------
//
//   {id: 50, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '69%', left: '63%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 51, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '70.7%', left: '60.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 52, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '72.4%', left: '58%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 53, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '69%', left: '72%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 54, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '70.7%', left: '69.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 55, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '72.4%', left: '67%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 56, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '74.1%', left: '64.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 57, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '75.8%', left: '62%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 58, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '73%', left: '74%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 59, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '74.7%', left: '71.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 60, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '76.4%', left: '69%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 61, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '78.1%', left: '66.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 62, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '79.8%', left: '64%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 63, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '69.6%', left: '79%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 64, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '76.5%', left: '77%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 65, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '78.2%', left: '74.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 66, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '79.9%', left: '72%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
//
//   //-----------------------------------------------------------------------------------------------------------------------------------------------
//
//   {id: 67, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '48.5%', left: '65%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 68, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '49.5%', left: '62%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 69, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '50.5%', left: '59%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 70, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '37.5%', left: '64%', rotation: '-55deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 71, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '39.5%', left: '68%', rotation: '35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 72, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '41.5%', left: '71%', rotation: '35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 73, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '42%', left: '64%', rotation: '35deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 74, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '46%', left: '70%', rotation: '-55deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 75, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '41%', left: '78%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 76, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '44%', left: '76.5%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 77, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '30%', left: '77.2%', rotation: '-87deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 78, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '33%', left: '77%', rotation: '-87deg'}, style: {background: 'grey', display: true, change: false}},
//   {id: 79, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '36%', left: '76.8%', rotation: '-87deg'}, style: {background: 'grey', display: true, change: false}},
//
//   {id: 80, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '23%', left: '67%', rotation: '-55deg'}, style: {background: 'grey', display: true, change: false}}
// ]
// addToDb() {
//   // console.log(+this.bhList[20].position.left.replace(/[^0-9,-,.]/g,""))
//   // console.log(+this.bhList[0].position.rotation)
//
//   for(let i = 0; i < this.bhList.length; ++i){
//     //this.add(i)
//     this.objectService.createObject(this.add(i)).subscribe(()=>{
//       console.log(`element ${i} успешно добавлен!`)
//     })
//   }
//
//
// }
// add(index:number): ButtonHouse{
//   let newHouse: ButtonHouse
//
//   newHouse = {
//     name: '',
//     img: '',
//     type: 'house',
//     numObj: this.bhList[index].id,
//     occupied: false,
//     comfort: this.bhList[index].comfort,
//     numberPlaces: this.bhList[index].numberPlaces,
//     position: {
//       top: this.bhList[index].position.top.replace(/[^0-9,-,.]/g,""),
//       left: this.bhList[index].position.left.replace(/[^0-9,-,.]/g,""),
//       rotation: this.bhList[index].position.rotation.replace(/[^0-9,-]/g,"")
//     },
//     style: {
//       background: '',
//       display: true,
//       change: false
//     },
//     text: '',
//     fontSize: '',
//     color: '',
//     size: {
//       width: '2.5',
//       height: '3'
//     }
//   }
//   //console.log(newHouse.position.rotation)
//   return newHouse
// }

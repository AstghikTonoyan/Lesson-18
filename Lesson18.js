"use strict";
/*Տնային 18

2. ստեղծում եք մեկ հատ Object 10 հատ property-ներով, 5 property-Ն պետք ա լինեն object, 
ու for in-ով անում եք այնպես, որ կոնսոլում տպվեն համ առաջին մակարդակի property-ները իրենց 
value-ներով,համ 2րդ մակարդակի (Օբյեկտի մեջի Օբյեկտների)*/

 const user = {
    name: "Անի",
    lastName: "Հակոբյան",
    age:20,
    isMarried: "yes",
    isworking: "yes",
    family: {mother: "Մանե", father: "Հայկ", sister: "Աննա", brather: "Արթուր", husband: "Արամ" },
    children: {child1: "Աննա",child2: "Վահե",child3: "Գևորգ",},
    education: {school: "N1 դպրոց", colege: "Պետական քոլեջ", university: "մագիստրոս",},
    profession: { prof1: "տնտեսագետ",prof2: "հաշվապահ"},
    languages: {lang1:"հայերեն", lang2: "անգլերեն"} , 
    sayAboutUser(){console.log(user);},
    sayAboutchilds(){console.log(user.children);},
    };
    //-------method()----------
    const {sayAboutUser, sayAboutchilds} = user;
    sayAboutUser();
    sayAboutchilds();
    //--For in------------
    for( let key in user){
        if( typeof(user[key] ) === "object"){
            for ( let nkey in user[key] ) {
                console.log(`property ${nkey}, value ${user[key][nkey]}`);
            }
        }
        else{
        console.log(`property: ${key}, value: ${user[key]}`);
        }
    }
   
/*3․  ստեղծում եք մեկ հատ Array, 10 հատ item-ներով, 
5 item-ը պետք ա լինեն Array-ներ, ու for in-ով ու for of-ով անում եք այնպես,
 որ կոնսոլում տպվենհամ առաջին մակարդակի item-ները համ 2րդ մակարդակի (Զանգվածի մեջ զանգված)*/
const winNumber = [1,  function aboutWin (){console.log(winNumber);}, 
    15, [21, 25, 26], 31, 45, [58, 59],[65, 66],74, [87,88], [96,95]];
// -----for in-----------
 for( let index in winNumber){
    
    console.log(`index : ${winNumber[index]}`); 
}
//------for of-----------
for( let val of winNumber){
   
    console.log(`val : ${val}`); 
}
//-------method()-------
 const [ , aboutWin] = winNumber;
 aboutWin();

/*4․ ստեղծում եք առանձին Object ու Array, որոնց մեջ ստեղծում եք function-ներ, ու փորձում եք ստանալ 
destructuring անելով, այսինքն առանց կետի կանչելով, ուղղակի գրեք ֆունկցիայի անունը ու կանչեք
*/
//------object----------
const marketList = {
    applePrice  : "100 դրամ",
    bananPrice  : "200 դրամ" , 
    orangePrice : "300 դրամ",
    lemonPrice  : "600 դրամ" ,
    kiwiPrice   : "400 դրամ" ,
    reserve     : { 
        apple :  "20 կգ",
        banan :  "50 կգ",
        orange : "80 կգ",
        lemon :  "90 կգ",
        kiwi :  "10 կգ"
    },
    order : {
    apple :  "5 կգ",
    banan :  "2 կգ",
    orange : "8  կգ",
    lemon :  "9 կգ",
    kiwi :  "10 կգ"

    },
    aboutMarket() {console.log(marketList);}
 };
 const {aboutMarket} = marketList;
 aboutMarket();

//------array-----------

const arr =[5, function makeSome(){console.log("Welcome!!");}, 10, 20, 30 , "Joe",true] ;
const [, makeSome] = arr;
makeSome(); 


/*5․ նորից կարդում եք boolean օպերատորները, օպերատորների պրիարիտետները, թեստ եք անում if, else if, else, 
ու ամենակարևորը էսի &&  ու էսի ||, ովքեր որ HTML CSS-ից լավ չեն, ապա նորից նայում են յութուբի դասերը 
կամ կարող եք այլ տեղերից նայել :)
*/
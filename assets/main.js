function symbol2codeWord(){
    let SpellingAlphabet = new Map();
    SpellingAlphabet.set("A", "Alfa");
    SpellingAlphabet.set("B", "Bravo");
    SpellingAlphabet.set("C", "Charlie");
    SpellingAlphabet.set("D", "Delta");
    SpellingAlphabet.set("E", "Echo");
    SpellingAlphabet.set("F", "Foxtrot");
    SpellingAlphabet.set("G", "Golf");
    SpellingAlphabet.set("H", "Hotel");
    SpellingAlphabet.set("I", "India");
    SpellingAlphabet.set("J", "Juliett");
    SpellingAlphabet.set("K", "Kilo");
    SpellingAlphabet.set("L", "Limo");
    SpellingAlphabet.set("M", "Mike");
    SpellingAlphabet.set("N", "November");
    SpellingAlphabet.set("O", "Oscar");
    SpellingAlphabet.set("P", "Papa");
    SpellingAlphabet.set("Q", "Quebec");
    SpellingAlphabet.set("R", "Romeo");
    SpellingAlphabet.set("S", "Sierra");
    SpellingAlphabet.set("T", "Tango");
    SpellingAlphabet.set("U", "Uniform");
    SpellingAlphabet.set("V", "Victor");
    SpellingAlphabet.set("W", "Whiskey");
    SpellingAlphabet.set("X", "Xray");
    SpellingAlphabet.set("Y", "Yankee");
    SpellingAlphabet.set("Z", "Zulu");
    SpellingAlphabet.set("0", "Zero");
    SpellingAlphabet.set("1", "One");
    SpellingAlphabet.set("2", "Two");
    SpellingAlphabet.set("3", "Three");
    SpellingAlphabet.set("4", "Four");
    SpellingAlphabet.set("5", "Five");
    SpellingAlphabet.set("6", "Six");
    SpellingAlphabet.set("7", "Seven");
    SpellingAlphabet.set("8", "Eight");
    SpellingAlphabet.set("9", "Nine");

    let inStr = (document.getElementById("inputString").value).toUpperCase();       

    let arrSymbol = inStr.split('');  
    let resultTxt = ' ';  

    for( let i = 0; i < arrSymbol.length; i++){
       if(arrSymbol[i] >= 'A' && arrSymbol[i] <= 'Z'  || arrSymbol[i] >= "0" && arrSymbol[i] <= '9'){
            resultTxt += SpellingAlphabet.get(arrSymbol[i]);
            resultTxt += ' ';
        }
    }    
  
    document.getElementById("spellingText").innerHTML = resultTxt;
}

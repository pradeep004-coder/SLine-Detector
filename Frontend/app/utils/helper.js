export const capitalize = (str) => { 
    const words = str.split(" ");
    const capitalizedWords = words.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    const capitalizedStr = capitalizedWords.join(" ")
    return capitalizedStr;
}

export const getSline = (name, age, gender) => {
    let score = 0;
    name = name.toLowerCase();
    const fname = name.includes(" ") ? name.split(" ")[0] : name;
    const akashRegex = /a.*k.*a.*s.*/;
    if (fname.includes("rahul") && age >= 18) score++;
    if (akashRegex.test(fname) && age >= 12) score+=3;
    if (fname.length >= 8) score-=2;
    if (gender === 'm' && fname.length === 5 && age >= 18) score+=1;
    if ((gender === 'f' || gender === "l") && fname.length === 6 && age >= 18) score+=3;
    if (age >= 12 && (gender === 'f' || gender === "l")) score++;
    if (age >= 16 && (gender === 'f' || gender === "l")) score++;
    if (age >= 18 && (gender === 'f' || gender === "l")) score++;
    if (age >= 20 && (gender === 'f' || gender === 'm' || gender === 'g')) score++;
    if (age >= 20 && gender === 'l') score+=3;
    if (age >= 24 && (gender === 'f'|| gender === "l")) score++;
    if (age >= 24 && gender === 'l') score+=5;
    if (age >= 30 && (gender === 'f' || gender === 'm' || gender === 'g')) score++;
    if (age >= 30 && (gender === "l")) score+=10;
    if (gender === 'a' || gender === 'b' || gender === 't'|| gender === 'o') return 0;
    return score;
}
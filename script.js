let celA1 = document.getElementById("inp_A1").value
let celD1 = document.getElementById("inp_D1").value
let celD2 = document.getElementById("inp_D2").value
let celD3 = document.getElementById("inp_D3").value
let celC4 = document.getElementById("inp_C4").value
let celB4 = document.getElementById("inp_B4").value

let oplB2 = document.getElementById("opl_B2").value
let oplC2 = document.getElementById("opl_C2").value
let oplB3 = document.getElementById("opl_B3").value
let oplC3 = document.getElementById("opl_C3").value

function solveProblem()
{
    alert("solveProblem wordt getriggerd!")
    //er zijn 6 voorwaarden die we steeds moeten checken:
    // 1) oplB2 + oplC2 = celD2 (rij)
    // 2) oplB3 + oplC3 = celD3 (rij)
    // 3) oplB2 + oplB3 = celB4 (kolom)
    // 4) oplC2 + oplC3 = celC4 (kolom)
    // 5) oplB3 + oplC2 = celD1 (diagonaal)
    // 6) oplC3 + oplB2 = celA1 (diagonaal)
    //tactiek: stel oplB2 = 1
    // op basis van 1) is dan oplC2 = celD2 - oplB2 (je 'weet'nu oplB2 en oplC2)
    // op basis van 3) is dan oplB3 = celB4 - oplB2 (je 'weet' nu oplB2, oplC2 en oplB3)
    // op basis van 4) is dan oplC3 = celC4 - oplC2 (je 'weet' nu alle 4 oplossingen)
    //je moet nu nog checken of deze 4 oplossingen ook voldoen aan 2), 5) en 6)
}
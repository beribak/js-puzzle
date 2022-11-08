// todo
const tiles = document.querySelectorAll("td")
const table = document.querySelector("table")
console.log(table.rows[3].querySelectorAll("td"))

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        const next = tile.nextElementSibling
        const previous = tile.previousElementSibling
        
        const parent = tile.parentElement
        const tileRow = tile.parentElement.rowIndex;
        const nextRow = table.rows[tileRow + 1]
        const previousRow = table.rows[tileRow - 1]
        const num = tile.innerText

        // if (nextRow && nextRow.querySelectorAll("td")[tile.cellIndex]) WRONG
        if (nextRow) {
            let topTile = nextRow.querySelectorAll("td")[tile.cellIndex] 
            if (topTile.classList.contains('empty')) {
                tile.classList.remove("active")
                tile.classList.add("empty")

                topTile.classList.remove("empty")    
                topTile.classList.add("active")
                
                tile.innerText
                tile.innerText = ""
                topTile.innerText = num 
            }
        }
        let topTile = previousRow.querySelectorAll("td")[tile.cellIndex] 

        if (previousRow ) {
            if (topTile.classList.contains('empty')) {
                tile.classList.remove("active")
                tile.classList.add("empty")

                topTile.classList.remove("empty")    
                topTile.classList.add("active")
                
                tile.innerText
                tile.innerText = ""
                topTile.innerText = num 
            }
        }

        if (next && next.classList.contains('empty')) {        
            tile.classList.remove("active")
            tile.classList.add("empty")
            tile.innerText
            tile.innerText = ""
            
            next.innerText = num 
            next.classList.add("active")
            next.classList.remove("empty")
        }

        if (previous && previous.classList.contains('empty')) {        
            tile.classList.remove("active")
            tile.classList.add("empty")
            tile.innerText
            tile.innerText = ""
            
            previous.innerText = num 
            previous.classList.add("active")
            previous.classList.remove("empty")
        }
    })
});
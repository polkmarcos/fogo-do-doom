const firePixelArray= []
const fireWidth=10
const fireHeight=10

function start (){
    createFireStructure()
    createFireSource()
    renderFire()
    setInterval(calculateFirePopagation, 1000)
}

function createFireStructure(){
const numberOfPixels= fireWidth*fireHeight

for(let i = 0; i< numberOfPixels; i++){
    firePixelArray[i]=0

}
}

function calculateFirePopagation(){
    for (let column = 0; column< fireWidth; column ++){

        for(let row = 0; row< fireHeight; row ++){
            const pixelIndex = column + ( fireWidth*row)
            updateFireIntensityPerPixel(pixelIndex)
        }
    }
    renderFire()


}

function updateFireIntensityPerPixel(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + fireWidth;

    if(belowPixelIndex >=fireWidth * fireHeight
    ){return}

    const decay = 1
    const belowPixelFireIntensity = firePixelArray[belowPixelIndex]
    const newFireIntensity = 
        belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay:0

    firePixelArray[currentPixelIndex]= newFireIntensity

   

}

function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'

    for(let row=0; row<fireHeight; row++){

        html+= '<tr>'

        for(let column = 0; column< fireWidth; column++){
            const pixelIndex= column + (fireWidth*row)
            const fireIntensity = firePixelArray[pixelIndex]

            html+='<td>'
            html += `<div class="pixel-index">${pixelIndex}</div>`
            html+=fireIntensity
            html+='</td>'

        }

        html+= '</tr>'

    }

    html+='</table>'

    document.querySelector('#fireCanvas').innerHTML = html



}

function createFireSource(){
    for( let column = 0; column <= fireWidth; column++){
        const overFlowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overFlowPixelIndex- fireWidth) + column

        firePixelArray [pixelIndex]= 36

    }

    
    
}

start()
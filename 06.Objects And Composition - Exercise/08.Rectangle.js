function rectangle(width,height,color) {
    let obj={
        width: Number(width),
        height: Number(height),
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea(){
            return width*height;
        }
    }
    return obj;
}
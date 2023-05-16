function cone(radius, height) {
    let volume = Math.PI * radius * radius * height / 3
    let s = Math.sqrt(radius * radius + height * height)
    let totalSurfaceArea = Math.PI * radius * (radius + s)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3.3,
    7.8
)
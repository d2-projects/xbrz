import { scaleImage } from './core/xBRZ.js'

function rgbaZip(data) {
  let result = [];
  for (let i = 0, len = data.length; i < len; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const pixel = a << 24 | r << 16 | g << 8 | b;
    result.push(pixel)
  }
  return result
}

function rgbaUnzip(data) {
  let result = []
  for (let i = 0, len = data.length; i < len; ++i) {
    const pixel = data[i]
    const a = (pixel >> 24) & 0xff
    const r = (pixel >> 16) & 0xff
    const g = (pixel >> 8) & 0xff
    const b = (pixel) & 0xff
    result.push(r)
    result.push(g)
    result.push(b)
    result.push(a)
  }
  return result
}

async function readImage(source) {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const srcImage = new Image()
    srcImage.src = source
    srcImage.onload = () => {
      const {
        width,
        height
      } = srcImage
      canvas.width = width
      canvas.height = height
      ctx.drawImage(srcImage, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = Array.from(imageData.data)
      resolve({
        width,
        height,
        data
      })
    }
  })
}

function scaleData({ data, width, height, scale }) {
  let target = new Array(width * scale * height * scale).fill(0)
  scaleImage(scale, rgbaZip(data), target, width, height, 0, height)
  return rgbaUnzip(target)
}

function refreshCanvas ({ canvas, width, height, data }) {
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  ctx.putImageData(new ImageData(new Uint8ClampedArray(data), width, height), 0, 0)
}

export async function scaleToCanvas ({ source, canvas, scale }) {
  const { width, height, data } = await readImage(source)
  refreshCanvas({
    canvas,
    width: width * scale,
    height: height * scale,
    data: scaleData({
      data,
      width,
      height,
      scale
    })
  })
}

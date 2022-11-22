import generateRandomNumber from './generateRandomNumber'

function generateSoftBackground() {
  const softBackground = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
  return softBackground
}

export default generateSoftBackground

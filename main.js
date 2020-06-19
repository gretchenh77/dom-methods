const bodyElement = document.querySelector('body')

const buttonElement = document.createElement('button')
bodyElement.append(buttonElement)
buttonElement.append('I am a big, beautiful, sexy button!!!!!!!!!!!!!!')

const mainElement = document.createElement('main')
bodyElement.append(mainElement)


const imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Dr_Pepper_bottle.JPG/260px-Dr_Pepper_bottle.JPG'
mainElement.append(imgElement)

 const anchorElement = document.createElement('a')
 anchorElement.className = 'link'
 anchorElement.href = 'https://www.wikipedia.org/'
 anchorElement.append('WIKIPEDIA')
 mainElement.append(anchorElement)


buttonElement.addEventListener('click', function () {
    mainElement.remove()
})

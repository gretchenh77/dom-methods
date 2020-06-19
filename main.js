const bodyElement = document.querySelector('body')

const buttonElement = document.createElement('button')
bodyElement.append(buttonElement)
buttonElement.append('I am a big, beautiful, sexy button!!!!!!!!!!!!!!')

const mainElement = document.createElement('main')
bodyElement.append(mainElement)






//https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Dr_Pepper_bottle.JPG/260px-Dr_Pepper_bottle.JPG
//<img src="" alt="">
//<a href=""></a>
const imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Dr_Pepper_bottle.JPG/260px-Dr_Pepper_bottle.JPG'
mainElement.append(imgElement)

 const anchorElement = document.createElement('a')
 anchorElement = 'link'
 anchorElement.href = 'https://www.wikipedia.org/'
 mainElement.append(anchorElement)
 anchorElement.append('WIKIPEDIA')


buttonElement.addEventListener('click', function () {
    mainElement.remove()
})

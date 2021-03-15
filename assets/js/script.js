const name = document.querySelector('#name')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const submit = document.querySelector('#submitBook')
const bookListData = document.querySelector('#bookView')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (name.value === '' && author.value === '' && year.value === '') {
        alert('Please Fill All Input')
    } else {
        // create a new table row  //
        const newTableRow = document.createElement('tr')
        // create a new name data //
        const newName = document.createElement('th')
        newName.innerHTML = name.value
        newTableRow.appendChild(newName)
        // create a new author data //
        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = author.value
        newTableRow.appendChild(newAuthor)
        // create a new year data //
        const newYear = document.createElement('th')
        newYear.innerHTML = year.value
        newTableRow.appendChild(newYear)

        bookListData.appendChild(newTableRow)
    }
})

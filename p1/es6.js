async function getData(){

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error.response)
    }

    }

    getData()
const myArr = [0,1,2,3,4,5,6,7,8,9,10]

//const newArr = myArr.filter((num)=>num>5)

const newArr = myArr.filter((num)=>{
    return num>4
})

//console.log(newArr);

const books = [
    {title:"one",
        genre:"fiction",
        publish:1990,
        edition:2009
    },
     {title:"two",
        genre:"science",
        publish:1995,
        edition:2003
    },
     {title:"three",
        genre:"history",
        publish:1980,
        edition:2016
    },
     {title:"four",
        genre:"fiction",
        publish:2008,
        edition:2010
    },
     {title:"five",
        genre:"biography",
        publish:1998,
        edition:2005
    },
     {title:"six",
        genre:"history",
        publish:1880,
        edition:2009
    },
     {title:"seven",
        genre:"science",
        publish:1972,
        edition:2004
    }
]

// const userBooks = books.filter((bk)=> bk.genre=="history")
const userBooks = books.filter((bk)=> bk.publish>=1975 && bk.genre==='science')


console.log(userBooks);

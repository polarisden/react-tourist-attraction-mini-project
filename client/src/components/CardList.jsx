import Card from "./Card"
import { useState, useEffect } from "react"
import axios from "axios"

function CardList({searchText, setSearchText}){
  
  const [data, setData] = useState([])

  async function requestData(){
    const res = await axios.get(`http://localhost:4001/trips?keywords=${searchText}`)
    setData(res.data.data)
  }

  useEffect(() => {
    requestData()
  },[searchText])

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start">
          {data.map((value,index) =>
            <Card key={index}
              title={value.title}
              mainImage={value.photos[0]}
              description={value.description.slice(0,100)}
              readMore={value.url}
              tags={value.tags}
              minorImage={value.photos}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default CardList
import axios from "axios"
import { useEffect, useState } from "react";
import hyperlink from '../assets/hyperlink.svg';

function Card(props) {
  // console.log("props =",props)
  const {title,mainImage,description,readMore,tags,minorImage,searchText, setSearchText} = props
  const [copied, setCopied] = useState(false)

  async function handleSearchCategory(category){
    if (searchText.trim() !== "") {
      if (!searchText.trim().split(" ").includes(category)){
        setSearchText(`${searchText} ${category}`)
      }
    } else {
      setSearchText(category)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(readMore)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex gap-6 p-4 bg-white items-start w-fit relative">
      {/* Main Image */}
      <div className="">
        <img 
          src={mainImage} 
          alt={title}
          className="w-70 h-52 object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[2px]">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800  cursor-pointer hover:text-[#419EDA]">
          <a href={readMore} target="_blank">{title}</a>
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm  leading-relaxed">
          {description} ...
        </p>

        {/* Read More Link */}
        <a 
          href={readMore}
          target="_blank"
          className="text-[#419EDA] text-sm underline hover:text-blue-600  inline-block"
        >อ่านต่อ</a>

        {/* Category Link */}
        <div className="flex gap-3 text-gray-500 text-sm mb-3">
          <p >หมวด</p>
          <div className="flex gap-3">
            {tags.map((value,index) => <button key={index} className="w-fit underline underline-offset-1" onClick={() => handleSearchCategory(value)}>{value}</button>)}
          </div>
        </div>

        {/* minor image */}
        <div className="flex gap-3">
          {minorImage.map(value => 
            <img 
              src={value} 
              alt={title}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-gray-200"
            />
          )}
        </div>

        <img 
          src={hyperlink} 
          alt="hyperlink" 
          className="w-24 h-24 absolute right-3 bottom-3 cursor-pointer" 
          onClick={handleCopyLink}
        />
        
        {copied && (
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in w-fit absolute right-0 bottom-[40%]">
            Copy สำเร็จ!
          </div>
          )}
      </div>
    </div>
  );
}

export default Card;

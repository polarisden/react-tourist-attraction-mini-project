function Header({searchText, setSearchText}){
  return (
    <>
      <div className="w-full bg-white">
        {/* Main Content */}
        <div className="flex flex-col items-center pt-16 px-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#419EDA] mb-12">
            เที่ยวไหนดี
          </h1>
          
          {/* Search Section */}
          <div className="w-full max-w-2xl">
            <label className="block text-gray-700 text-sm mb-1">
              ค้นหาที่เที่ยว
            </label>
            <input 
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน ..."
              className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-[#419EDA] text-gray-700 text-center placeholder:text-gray-400 bg-transparent"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header 
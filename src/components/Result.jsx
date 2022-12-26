function Result({img, book_title, author, year, page}) {
  return (
    <div className="card card-side bg-[#3B3B3B] w-[400px] m-4 shadow-xl">
      <figure>
        <img src={img} alt="Cover" className="w-40 h-56" />
      </figure>
      <div className="card-body my-[-5px] mx-[-20px] w-72">
        <h2 className="card-title my-[-5px]">{book_title} </h2>
        <h3>Writer: <span className="italic text-clip w-64 h-44">{author}</span> </h3>
        <p className="">First Publishing year: <span className="italic"> {year} </span> </p>
        <p className="">Page Count: <span className="italic"> {page} </span> </p>
      </div>
    </div>
  );
}

export default Result;

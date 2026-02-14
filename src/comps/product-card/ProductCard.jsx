function ProductCard(props) {
  const baseUrl = props.hasOwnProperty(props.baseUrl) ? props.baseUrl : "err";

  const imageUrl = props.hasOwnProperty("imageUrl")
    ? props.imageUrl
    : "https://jobs.ficsi.in/assets/front_end/images/no-image-found.jpg";

  const productName = props.hasOwnProperty("name") ? props.name : "Not found";

  return (
    <div className="border-2 border-solid rounded-md m-2 p-4 h-90 w-70 hover:cursor-pointer hover:text-black hover:bg-white">
      <h2 className="m-auto text-center courier-prime-bold">{productName}</h2>
      <img
        className="rounded-md m-auto h-50 w-60 object-cover hover:border-black border-2 my-2"
        src={imageUrl}
        alt=""
      />
      <p className="m-auto line-clamp-4 courier-prime-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore
        molestiae modi? Velit deleniti laborum suscipit? Atque magnam adipisci
        placeat culpa cupiditate corrupti possimus rem, aperiam nesciunt
        explicabo vero esse?
      </p>
    </div>
  );
}

export default ProductCard;

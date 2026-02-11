function ProductCard(props) {
  const baseUrl = props.hasOwnProperty(props.baseUrl) ? props.baseUrl : "err";

  const imageUrl = props.hasOwnProperty("imageUrl")
    ? props.imageUrl
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s";

  const productName = props.hasOwnProperty("name") ? props.name : "N/A";

  return (
    <div className="productCard">
      <img className="productImage" src={imageUrl} alt="" />
      <h2 className="productHeader">{productName}</h2>
      <p className="productDetail">TestTestTestTestTestTestTestTestTestTest</p>
    </div>
  );
}

export default ProductCard;

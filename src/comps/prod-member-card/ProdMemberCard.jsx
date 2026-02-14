function ProdMemberCard(props) {
  if (props.flipH) {
    return (
      <div className="border-3 rounded-lg my-2 mx-5 p-5">
        <img
          className="rounded-full h-50 ml-auto"
          src="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="border-3 rounded-lg my-2 mx-5 p-5">
        <img
          className="rounded-full h-50 mr-auto"
          src="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default ProdMemberCard;

import ProdMemberCard from "../../comps/prod-member-card/ProdMemberCard";

function AboutUs() {
  return (
    <div>
      <ProdMemberCard flipH={true} />
      <ProdMemberCard flipH={false} />
      <ProdMemberCard flipH={true} />
      <ProdMemberCard flipH={false} />
    </div>
  );
}

export default AboutUs;

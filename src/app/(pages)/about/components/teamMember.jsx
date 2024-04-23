import MemberCard from "./membercard";

function TeamMember() {
  return (
    <div className="lg:m-[80px] p-4">
      <div className="lg:flex block lg:gap-24">
        <div className=" ">
          <p>Our Team Members</p>
          <h1 className="lg:text-5xl text-2xl leading-none">Meet our</h1>
          <span className="lg:text-5xl text-2xl leading-none text-gray-400">Professional Team</span>
        </div>
        <div className="flex flex-1">
          <p className="italic lg:text-[24px] text-sm font-semibold">
            Ut enim ad minim veniam, quis nostrud nisi et exercitation the
            ullamco laboris containing Lorem nisi ut aliquip.
          </p>
        </div>
      </div>
      <div className="py-10">
      <MemberCard  />
      </div>
      
    </div>
  );
}

export default TeamMember;

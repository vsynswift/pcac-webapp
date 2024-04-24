import MemberCard from "./membercard";

function TeamMember() {
  return (
    <div className="lg:m-[80px] p-4">
      <div className="lg:flex block lg:gap-24 items-end">
        <div className=" flex flex-col gap-4">
          <div>
          <p>Our Team Members</p>
          </div>
          <div>
          <h1 className="lg:text-5xl text-2xl ">Meet our</h1>
          <span className="lg:text-5xl text-2xl text-secondaryTextColor">Professional Team</span>
          </div>
        </div>
        <div className="flex flex-1 pt-4 lg:pt-0 lg:justify-end">
          <div>
          <p className="italic lg:text-[20px] text-sm font-semibold justify-end">
            Ut enim ad minim veniam, quis nostrud nisi et exercitation the
          </p>
          <p className="italic lg:text-[20px] text-sm font-semibold justify-end">
          ullamco laboris containing Lorem nisi ut aliquip.
          </p>
          </div> 
        </div>
      </div>
      <div className="py-10">
      <MemberCard  />
      </div>
      
    </div>
  );
}

export default TeamMember;

"use client";

import ProfileCard from "./ProfileCard";

export default function ProfileCardSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-[#3a1945] to-slate-900 flex items-center justify-center py-20 px-4">
      <div className="text-center">
        <h2 className="text-white text-5xl font-bold mb-12">Featured Team Member</h2>
        
        <ProfileCard
          name="Sam Morrow"
          title="CEO & Founder"
          handle="sammorrow"
          status="Available"
          contactText="Contact Me"
          avatarUrl="/Person.png"
          iconUrl="/Asset-2-8x.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
    </section>
  );
}
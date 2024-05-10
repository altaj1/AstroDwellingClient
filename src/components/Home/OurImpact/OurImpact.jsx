const OurImpact = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Our Impact</h1>
      <p className="">Hear what our clients are saying about us</p>
      <div
        className="bg-[url('https://i.ibb.co/LNpXgdg/bg.png')] bg-cover text-white  grid lg:grid-cols-4 md:grid-cols-2 justify-around items-center p-28"
        style={{ clipPath: " polygon(0 10%, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="text-2xl  min-h-full flex justify-center items-center underline">
          Laura
        </div>
        <div className="bg-slate-600 shadow-2xl p-5 rounded-lg ">
          Laura was a single mother who had always dreamed of owning her own
          home. She didn't know where to start or how to navigate the
          complicated process of applying for a mortgage. She turned to our
          organization for guidance and support. We helped her understand her
          credit score, provided resources for first-time homebuyers, and
          connected her with our financial coach. Thanks to our guidance, Laura
          was able to start getting her finances on track to attain
          homeownership and appreciate our flexibility due to her busy work
          schedule -Current Participant (Fictitious name to protect identity)
        </div>
        <div className="text-2xl  min-h-full flex justify-center items-center underline">
          Emily
        </div>
        <div className="bg-slate-600 shadow-2xl p-5 rounded-lg ">
          Emily is a hard working single mother but wanted to invest in a home
          to leave as an inheritance for her child. She was intimidated by the
          homebuying process and worried about her limited income. Our
          organization provided her with resources for homebuyers and a
          financial coach. We also connected her with reputable real estate
          agent who specialized in the first time home buying process. Thanks to
          our support, Emily was able to complete the financial coaching program
          with a raised credit score and thought the envelope method really
          worked for her. She is currently waiting to get in our housing
          program. -Financial Coaching Graduate Participant (Fictitious name to
          protect identity)
        </div>
      </div>
    </div>
  );
};

export default OurImpact;

function Page() {
  return (
    <div className="component-highlight max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://placebear.com/640/360"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Bear Swim Time</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="component-sub-highlight inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
        <div className="px-6 py-4 component-sub-highlight ">
          <button className="btn-blue">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
export default Page;

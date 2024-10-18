import Image from "next/image";

const Notification2 = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-start p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-4`}
    >
      <Image
        src={`/3.jpeg`}
        width={200}
        height={200}
        alt="notification icon"
        className="rounded-xl w-[62px] h-[62px]"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex space-x-1">
            {["/n2.png", "/n3.png"].map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <Image
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={`icon ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">10k+</div>
        </div>
      </div>
    </div>
  );
};

export default Notification2;
